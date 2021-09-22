require('../../partials/slider/product/product');

import UrlGeneration from '@lovata/url-generation';

export default new class Offer {
    constructor() {
        this.size = 'input[name="size"]';
        this.cartButton = 'button[data-cart="true"]';
        this.offerInput = 'input[name="offer_id"]';
        this.basketWrap = '#basketWrap';
        this.cartWrap = '#cartWrap';

        this.xhr = null;

        this.init();
    }
    init () {
        $(this.size).on('change', (target) => {
            target.preventDefault();

            $.oc.stripeLoadIndicator.show();

            if (this.xhr) {
                this.xhr.abort()
            }

            let input = $(target.currentTarget),
                offer = input.val();

            UrlGeneration.init();
            UrlGeneration.set('offer', [offer]);
            UrlGeneration.update();

            this.xhr = $.request('ProductList::onAjaxRequest', {
                update: {
                    'product/price/price': '#priceWrap',
                },
                success: function (response) {
                    this.success(response)
                },
                complete: () => $.oc.stripeLoadIndicator.hide()
            })
        })

        $(this.cartButton).on('click', (target) => {
            target.preventDefault();

            $.oc.stripeLoadIndicator.show();

            if (this.xhr) {
                this.xhr.abort()
            }

            let _self = this,
                button = $(target.currentTarget),
                offer = $(this.offerInput).val();

            if (!offer) {
                offer = $(this.offerInput).val()
            }

            this.xhr = $.request('Cart::onAdd', {
                data: { 'cart': [{
                    'offer_id': offer,
                    'quantity': 1
                }]},
                success: () => {
                    $.request('ProductList::onAjaxRequest', {
                        update: {
                            'block/basket/basket': this.basketWrap,
                            'product/button/cart': this.cartWrap
                        },
                        success: function (response) {
                            this.success(response);
                            _self.init();
                        },
                        complete: () => $.oc.stripeLoadIndicator.hide()
                    });
                },
                error: (response) => {
                    console.log(response);
                }
            })
        })
    }
}