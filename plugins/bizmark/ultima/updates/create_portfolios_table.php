<?php namespace Bizmark\Ultima\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreatePortfoliosTable extends Migration
{
    public function up()
    {
        Schema::create('bizmark_ultima_portfolios', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->string('slug')->unique()->index();
            $table->text('preview_description')->nullable();
            $table->text('blocks')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('bizmark_ultima_portfolios');
    }
}
