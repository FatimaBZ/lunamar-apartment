<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class visitor extends Model
{
    use HasFactory;
    public $table = 'visitor';
    public $timestamps = false;
    public $primaryKey = 'id';
}
