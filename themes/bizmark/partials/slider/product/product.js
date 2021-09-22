import Splide from '@splidejs/splide';

export default new class ProductSlider {
    constructor() {
        this.slider = '.product-slider'
        this.init()
    }

    init() {
        let slider = new Splide(this.slider, {
            type: 'fade',
            speed: 1000,
            pagination: false,
            width: '100%'
        }).mount()
    }
}