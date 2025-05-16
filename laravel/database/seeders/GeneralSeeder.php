<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pais;
use App\Models\Estados;
use App\Models\Modulos;
use App\Models\Perfil;
use App\Models\Generos;
use App\Models\User;
use App\Models\UsersMetadata;
use App\Models\PerfilesModulos;
use Illuminate\Support\Facades\Hash;
class GeneralSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * php artisan db:seed --class=GeneralSeeder
     */
    public function run(): void
    {
        //pais
        Pais::insert(
            [
            'id'=>1,
            'nombre' => "Chile",
            'dominio'=>'cl',
            'capital'=>'Santiago',
            'prefijo'=>'+56',
            'bandera'=>'chile.png'
            ] 
        );
        Pais::insert(
            [
            'id'=>2,
            'nombre' => "México",
            'dominio'=>'mx',
            'capital'=>'Ciudad de México',
            'prefijo'=>'+52',
            'bandera'=>'mexico.png'
            ] 
        );
        //estados
        Estados::insert(
            [
            'id'=>1,
            'nombre' => "Activo"
            ] 
        );
        Estados::insert(
            [
            'id'=>2,
            'nombre' => "No Activo"
            ] 
        );
        //perfiles
        Perfil::insert(
            [
            'id'=>1,
            'nombre' => "Administrador"
            ] 
        );
        Perfil::insert(
            [
            'id'=>2,
            'nombre' => "Cliente"
            ] 
        );
        Perfil::insert(
            [
            'id'=>3,
            'nombre' => "Sin acceso"
            ] 
        );
        //usuarios
        User::insert(
            [
            'id'=>1,
            'name' => "César Cancino",
            'email'=>'yo@cesarcancino.com',
            'password'=>Hash::make('123456'),
            'created_at'=>date('Y-m-d H:i:s')
            ] 
        );
        UsersMetadata::insert(
            [
            'id'=>1,
            'users_id' => 1,
            'perfil_id'=>1,
            'estados_id'=>1,
            'pais_id'=>1,
            'telefono'=>'+56953240842',
            'direccion'=>'su casa',
            'ciudad'=>'Viña del Mar'
            ] 
        );
        User::insert(
            [
            'id'=>2,
            'name' => "Carlos Vicente",
            'email'=>'carlvicente@hotmail.com',
            'password'=>Hash::make('123456'),
            'created_at'=>date('Y-m-d H:i:s')
            ] 
        );
        UsersMetadata::insert(
            [
            'id'=>2,
            'users_id' => 2,
            'perfil_id'=>1,
            'estados_id'=>1,
            'pais_id'=>2,
            'telefono'=>'+573158422523',
            'direccion'=>'su casa',
            'ciudad'=>'Viña del Mar'
            ] 
        );
         //módulos
         Modulos::insert(
            [
            'id'=>1,
            'nombre' => "Administración"
            ] 
        );
        Modulos::insert(
            [
            'id'=>2,
            'nombre' => "Módulos"
            ] 
        );
    }
}
