<?php namespace Bizmark\Ultima\Components;

use Cms\Classes\ComponentBase;
use Bizmark\Ultima\Models\Portfolio;

class PortfolioItem extends ComponentBase
{
    public $project;

    public function componentDetails()
    {
        return [
            'name'        => 'Portfolio Item',
            'description' => 'Output portfolio project'
        ];
    }

    public function defineProperties()
    {
        return [
            'slug' => [
                'title'       => 'Ссылка проекта',
                'default'     => '{{ :slug }}',
            ]
        ];
    }

    public function onRun()
    {
        $project = Portfolio::where('slug', $this->property('slug'))->first();

        if (empty($project)) {
            return $this->controller->run('404');
        }

        $this->page['project'] = $project;
    }
}
