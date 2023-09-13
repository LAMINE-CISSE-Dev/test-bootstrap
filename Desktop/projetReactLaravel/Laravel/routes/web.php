<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('listings', [
        "heading" => "Lastest Listing",
        "listings" => [
            // [
            //     "id" => 1,
            //     "title" => "Listing One",
            //     "description" => "Lorem ipsum dolor sit amet consecteteur adisipiscing
            //      Lorem ipsum dolor sit amet consecteteur adisipiscing
            //     Lorem ipsum dolor sit amet consecteteur adisipiscing
            //     Lorem ipsum dolor sit amet consecteteur adisipiscing"
            // ],
            // [
            //     "id" => 2,
            //     "title" => "Listing Two",
            //     "description" => "Lorem ipsum dolor sit amet consecteteur adisipiscing
            //      Lorem ipsum dolor sit amet consecteteur adisipiscing
            //     Lorem ipsum dolor sit amet consecteteur adisipiscing
            //     Lorem ipsum dolor sit amet consecteteur adisipiscing"
            // ]
        ]
    ]);
});

// juste une explication

// Route::get("/hello", function (){
//     return response("<h1>Hello world</h1>", 200)
//     ->header("Content-Type", "text/plain");
// });

// Route::get("/posts/{id}", function ($id) {
//     dd($id);
//    return response("Post " .$id);
// }) ->where("id", "[0-9]+");

// Route::get("/search", function (Request $request) {
//    return $request -> name ." ". $request -> city ;
// });