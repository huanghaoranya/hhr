<template>
    <div>
        <div class="layui-carousel" id="banner">
            <div carousel-item>
                <div>
                    <img src="../assets/img/banner-1.jpg">
                    <div class="panel">
                        <p class="title">Rfinchina</p>
                        <p class="message">专注无线 十年磨一剑</p>
                    </div>
                </div>
                <div>
                    <img src="../assets/img/banner-2.jpg">
                    <div class="panel">
                        <p class="title">开放数据</p>
                        <p>标准化接口助力开发者系统集成</p>
                    </div>
                </div>
                <div>
                    <img src="../assets/img/banner-3.jpg">
                    <div class="panel">
                        <p class="title">合作共赢</p>
                        <p>售前售后全面服务保障</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div>
            <img src="../assets/img/banner-1.jpg" alt="">
        </div> -->
    </div>
</template>

<script>
    export default {
        name: "indexCarousel",
        mounted() {
            layui.use(['jquery', 'carousel'], function () {
                let carousl = layui.carousel, $ = layui.$;
                carousl.render({
                    elem: '#banner',
                    width: '100%',
                    arrow: 'always',
                    height: '678px'
                });
            })
        }
    }
</script>
<style scoped>
    .message{font-size: 16px;}
</style>