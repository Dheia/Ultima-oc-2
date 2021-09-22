import bodymovin from './lottie.js'

export default new class SolarSystem {
    constructor() {
        this.solarSystemId = 'solar-system'

        this.init()
    }
    init() {
        bodymovin.loadAnimation({
            container: document.getElementById('solar-system'),
            render: 'svg',
            loop: true,
            autoplay: true,
            path: solarSystemPath
        })
    }
}