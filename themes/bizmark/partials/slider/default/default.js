import Splide from '@splidejs/splide';

export default new class PortfolioDefaultSlider {
    constructor() {
        this.sliderSection = '.default-slider'
        this.slider = '.slider'
        this.sliderPagination = '.slider-pagination'
        this.init()
    }
    init() {
        let sliderSectionSelector = document.querySelectorAll(this.sliderSection)
        sliderSectionSelector.forEach(item => {

            let sliderSelector = item.querySelector(this.slider)
            let paginationSelector = item.querySelector(this.sliderPagination)
            let slider = null

            if(sliderSelector) {
                slider = new Splide(sliderSelector, {
                    type: 'loop',
                    speed: 1000,
                    pagination: false
                }).mount()
            }
            console.log(slider)
            if(slider != null) {
                if(paginationSelector) {
                    let paginationsItems = paginationSelector.querySelectorAll('li')

                    paginationsItems.forEach((item, index) => {
                        if(index == 0) {
                            item.classList.add('active')
                        }
                        item.querySelector('button').addEventListener('click', (e) => {
                            let slideIndex = e.target.getAttribute('data-slide')
                            slider.go(slideIndex)
                        })
                    })

                    slider.on('move', (newIndex, oldIndex) => {
                        paginationsItems[oldIndex].classList.remove('active')
                        paginationsItems[newIndex].classList.add('active')
                    })
                }
            }
        })
    }
}