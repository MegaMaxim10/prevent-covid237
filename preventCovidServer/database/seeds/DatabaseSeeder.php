<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        // $this->call('EmseltSeeder');

        DB::table('quiz')->insert([
            'quiz_content' => 'Une question de plus',
            'quiz_answer_proposals' => 'tt',
            'quiz_answer' => 'tt',
            'quiz_answer_proposals' => 'tt',
            'quiz_justification_required' => 'tt',
            'quiz_justification' => 'tt',
            'quiz_difficulty_level' => 'tt',
            'quiz_lifetime' => 'ttttt',
            'quiz_lifetime_unit' => 'ttt',
            'quiz_marks' => 'tt',
            'quiz_state' => 'ttttt'
        ]);

    }
}
