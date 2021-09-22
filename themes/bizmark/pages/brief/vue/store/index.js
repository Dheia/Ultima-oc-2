import Vue from 'vue'
import Vuex from 'vuex'

import player from './modules/player'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        message: 'Hello World'
    },
    getters: {
        message: state => state.message
    },
    modules: {
        player
    }
})

export default store