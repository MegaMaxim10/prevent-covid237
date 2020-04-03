<?php

use Illuminate\Database\Seeder;

class PreventCovidSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("group")->insert([
            "group_name" => "admin",
            "group_desc" => "This is the administrator group",
            "group_state" => 1
        ]);

        DB::table("group")->insert([
            "group_name" => "user",
            "group_desc" => "This is a user group",
            "group_state" => 1
        ]);

        DB::table("group")->insert([
            "group_name" => "health",
            "group_desc" => "This is a Health group",
            "group_state" => 1
        ]);

        DB::table("users")->insert([
            "group_id" => 1,
            "name" => "admin",
            "last_name" => "admin",
            "email" => "admin@gmail.com",
            "password" => bcrypt("admin$.3")
        ]);
    }
}
