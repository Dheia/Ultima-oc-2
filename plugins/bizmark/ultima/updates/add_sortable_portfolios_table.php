<?php namespace Bizmark\Ultima\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class AddSortablePortfoliosTable extends Migration
{
    const TABLE_NAME = 'bizmark_ultima_portfolios';

    public function up()
    {
        if (Schema::hasTable(self::TABLE_NAME)) {
            Schema::table(self::TABLE_NAME, function (Blueprint $table) {
                if (!Schema::hasColumn(self::TABLE_NAME, 'sort_order')) $table->integer('sort_order')->nullable();
            });
        }
    }

    public function down()
    {
        if (Schema::hasTable(self::TABLE_NAME)) {
            Schema::table(self::TABLE_NAME, function (Blueprint $table) {
                if (Schema::hasColumn(self::TABLE_NAME, 'sort_order')) $table->dropColumn('sort_order');
            });
        }
    }
}
