<?php

use Illuminate\Support\Facades\Route;
 
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NosotrosController;
use App\Http\Controllers\seguridad\LoginController;

Route::middleware(['acceso'])->group(function () {
    
    Route::get('/', [HomeController::class, 'home_index'])->name('home_index');
});


//Route::get('/nosotros', [NosotrosController::class, 'nosotros_index'])->name('nosotros_index');
Route::middleware(['guest'])->group(function () {
    Route::get('/login', [LoginController::class, 'login_index'])->name('login_index');
    Route::post('/login', [LoginController::class, 'login_index_post'])->name('login_index_post');
    Route::get('/salir', [LoginController::class, 'login_salir'])->name('login_salir');
});

