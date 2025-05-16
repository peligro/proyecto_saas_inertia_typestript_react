<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Perfil;
use App\Models\Estados;
use App\Models\Pais;
class UsersMetadata extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $table ='users_metadata';

    public function users()
    {
        return $this->belongsTo(User::class);
    }
    public function perfil()
    {
        return $this->belongsTo(Perfil::class);
    }
    public function estados()
    {
        return $this->belongsTo(Estados::class);
    }
    public function pais()
    {
        return $this->belongsTo(Pais::class);
    }
}
