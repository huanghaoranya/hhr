<template>
    <div>
        <router-view name="indexCarousel"></router-view>
        <router-view name="indexIntroduce"></router-view>
        <!--淘宝链接-->
        <div class="taobao">
            <a href="https://smartrf.taobao.com"><img src="../assets/img/jinShuGouWu.jpg" alt="给家里换个网，图片都加载不出来"></a>
        </div>
        <router-view name="indexItem"></router-view>
    </div>
</template>
<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .taobao img{
        width: 100%;
    }
</style>