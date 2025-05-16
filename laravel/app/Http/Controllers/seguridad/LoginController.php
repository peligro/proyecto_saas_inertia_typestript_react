<?php

namespace App\Http\Controllers\seguridad;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\UsersMetadata;
class LoginController extends Controller
{
    public function login_index(Request $request)
    {
        return Inertia::render('seguridad/login/Index', []);
    }
    public function login_index_post(Request $request)
    {
        $validate = $request->validate(
        [
            'correo'=>'required|email:rfc,dns',
            'password'=>'required|min:6'
        ],
        [
            'correo.required'=>'El campo E-Mail está vacío',
            'correo.email'=>'El E-Mail ingresado no es válido',
            'password.required'=>'El campo Contraseña está vacío',
            'password.min'=>'El campo Contraseña debe tener al menos 6 caracteres'
        ]);
        if(Auth::attempt(['email'=>$request->input('correo'), 'password'=>$request->input('password')]))
        {
            $usuario = UsersMetadata::where(['users_id'=>Auth::id()])->first();
            if($usuario->estados_id==2)
            {
                return redirect()->route('acceso_salir');
            }
            $request->session()->put('users_metadata_id', $usuario->id);
            $request->session()->put('perfil_id', $usuario->perfil_id);
            $request->session()->put('perfil', $usuario->perfil->nombre);
            $request->session()->put('estados_id', $usuario->estados_id);
            $request->session()->put('estado', $usuario->estados->nombre);
            return redirect()->intended('/');
        }else
        {
            return redirect()->route('login_index')->with(['css'=>'warning', 'mensaje'=>'Las credenciales ingresadas no son válidas']);
        }
    }
    public function login_salir(Request $request)
    {
        Auth::logout();
        $request->session()->forget('users_metadata_id');
        $request->session()->forget('perfil_id'); 
        $request->session()->forget('perfil');
        $request->session()->forget('estados_id'); 
        $request->session()->forget('estado');
        return redirect()->route('login_index');

    }
}
