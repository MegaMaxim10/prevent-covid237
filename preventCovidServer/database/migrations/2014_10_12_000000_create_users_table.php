<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group', function (Blueprint $table) {
            $table->increments('group_id');
            $table->string('group_name');
            $table->text('group_desc')->default(null);
            $table->integer('group_state');
        });
        Schema::create('users', function (Blueprint $table) {
            $table->increments('user_id');
            $table->unsignedInteger('group_id');
            $table->string('name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('telephone')->nullable()->default(null);
            $table->string('icon_path')->nullable()->default(null);
            $table->string('birthday')->nullable()->default(null);
            $table->rememberToken();
            $table->index('group_id', 'i_fk_group_users');
            $table->foreign('group_id')->references('group_id')->on('group')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::create('product', function (Blueprint $table) {
            $table->increments('product_id');
            $table->unsignedInteger('user_id');
            $table->integer('user_id_validator')->nullable()->default(null);
            $table->timestamp('product_validation_date')->nullable();
            $table->string('product_name');
            $table->string('product_price');
            $table->string('product_link');
            $table->text('product_delivery_locality');
            $table->text('product_desc');
            $table->text('product_large_desc')->nullable()->default(null);
            $table->integer('product_state');
            $table->index('user_id', 'i_fk_product_users');
            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        }); 
        Schema::create('donation', function (Blueprint $table) {
            $table->bigIncrements('don_id');
            $table->unsignedInteger('user_id');
            $table->text('don_product_list');
            $table->string('don_locality');
            $table->string('don_rue');
            $table->string('don_town');
            $table->string('don_country')->nullable();
            $table->string('don_receiver_name')->nullable()->default(null);
            $table->string('don_receiver_email')->nullable()->default(null);
            $table->text('don_desc')->nullable()->default(null);
            $table->integer('don_state');
            $table->index('user_id', 'i_fk_donation_users');
            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade')->onUpdate('cascade');
        }); 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('donation');
        Schema::dropIfExists('product');
        Schema::dropIfExists('users');
        Schema::dropIfExists('group');
    }
}
