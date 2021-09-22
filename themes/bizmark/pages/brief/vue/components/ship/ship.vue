<template>
    <div
        class="ship"
        ref="shipWrap"
        :style="{ left: ship.xPosition + 'px', top: ship.yPosition + 'px', opacity: 1 }"
    >
        <img
            @load="shipInit()"
            :src="shipSrc"
            ref="ship"
        >
    </div>
</template>

<script>

export default {
    props: {
        shipSrc: {
            type: String,
            default: '/themes/bizmark/assets/img/brief/ship/1.svg'
        }
    },
    data: () => ({
        shipElement: null,
        shipRect: null
    }),
    computed: {
        ship() {
            return this.$store.getters['player/ship']
        }
    },
    methods: {
        shipRotate(x, y) {
            let cx = this.shipRect.left + this.shipRect.width / 2, 
                cy = this.shipRect.top + this.shipRect.height / 2;
            let angle = Math.atan2(y - cy, x - cx) + 1.5708;

            this.shipElement.style.transform = "rotate(" +  angle + "rad)"
        },
        shipInit() {
            this.shipElement = this.$refs.shipWrap
            this.shipRect = this.$refs.ship.getBoundingClientRect()

            let shipParams = {
                width: Math.round(this.shipRect.width),
                height: Math.round(this.shipRect.height),
            }

            this.$store.commit('player/setShipParams', shipParams)
            window.addEventListener('mousemove', (e) => {
                this.shipRect = this.$refs.ship.getBoundingClientRect()
                this.shipRotate(e.clientX, e.clientY)
            })
        }
    }
}
</script>