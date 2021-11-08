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
        $zones      = $request->input('zones');
        $groups     = $request->input('groups');
        $mone_avs   = $request->input('moneavs');
        $dates      = $request->input('dateRange');
        $per_cent   = $request->input('per_cent');
        $delta      = $request->input('delta');



        // Get All data according to criteria
        $query = ViewYomi::query();
        $query = $query->selectRaw('waste_zone, DATE(day_date) AS date, SUM(qty) AS qty');
        $query  = $query->orderBy('date');
        $zones && $query = $query->whereIn('waste_zone', $zones);
        $groups && $query = $query->whereIn('waste_group', $groups);
        $mone_avs && $query = $query->whereIn('mone_av', $mone_avs);
        $dates && $query = $query->whereBetween(DB::raw('DATE(day_date)'), [$dates[0], $dates[1]]);
        // $per_cent && $query = $query->whereBetween('per_cent', [$per_cent[0], $per_cent[1]]);
        // $delta && $query = $query->whereBetween('delta', [$delta[0], $delta[1]]);
        $query = $query->groupByRaw('date, waste_zone');
        $result = $query->get()->toArray();

        // Get All Zones
        $zones  = DB::select("SELECT waste_zone, waste_description FROM index_waste_zone ORDER BY waste_zone ASC");
        $zones_i = array_column($zones, 'waste_zone');

        // X-Axis data for return
        $date_range = new \DatePeriod(
            new \DateTime($dates[0]),
            new \DateInterval('P1D'),
            new \DateTime($dates[1])
        );
        foreach ($date_range as $index => $each) {
            $xaxis[$index] = $each->format('Y-m-d');
        }
        $xaxis = $this->getDatesFromRange($dates[0], $dates[1]);
        // Calculate Y-Axis data for return
        $yaxis  = [];
        foreach ($zones as $index => $each) {
            $yaxis[$index]['name'] = $each->waste_description;
        }

        foreach ($zones as $i => $each_i)
            foreach ($xaxis as $j => $each_j)
                $yaxis[$i]['data'][$j] = 0;

        foreach ($result as $each) {
            $yaxis[array_search($each['waste_zone'], $zones_i)]['data'][array_search($each['date'], $xaxis)] = $each['qty'];
        }

        $return = [
            'xaxis'     => $xaxis,
            'yaxis'     => $yaxis
        ];

        return response()->json($return);
    }

    private function getDatesFromRange($start, $end, $format = 'Y-m-d')
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
            $array[] = $date->format($format);
        }

        // Return the array elements
        return $array;
    }
}
