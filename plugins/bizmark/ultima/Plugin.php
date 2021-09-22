<?php namespace Bizmark\Ultima;

use Backend, Event;
use BizMark\Ultima\Classes\Event\Product\ExtendProductFieldsHandler;
use System\Classes\PluginBase;
use Bizmark\Ultima\Classes\Event\ThemeData\ThemeDataModelHandler;

/**
 * Ultima Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'Ultima',
            'description' => 'No description provided yet...',
            'author'      => 'Bizmark',
            'icon'        => 'icon-leaf'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {
        $this->addEventListeners();
    }

    protected function addEventListeners()
    {
        Event::subscribe(ThemeDataModelHandler::class);
        Event::subscribe(ExtendProductFieldsHandler::class);
    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return [
            'Bizmark\Ultima\Components\PortfolioList' => 'PortfolioList',
            'Bizmark\Ultima\Components\PortfolioItem' => 'PortfolioItem',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return [
            'bizmark.ultima.some_permission' => [
                'tab' => 'Ultima',
                'label' => 'Manage Ultima plugin'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        return [
            'ultima' => [
                'label'       => 'Портфолио',
                'url'         => Backend::url('bizmark/ultima/portfolios'),
                'icon'        => 'icon-suitcase',
                'permissions' => ['bizmark.ultima.*'],
                'order'       => 500
            ],
        ];
    }
}
