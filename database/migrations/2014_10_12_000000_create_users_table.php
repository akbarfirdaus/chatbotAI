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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('fullname');
            $table->text('alamat');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->integer('usia');
            $table->enum('jenis_kelamin', ['laki-laki', 'perempuan']);
            $table->string('password');
            $table->enum('role', ['admin', 'client'])->default('client');
            $table->string('verify_key');
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
