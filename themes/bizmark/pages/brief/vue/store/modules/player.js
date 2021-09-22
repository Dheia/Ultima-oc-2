export default {
    namespaced: true,
    state: {
        ship: {
            width: 0,
            height: 0,
            xPosition: 0,
            yPosition: 0
        }
    },
    mutations: {
        setShipParams(state, payload) {
            if(payload.width) {
                state.ship.width = payload.width
            }
            if(payload.height) {
                state.ship.height = payload.height
            }
            if(payload.xPosition) {
                state.ship.xPosition = payload.xPosition
            }
            if(payload.yPosition) {
                state.ship.yPosition = payload.yPosition
            }
        },
        updateShipPosition(state, payload) {
            if(payload.xPosition) {
                state.ship.xPosition = payload.xPosition
            }
            if(payload.yPosition) {
                state.ship.yPosition = payload.yPosition
            }
        }
    },
    getters: {
        ship: state => state.ship
    }
}