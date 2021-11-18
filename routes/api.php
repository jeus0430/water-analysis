<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use Facade\FlareClient\Api;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/zones', [ApiController::class, 'zones']);
Route::get('/groups', [ApiController::class, 'groups']);
Route::get('/mone_avs', [ApiController::class, 'moneAvs']);
Route::get('/delta_range', [ApiController::class, 'deltaRange']);
Route::get('/per_cent_range', [ApiController::class, 'percentRange']);
Route::post('/chart', [ApiController::class, 'chart']);
