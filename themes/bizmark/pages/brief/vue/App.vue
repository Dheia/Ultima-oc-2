<template>
    <div id="app">
        <div class="app-wrapper">
            <div class="arena">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        message: 'Hello App'
    }),
    mounted() {
        console.log('init App')
    }
}
</script>