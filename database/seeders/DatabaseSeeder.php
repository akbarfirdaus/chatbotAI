<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Call other seeders here
        $this->call([
            UserTableSeeder::class,
            GejalaUtamaSeeder::class,
            GejalaLainnyaSeeder::class,
            // Add other seeders here
        ]);
    }
}
