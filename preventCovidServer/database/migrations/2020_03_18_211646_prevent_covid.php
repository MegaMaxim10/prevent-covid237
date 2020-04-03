<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PreventCovid extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group', function (Blueprint $table) {
            $table->bigIncrements('group_id');
            $table->string('group_name');
            $table->text('group_desc')->default(null);
            $table->integer('group_state');
        });
        Schema::create('product', function (Blueprint $table) {
            $table->bigIncrements('product_id');
            $table->integer('user_id_provider');
            $table->integer('user_id_validator');
            $table->string('product_name');
            $table->string('product_price');
            $table->text('product_locality');
            $table->text('product_desc')->default(null);
            $table->string('product_validation_date')->default(null);
            $table->integer('product_state');
        }); 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('group');
        Schema::dropIfExists('product');
    }
}
