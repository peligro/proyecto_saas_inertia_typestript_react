<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class HomeController extends Controller
{
    public function home_index(Request $request)
    {
        return Inertia::render('home/Home', ['nombre' => 'césar',]);
    }
}
