<template>
    <div class="body">
        <div class="banner news">
            <div class="title">
                <p>使用方法</p>
                <p class="en">How To Use</p>
            </div>
        </div>
        <!-- main -->
        <div class="layui-container">
            <div class="use">
                <div class="layui-tab layui-row">
                    <ul class="layui-tab-title layui-col-md2">
                        <li class="active" @click="show($event)">文档下载</li>
                        <li @click="show($event)">技术支持</li>
                        <li @click="show($event)">云端服务</li>
                    </ul>
                    <div class="layui-tab-content layui-col-md10 useMain">
                        <div class="layui-tab-item layui-show">
                            <h2>使用文档</h2>
                            <hr>
                            <div class="docs">
                                <div class="layui-row downloadItem">
                                    <p class="layui-col-md10">AL78报警器的使用说明</p>
                                    <button class="layui-btn layui-btn-primary layui-col-md2"
                                            @click="download('../assets/docs/AL78baoJingQi.zip')">下载
                                    </button>
                                </div>
                                <div class="layui-row downloadItem">
                                    <p class="layui-col-md10">AL78报警器的使用说明</p>
                                    <button class="layui-btn layui-btn-primary layui-col-md2"
                                            @click="download('../assets/docs/AL78baoJingQi.zip')">下载
                                    </button>
                                </div>
                                <div class="layui-row downloadItem">
                                    <p class="layui-col-md10">AL78报警器的使用说明</p>
                                    <a class="layui-btn layui-btn-primary layui-col-md2"
                                       href="https://hhr-1258716511.cos.ap-beijing.myqcloud.com/AL78%E6%8A%A5%E8%AD%A6%E5%99%A8.zip"
                                       download="1.zip">下载</a>
                                </div>
                            </div>
                        </div>
                        <div class="layui-tab-item">内容2</div>
                        <div class="layui-tab-item">
                            <div class="yunDuan">
                                <img src="../assets/img/YunJieShao0.png" alt="ok">
                                <img src="../assets/img/YunJieShao1.png" alt="ok">
                                <img src="../assets/img/YunJieShao2.png" alt="ok">
                                <img src="../assets/img/YunJieShao04.png" alt="ok">
                                <img src="../assets/img/YunJieShao05.png" alt="ok">
                                <img src="../assets/img/YunJieShao06.png" alt="ok">
                                <img src="../assets/img/YunJieShao07.png" alt="ok">
                                <img src="../assets/img/YunJieShao08.png" alt="ok">
                                <img src="../assets/img/YunJieShao09.png" alt="ok">
                                <img src="../assets/img/YunJieShao10.png" alt="ok">
                                <img src="../assets/img/YunJieShao11.png" alt="ok">
                                <img src="../assets/img/YunJieShao12.png" alt="ok">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "trends",
        data() {
            return {}
        },
        methods: {
            show: function (e) {
                const event = e.target;
                $(event).addClass('active').siblings('.active').removeClass('active');
            },
            download: function (url) {
                window.location.href = url;
            }
        },
        mounted() {
            layui.use(['element', 'jquery'], function () {
                let element = layui.element;
                let $ = layui.jquery;
                $('.title').animate({
                    paddingTop: "120px"
                }, 1000);
            });
        },
    }
</script>

<style scoped>
    .banner.news {
        background: url(../assets/img/nav_img3.jpg) no-repeat center top;
        background-size: cover;
    }

    .body {
        background: #f7f7f7;
    }

    .use {
        min-height: 800px;
        margin-top: 20px
    }

    .use ul {
        border-bottom: none;
    }

    .use li {
        display: block;
        margin: 20px 20px;
    }

    .active {
        background: #009688;
        color: #fff;
        border-radius: 2px;
    }

    .useMain {
        background: #ffffff;
        min-height: 1000px;
        margin-top: 20px;
        padding: 20px;
        overflow: hidden;
    }

    .docs > div {
        margin-top: 20px;
    }

    .downloadItem p {
        display: block;
        font-size: 16px;
        color: #666;
    }

    .downloadItem p, .downloadItem button {
        height: 40px;
        line-height: 40px;
    }

    .yunDuan{padding: 20px 10px;}
    .yunDuan img{width: 100%;}
</style>