<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pais', function (Blueprint $table) {
            $table->id();
            $table->string("nombre", 50);
            $table->string("dominio", 10);
            $table->string("capital", 50);
            $table->string("prefijo", 50);
            $table->string("bandera", 100);
            $table->index(['nombre', 'dominio', 'capital', 'prefijo']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pais');
    }
};
