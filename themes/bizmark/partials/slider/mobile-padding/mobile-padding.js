import Splide from '@splidejs/splide';

export default new class MobilePaddingSlider {
    constructor() {
        this.sliders = document.querySelectorAll('.mobile-padding')
        this.init()
    }
    init() {
        this.sliders.forEach(slider => {
            new Splide(slider, {
                gap: 20,
                pagination: false,
                arrows: false,
                padding: {
                    right: '50px'
                },
            }).mount()
        })
    }
}