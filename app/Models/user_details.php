<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_details extends Model
{
    use HasFactory;
    public $table = 'user_details';
    public $timestamps = false;
    public $primaryKey = 'empid';
}
