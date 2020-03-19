<?php

namespace App\Console;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Maatwebsite\Excel\Excel;
use Webklex\IMAP\Client;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();

        $schedule->call(function () {
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
        })->everyFiveMinutes();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }

}
