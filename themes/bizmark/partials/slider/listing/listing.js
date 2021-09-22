
import { tns } from "tiny-slider/src/tiny-slider"
import UAParser from "ua-parser-js"

export default new class ListingSlider {
    constructor() {
        this.device = new UAParser(window.navigator.userAgent).getDevice()
        this.listingSlider = '.slider-section-desktop .listing-slider'
        this.listingSliderMobile = '.slider-section-mobile .listing-slider'
        this.init()
    }
    init() {
        if(document.querySelector(this.listingSliderMobile)) {
            let slider = tns({
                container: this.listingSliderMobile,
                items: 1,
                loop: false,
                nav: false,
                gutter: 15,
                controlsPosition: 'bottom',
                controlsText:  [`
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M26.1591 41.9992C17.323 42.0871 10.0887 34.9952 10.0008 26.1591C9.91293 17.323 17.0048 10.0887 25.8409 10.0008C34.677 9.91293 41.9113 17.0048 41.9992 25.8409C42.0871 34.677 34.9952 41.9113 26.1591 41.9992Z"
                                fill="white"
                            />
                            <path
                                d="M10.5008 26.1542C10.5859 34.7141 17.5942 41.5843 26.1541 41.4992C34.7141 41.4141 41.5844 34.4058 41.4992 25.8459C41.4141 17.2859 34.4058 10.4156 25.8458 10.5008C17.2859 10.5859 10.4156 17.5942 10.5008 26.1542Z"
                                stroke="white"
                            />
                        </g>
                        <path d="M21.575 26.01L27.586 20L29 21.414L24.4 26.014L29 30.607L27.586 32.021L21.575 26.01Z" fill="black" />
                        <defs>
                            <filter id="filter0_d" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    `, `
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">

                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M25.8409 41.9992C34.677 42.0871 41.9113 34.9952 41.9992 26.1591C42.0871 17.323 34.9952 10.0887 26.1591 10.0008C17.323 9.91293 10.0887 17.0048 10.0008 25.8409C9.91293 34.677 17.0048 41.9113 25.8409 41.9992Z"
                                fill="white"
                            />
                            <path
                                d="M41.4992 26.1542C41.4141 34.7141 34.4058 41.5843 25.8459 41.4992C17.2859 41.4141 10.4156 34.4058 10.5008 25.8459C10.5859 17.2859 17.5942 10.4156 26.1542 10.5008C34.7141 10.5859 41.5844 17.5942 41.4992 26.1542Z"
                                stroke="white"
                            />
                        </g>
                        <path d="M30.425 26.01L24.414 20L23 21.414L27.6 26.014L23 30.607L24.414 32.021L30.425 26.01Z" fill="black" />
                        <defs>
                            <filter id="filter0_d" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                `]
            });
        }
        if(document.querySelector(this.listingSlider)) {
            let sliderDesktop = tns({
                container: this.listingSlider,
                mode: 'gallery',
                items: 3,
                animateNormal: 'default',
                animateIn: "fadeInDownBig",
                animateOut: "fadeOutDownBig",
                speed: 1500,
                controls: false,
                swipeAngle: false,
                loop: false,
                navPosition: 'bottom',
                onInit() {
                    document.querySelectorAll('.tns-nav button').forEach(button => {
                        let buttonNumeric = Number(button.getAttribute('data-nav')) + 1
                        button.innerText = buttonNumeric
                    })
                    document.querySelectorAll('.slide-item').forEach(item => {
                        item.style['pointer-events'] = 'none'
                    })
                    document.querySelectorAll('.tns-nav button').forEach(button => {
                        button.disabled = true
                    })
                    setTimeout(() => {
                        document.querySelectorAll('.tns-nav button').forEach(button => {
                            button.disabled = false
                        })
                        document.querySelectorAll('.slide-item').forEach(item => {
                            item.style['pointer-events'] = ''
                        })
                    }, 2000)
                }
            });
            sliderDesktop.events.on('transitionStart', () => {
                document.querySelectorAll('.tns-nav button').forEach(button => {
                    button.disabled = true
                })
                document.querySelectorAll('.slide-item').forEach(item => {
                    item.style['pointer-events'] = 'none'
                })
            });

            sliderDesktop.events.on('transitionEnd', () => {
                document.querySelectorAll('.tns-nav button').forEach(button => {
                    button.disabled = false
                })
                document.querySelectorAll('.slide-item').forEach(item => {
                    item.style['pointer-events'] = ''
                })
            });
        }

    }
}