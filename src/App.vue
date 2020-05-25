<template>
    <div id="app">
        <Navigation></Navigation>
        <router-view/>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import Navigation from './components/Navigation.vue';
    import Bottom from './components/Bottom.vue';
    export default {
        name: 'App',
        components:{Navigation,Bottom},
    }
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
