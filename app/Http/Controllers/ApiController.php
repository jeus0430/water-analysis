<?php

namespace App\Http\Controllers;

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
}
