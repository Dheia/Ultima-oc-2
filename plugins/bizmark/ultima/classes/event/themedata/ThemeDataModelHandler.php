<?php namespace Bizmark\Ultima\Classes\Event\ThemeData;

use Cms\Models\ThemeData;

/**
 * Class ThemeDataModelHandler
 * @package Bizmark\Ultima\Classes\Event\Product
 */
class ThemeDataModelHandler
{
    /**
     * Add listeners
     * @param \Illuminate\Events\Dispatcher $obEvent
     */
    public function subscribe($obEvent)
    {
        ThemeData::extend(function ($obElement) {
            $fields = [
                'contacts',
                'about'
            ];

            /** @var ThemeData $obElement */
            $obElement->addJsonable($fields);
        });
    }
}
