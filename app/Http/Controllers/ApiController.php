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

    public function trans()
    {
        $sql    = "SELECT * FROM translation";
        $trans  = DB::select($sql);
        $trans  = array_column($trans, 'hebrew_name', 'field_name');
        return response()->json($trans);
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

        $zones          = $request->input('zones');
        $groups         = $request->input('groups');
        $mone_avs       = $request->input('moneavs');
        $date_min       = $request->input('date_min');
        $date_max       = $request->input('date_max');
        $date_max       = explode('T', $date_max)[0];
        $date_min       = explode('T', $date_min)[0];
        $percent_min    = $request->input('per_cent_min');
        $percent_max    = $request->input('per_cent_max');
        $delta_min      = $request->input('delta_min');
        $delta_max      = $request->input('delta_max');
        $sum            = $request->input('sum');
        $xaxis          = $request->input('xaxis');

        // Get All data according to criteria
        $query = ViewYomi::query();
        $ind_field = '';
        $sql_part  = '';

        switch ($xaxis) {
            case 'ezor':
                $ind_field = 'waste_zone';
                $sql_part = $ind_field . ', ';
                break;
            case 'group':
                $ind_field = 'waste_group';
                $sql_part = $ind_field . ', ';
                break;
            case 'mone_av':
                $ind_field = 'mone';
                $sql_part = $ind_field . ', ';
                break;
            default:
                $sql_part = '';
        }

        switch ($sum) {
            case "daily":
                $query = $query->selectRaw($sql_part . "DATE(day_date) AS dt, SUM(qty) AS qty, SUM(qty) AS s_qty, SUM(delta) AS delta, SUM(real_qty) AS real_qty, IF(SUM(qty)=0,0,SUM(delta)/SUM(qty) * 100) AS percent");
                break;
            case "weekly":
                $query = $query->selectRaw($sql_part . "CONCAT(YEAR(day_date), '-', WEEK(day_date)) AS dt, SUM(qty) AS qty, SUM(delta) AS delta, SUM(real_qty) AS real_qty, IF(SUM(qty)=0,0,SUM(delta)/SUM(qty) * 100) AS percent");
                break;
            case "monthly";
                $query = $query->selectRaw($sql_part . "MONTH(day_date) AS dt, SUM(qty) AS qty, SUM(delta) AS delta, SUM(real_qty) AS real_qty, IF(SUM(qty)=0,0,SUM(delta)/SUM(qty) * 100) AS percent");
                break;
            case "yearly":
                $query = $query->selectRaw($sql_part . "YEAR(day_date) AS dt, SUM(qty) AS qty, SUM(delta) AS delta, SUM(real_qty) AS real_qty, IF(SUM(qty)=0,0,SUM(delta)/SUM(qty) * 100) AS percent");
                break;
        }

        $query  = $query->orderBy('dt');

        $zones && $query = $query->whereIn('waste_zone', $zones);
        $groups && $query = $query->whereIn('waste_group', $groups);
        $mone_avs && $query = $query->whereIn('mone', $mone_avs);
        is_null($date_min) || $query = $query->where(DB::raw('DATE(day_date)'), '>=', $date_min);
        is_null($date_max) || $query = $query->where(DB::raw('DATE(day_date)'), '<=', $date_max);
        is_null($percent_max) || $query = $query->where('per_cent', '<=', $percent_max);
        is_null($percent_min) || $query = $query->where('per_cent', '>=', $percent_min);
        is_null($delta_max) || $query = $query->where('delta', '<=', $delta_max);
        is_null($delta_min) || $query = $query->where('delta', '>=', $delta_min);

        switch ($xaxis) {
            case "mone_av":
                $query = $query->groupByRaw('dt, mone');
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
        $tmp = $this->_getDtsFromRang($date_min, $date_max, $sum);

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
                    $sql = "SELECT DISTINCT mone_av AS descr, mone_av FROM monim WHERE mone_av <> ''";
                    if ($mone_avs)
                        $sql .= ' AND mone_av IN (' . implode(',', $mone_avs) . ')';
                    $column = DB::select($sql);
                    $column_i = array_column($column, 'mone_av');
                    break;
                case 'ezor':
                    $sql = "SELECT *, waste_description AS descr, waste_zone FROM index_waste_zone";
                    if ($zones)
                        $sql .= ' WHERE waste_zone IN (' . implode(',', $zones) . ')';
                    $column = DB::select($sql);
                    $column_i = array_column($column, 'waste_zone');
                    break;
                case 'group':
                    $sql = "SELECT *, waste_description AS descr, waste_group FROM index_waste_group";
                    if ($groups)
                        $sql .= " WHERE waste_group IN (" . implode(',', $groups) . ')';
                    $column = DB::select($sql);
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
        if (!$en)
            $en = date('Y-m-d');
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
