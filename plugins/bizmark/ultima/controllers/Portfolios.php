<?php namespace Bizmark\Ultima\Controllers;

use BackendMenu;
use Backend\Classes\Controller;

/**
 * Portfolios Back-end Controller
 */
class Portfolios extends Controller
{
    public $implement = [
        'Backend.Behaviors.FormController',
        'Backend.Behaviors.ListController'
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public function __construct()
    {
        parent::__construct();

        BackendMenu::setContext('Bizmark.Ultima', 'ultima', 'portfolios');
    }
}
