"use strict";
require('bootstrap/js/src/modal')
require('bootstrap/js/src/collapse')
require('@popperjs/core')

let bootstrap = require('bootstrap/dist/js/bootstrap.esm')

export default new class WishList {
    constructor() {
        this.productsContainer = document.querySelector('.products-container')
        this.productItem = '.product-item'
        this.totalSum = document.querySelector('input.total-sum')
        this.totalSumOutput = document.querySelector('.products-sum .sum')
        this.makeOrderForm = document.querySelector('form[data-order="true"]');

        this.init()
    }
    init() {
        const _self = this
        document.querySelectorAll(this.productItem).forEach(product => {
            let productPrice  = Number(product.getAttribute('data-price-one-product')),
                increment     = product.querySelector('button.increment'),
                decrement     = product.querySelector('button.decrement'),
                counter       = product.querySelector('input.counter'),
                counterOutput = product.querySelector('.output-counter'),
                productSum    = product.querySelector('input.product-sum'),
                sumOutput     = product.querySelector('.product-sum-wrap .sum'),
                deleteBtn     = product.querySelector('.product-delete');

            this.chechCounter(counter, decrement)

            productSum.value = Number(counter.value) * productPrice
            sumOutput.innerText = productSum.value

            increment.addEventListener('click', (e) => {
                counter.value = Number(counter.value) + 1
                counter.dispatchEvent(new Event('change'));
                _self.chechCounter(counter, decrement)

                _self.totalSum.value = Number(_self.totalSum.value) + productPrice
                _self.totalSum.dispatchEvent(new Event('change'));

                productSum.value = Number(productSum.value) + productPrice
                productSum.dispatchEvent(new Event('change'));
            })
            decrement.addEventListener('click', (e) => {
               counter.value = Number(counter.value) - 1
               counter.dispatchEvent(new Event('change'));
               _self.chechCounter(counter, decrement)

                _self.totalSum.value = Number(_self.totalSum.value) - productPrice
                _self.totalSum.dispatchEvent(new Event('change'));

                productSum.value = Number(productSum.value) - productPrice
                productSum.dispatchEvent(new Event('change'));

            })
            counter.addEventListener('change', (e) => {
                counterOutput.innerText = e.target.value

                if (this.xhr) {
                    this.xhr.abort()
                }

                let _self = this,
                    input = $(e.currentTarget),
                    quantity = input.val(),
                    position = input.data('position');

                this.xhr = $.request('Cart::onUpdate', {
                    data: {'cart': [
                            {'id': position, 'quantity': quantity}
                        ]},
                    success: function (response) {
                        this.success(response)
                    }
                })
            })
            productSum.addEventListener('change', (e) => {
                sumOutput.innerHTML = e.target.value
            })
            this.makeOrderForm.addEventListener('submit', (e) => {
                e.preventDefault();

                if (this.xhr) {
                    this.xhr.abort()
                }

                let formData = new FormData(e.target);
                let data = {
                     'user': {
                         'phone': formData.get('phone'),
                         'name': formData.get('name')
                     }
                };

                this.xhr = $.request('MakeOrder::onCreate', {
                    data: data,
                    success: function (obResponse) {
                        if (!obResponse) {
                            return;
                        }

                        if (!!obResponse['X_OCTOBER_REDIRECT']) {
                            return this.success(obResponse);
                        }

                        if (!obResponse.status) {
                            alert(obResponse.message);
                            // alert('Произошла ошибка при оформлении заказа. Ваша корзина сохранена. Свяжитесь с администрацией сайта.');
                        }

                        return this.success(obResponse);
                    }
                })
            })
            deleteBtn.addEventListener('click', (e) => {
                var bsCollapse = new bootstrap.Collapse(product, {
                    toggle: false
                })
                bsCollapse.hide()
                _self.totalSum.value = Number(_self.totalSum.value) - Number(productSum.value)
                _self.totalSum.dispatchEvent(new Event('change'));

                e.preventDefault();
                $.oc.stripeLoadIndicator.show()

                if (this.xhr) {
                    this.xhr.abort()
                }

                let button = $(e.currentTarget),
                    position = button.data('position')

                this.xhr = $.request('Cart::onRemove', {
                    data: {'cart': [position], 'type': 'position'},
                    update: {
                        'block/basket/basket': '#basketWrap'
                    },
                    success: function (response) {
                        this.success(response)
                    },
                    complete: () => $.oc.stripeLoadIndicator.hide()
                })

            })
            product.addEventListener('hidden.bs.collapse', () => {
                _self.productsContainer.removeChild(product)
                let productItemsCounter = document.querySelectorAll(_self.productItem).length
                if(productItemsCounter == 0) {
                    document.querySelector('.cart').style.display = 'none'
                    document.querySelector('.cart-empty').style.display = 'block'
                }
            })
        })

        this.totalSum.addEventListener('change', (e) => {
            _self.totalSumOutput.innerHTML = e.target.value
        })
    }
    chechCounter(counter, decrement) {
        let value = Number(counter.value)
        if(value == 1) {
            decrement.disabled = true
        } else {
            decrement.disabled = false
        }
    }
}