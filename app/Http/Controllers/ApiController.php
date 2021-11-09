<?php

namespace App\Http\Controllers;

use App\Models\ViewYomi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function zones()
    {
        $sql    = "SELECT * FROM index_waste_zone";
        $zones  = DB::select($sql);
        return response()->json($zones, 200);
    }

    public function groups()
    {
        $sql  = "SELECT * FROM index_waste_group";
        $groups = DB::select($sql);
        return response()->json($groups, 200);
    }

    public function moneAvs()
    {
        $sql  = "SELECT DISTINCT mone_av FROM monim WHERE mone_av <> ''";
        $mone_avs = DB::select($sql);
        return response()->json($mone_avs, 200);
    }

    public function deltaRange()
    {
        $sql = "SELECT MIN(delta) AS min, MAX(delta) AS max FROM kriot_yomi";
        $range = DB::select($sql);
        return response()->json($range[0], 200);
    }

    public function percentRange()
    {
        $sql = "SELECT MIN(per_cent) AS min, MAX(per_cent) AS max FROM kriot_yomi";
        $range = DB::select($sql);
        return response()->json($range[0], 200);
    }

    public function chart(Request $request)
    {
        config()->set('database.connections.mysql.strict', false);

        $zones      = $request->input('zones');
        $groups     = $request->input('groups');
        $mone_avs   = $request->input('moneavs');
        $dates      = $request->input('dateRange');
        $percent   = $request->input('percent');
        $delta      = $request->input('delta');
        $sum        = $request->input('sum');
        $xaxis      = $request->input('xaxis');

        // Get All data according to criteria
        $query = ViewYomi::query();
        $ind_field = '';
        $des_field = '';
        $sql_part  = '';

        switch ($xaxis) {
            case 'ezor':
                $ind_field = 'waste_zone';
                $des_field = 'waste_description';
                $sql_part = $ind_field . ', ';
                break;
            case 'group':
                $ind_field = 'waste_group';
                $des_field = 'waste_description';
                $sql_part = $ind_field . ', ';
                break;
            case 'mone_av':
                $ind_field = 'mone_av';
                $des_field = 'mone_av';
                $sql_part = $ind_field . ', ';
                break;
            default:
                $sql_part = '';
        }

        switch ($sum) {
            case "daily":
                $query = $query->selectRaw($sql_part . "DATE(day_date) AS dt, SUM(qty) AS qty, SUM(delta) AS delta, SUM(real_qty) AS real_qty, IF(qty=0, 0, delta/qty) AS percent");
                break;
            case "weekly":
                $query = $query->selectRaw($sql_part . "CONCAT(YEAR(day_date), '-', WEEK(day_date)) AS dt, SUM(qty) AS qty, SUM(delta) AS delta, SUM(real_qty) AS real_qty, IF(qty=0, 0, delta/qty) AS percent");
                break;
            case "monthly";
                $query = $query->selectRaw($sql_part . "MONTH(day_date) AS dt, SUM(qty) AS qty, SUM(delta) AS delta, SUM(real_qty) AS real_qty, IF(qty=0, 0, delta/qty) AS percent");
                break;
            case "yearly":
                $query = $query->selectRaw($sql_part . "YEAR(day_date) AS dt, SUM(qty) AS qty, SUM(delta) AS delta, SUM(real_qty) AS real_qty, IF(qty=0, 0, delta/qty) AS percent");
                break;
        }

        $query  = $query->orderBy('dt');

        $zones && $query = $query->whereIn('waste_zone', $zones);
        $groups && $query = $query->whereIn('waste_group', $groups);
        $mone_avs && $query = $query->whereIn('mone_av', $mone_avs);
        $dates && $query = $query->whereBetween(DB::raw('DATE(day_date)'), [$dates[0], $dates[1]]);
        $percent && $query = $query->whereBetween('percent', [$percent[0], $percent[1]]);
        $delta && $query = $query->whereBetween('delta', [$delta[0], $delta[1]]);
        switch ($xaxis) {
            case "mone_av":
                $query = $query->groupByRaw('dt, mone_av');
                break;
            case "ezor":
                $query = $query->groupByRaw('dt, waste_zone');
                break;
            case 'group':
                $query = $query->groupByRaw('dt, waste_group');
                break;
            default:
                $query = $query->groupByRaw('dt');
        }
        $result = $query->get()->toArray();

        // X-Axis data for return
        $tmp = $this->_getDtsFromRang($dates[0], $dates[1], $sum);
        $taxis = array_map(function ($e) use ($sum) {
            switch ($sum) {
                case 'daily':
                    return strtotime($e) * 1000;
                case 'weekly':
                    $tmp = explode('-', $e);
                    $n = new \DateTime();
                    return $n->setISODate($tmp[0], $tmp[1])->getTimestamp() * 1000  + 1;
                case 'monthly':
                    return \DateTime::createFromFormat('Y-m-d', $e . '-01')->getTimestamp() * 1000  + 2;
                case 'yearly':
                    return \DateTime::createFromFormat('Y-m-d', $e . '-01-01')->getTimestamp() * 1000 + 3;
            }
        }, $tmp);


        if ($xaxis != 'date') {
            $column = [];
            $column_i = [];
            switch ($xaxis) {
                case "mone_av":
                    $column = DB::select("SELECT DISTINCT mone_av AS descr, mone_av AS ind FROM monim WHERE mone_av <> ''");
                    $column_i = array_column($column, 'mone_av');
                    break;
                case 'ezor':
                    $column = DB::select("SELECT *, waste_description AS descr, waste_zone AS ind FROM index_waste_zone");
                    $column_i = array_column($column, 'waste_zone');
                    break;
                case 'group':
                    $column = DB::select("SELECT *, waste_description AS descr, waste_group AS ind FROM index_waste_group");
                    $column_i = array_column($column, 'waste_group');
                    break;
            }


            // Calculate Y-Axis data for return
            $yaxis  = [
                'delta'     => [],
                'qty'       => [],
                'real_qty'  => [],
                'percent'  => []
            ];
            foreach (['delta', 'qty', 'real_qty', 'percent'] as $each_key)
                foreach ($column as $index => $each) {
                    $yaxis[$each_key][$index]['name'] = $each->descr;
                }
            foreach (['delta', 'qty', 'real_qty', 'percent'] as $each_key)
                foreach ($column as $i => $each_i)
                    foreach ($taxis as $j => $each_j)
                        $yaxis[$each_key][$i]['data'][$j] = [$each_j, 0];

            foreach (['delta', 'qty', 'real_qty', 'percent'] as $each_key)
                foreach ($result as $each) {
                    $yaxis[$each_key][array_search($each[$ind_field], $column_i)]['data'][array_search($each['dt'], $tmp)][1] = $each[$each_key];
                }
        } else {
            $yaxis  = [
                'delta'     => [],
                'qty'       => [],
                'real_qty'  => [],
                'percent'  => []
            ];
            foreach (['delta', 'qty', 'real_qty', 'percent'] as $each_key) {
                $yaxis[$each_key][0]['name'] = $each_key;
                foreach ($taxis as $index => $each)
                    $yaxis[$each_key][0]['data'][$index] = [$each, 0];
            }
            foreach (['delta', 'qty', 'real_qty', 'percent'] as $each_key)
                foreach ($result as $index => $each)
                    $yaxis[$each_key][0]['data'][array_search($each['dt'], $tmp)][1] = $each[$each_key];
            $yaxis = $yaxis;
        }

        return response()->json($yaxis);
    }

    private function _getDtsFromRang($st, $en, $mode)
    {
        switch ($mode) {
            case 'daily':
                return $this->_getDatesFromRange($st, $en);
            case 'weekly':
                return $this->_getWeeksFromRange($st, $en);
            case 'monthly':
                return $this->_getMonthsFromRange($st, $en);
            case 'yearly':
                return $this->_getYearsFromRange($st, $en);
        }
    }

    private function _getDatesFromRange($start, $end)
    {
        // Declare an empty array
        $array = array();

        // Variable that store the date interval
        // of period 1 day
        $interval = new \DateInterval('P1D');

        $realEnd = new \DateTime($end);
        $realEnd->add($interval);

        $period = new \DatePeriod(new \DateTime($start), $interval, $realEnd);

        // Use loop to store date into array
        foreach ($period as $date) {
            $array[] = $date->format('Y-m-d');
        }

        // Return the array elements
        return $array;
    }

    private function _getMonthsFromRange($start, $end)
    {
        $array = array();

        $start    = (new \DateTime($start))->modify('first day of this month');
        $end      = (new \DateTime($end))->modify('first day of next month');
        $interval = \DateInterval::createFromDateString('1 month');
        $period   = new \DatePeriod($start, $interval, $end);

        foreach ($period as $dt) {
            $array[] = $dt->format('Y-m');
        }

        return $array;
    }

    private function _getYearsFromRange($start, $end)
    {
        $array = array();
        $getRangeYear   = range(gmdate('Y', strtotime($start)), gmdate('Y', strtotime($end)));
        foreach ($getRangeYear as $each)
            $array[] = $each;

        return $array;
    }

    private function _getWeeksFromRange($start, $end)
    {
        $startDateUnix = strtotime($start);
        $endDateUnix = strtotime($end);

        $currentDateUnix = $startDateUnix;

        $weekNumbers = array();
        while ($currentDateUnix < $endDateUnix) {
            $weekNumbers[] = date('Y-W', $currentDateUnix);
            $currentDateUnix = strtotime('+1 week', $currentDateUnix);
        }

        return $weekNumbers;
    }
}
