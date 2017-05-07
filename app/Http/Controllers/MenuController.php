<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;

class MenuController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function game()
    {
        return view('game');
    }
    public function info()
    {
        return view('info1');
    }

    public function info1()
    {
        return view('info1');
    }
    public function info2()
    {
        return view('info2');
    }
    public function info3()
    {
        return view('info3');
    }
}
