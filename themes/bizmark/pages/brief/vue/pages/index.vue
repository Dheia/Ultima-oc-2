<template>
    <div class="education">
        <div class="education-wrap">
            <picture class="education-title">
                <img src="/themes/bizmark/assets/img/brief/education-title.svg" alt="">
            </picture>
            <picture>
                <img src="/themes/bizmark/assets/img/brief/line.svg" alt="">
            </picture>
        </div>
        <Ship></Ship>
        <picture class="education-mousemove">
            <img src="/themes/bizmark/assets/img/brief/education-mousemove.svg" alt="">
        </picture>
    </div>
</template>

<script>
import Ship from '../components/ship/ship.vue'

export default {
    components: {
        Ship
    },
    computed: {
        ship() {
            return this.$store.getters['player/ship']
        }
    },
    data: () => ({
        message: "Hello Index Page"
    }),
    mounted() {
        let arenaSelector = document.querySelector('.arena')
        let arenaWidth = arenaSelector.offsetWidth
        let arenaHeight = arenaSelector.offsetHeight

        this.$store.commit('player/updateShipPosition', { 
            xPosition: Math.round(arenaWidth / 2 - this.shipRect.width / 2), 
            yPosition: Math.round((arenaHeight / 2 - this.shipRect.height / 2)) 
        })
    }
}
</script>