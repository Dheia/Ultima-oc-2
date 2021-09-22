<?php namespace Bizmark\Ultima\Components;

use Cms\Classes\ComponentBase;
use Bizmark\Ultima\Models\Portfolio;

class PortfolioList extends ComponentBase
{
    public $projects;

    public function componentDetails()
    {
        return [
            'name'        => 'Portfolio List',
            'description' => 'Output all portfolio projects'
        ];
    }

    public function onRun()
    {
        $this->projects = Portfolio::query()->orderBy('sort_order', 'ASC')->get();
    }
}
