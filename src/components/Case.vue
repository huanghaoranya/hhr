<template>
    <div>
        <!-- banner部分 -->
        <div class="banner case">
            <div class="title">
                <p>成功案例</p>
                <p class="en">Successful Case</p>
            </div>
        </div>
        <!-- main部分 -->
        <div class="main-case">
            <div class="">
                <!--选项卡-->
                <div>
                    <div class="layui-tab layui-tab-brief">
                        <ul class="layui-tab-title caseUl layui-btn-container">
                            <div class="layui-container">
                                <li class="layui-this layui-btn layui-btn-primary">冷链仓库什么的</li>
                                <li class=" layui-btn layui-btn-primary">药店什么的</li>
                                <li class=" layui-btn layui-btn-primary">还有什么的</li>
                                <li class=" layui-btn layui-btn-primary">情景4</li>
                                <li class=" layui-btn layui-btn-primary">情景5</li>
                            </div>
                        </ul>
                        <div class="layui-tab-content caseContent layui-container">
                            <div class="layui-tab-item layui-show">
                                <div class="layui-row">
                                    <div class="layui-col-md7 layui-col-xs12">
                                        <div class=" caseDetail">
                                            <h2>标题</h2>
                                            <p>
                                                应用场景介绍 <br>
                                                应用场景介绍应用场景介绍应用场景介绍 <br>
                                                应用场景介绍 <br>
                                                应用场景介绍 <br>
                                                应用场景介绍应用场景介绍应用场景介绍 <br>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="layui-col-md5 layui-col-xs12 caseImg">
                                        <img src="../assets/img/caseIntro.png" alt="网速不好别看图">
                                    </div>
                                </div>
                                <div class="xiangGuan">
                                    <h1>相关产品</h1>
                                </div>
                                <div>
                                    <div>
                                        <p>商品列表展示</p>
                                        <hr>
                                    </div>
                                    <div class="layui-row">
                                        <div class="layui-col-md3">
                                            <div class="caseItem">
                                                <img src="../assets/img/ChanPin03.png" alt="你小子最好别看见">
                                                <div>
                                                    <p>产品名字 /系列</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="layui-col-md3">
                                            <div class="caseItem">
                                                <img src="../assets/img/ChanPin03.png" alt="你小子最好别看见">
                                                <div>
                                                    <p>产品名字 /系列</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="layui-col-md3">
                                            <div class="caseItem">
                                                <img src="../assets/img/ChanPin03.png" alt="你小子最好别看见">
                                                <div>
                                                    <p>产品名字 /系列</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="layui-tab-item">2</div>
                            <div class="layui-tab-item">3</div>
                            <div class="layui-tab-item">4</div>
                            <div class="layui-tab-item">5</div>
                            <div class="layui-tab-item">6</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view name="indexFooter"></router-view>
    </div>
</template>

<script>
    export default {
        name: "case",
        data() {
            return {
                changJing: [
                    {title: '标题', jieShao: '应用场景介绍，各种细节介绍，要写很多的字，没事可以加个换行</br>继续写'},
                ]
            }
        },
        mounted() {
            layui.use(['jquery', 'element'], function () {
                let $ = layui.jquery;
                $('.title').animate({
                    paddingTop: "120px"
                }, 1000);
            });
        },
    }
</script>

<style scoped>
    .banner.case {
        background: url(../assets/img/nav_img2.jpg) no-repeat center top;
        background-size: cover;
    }

    .caseUl {
        background: #f7f7f7;
        padding: 20px;
        border: none !important;
    }

    .caseUl li {
        margin: 0 40px;
        height: 50px;
        padding: 0 30px;
        line-height: 50px;
        border-radius: 50px;
    }

    .layui-tab-brief > .layui-tab-more li.layui-this:after, .layui-tab-brief > .layui-tab-title .layui-this:after {
        border-bottom: none;
    }

    .caseContent {
        margin-top: 20px;
        min-height: 800px;
    }

    .caseDetail {
        background: #f7f7f7;
        padding: 20px;
        margin-right: 30px;
        height: 270px
    }

    .caseDetail h2 {
        font-weight: bold;
    }

    .caseDetail p {
        color: #888888;
        margin-top: 20px;
        font-size: 16px;
    }

    .caseImg img {
        width: 100%;
        height: 310px;
    }

    .xiangGuan {
        padding: 20px;
        text-align: center;
        font-weight: bold;
        margin-top: 20px;
    }

    .caseItem {
        padding: 10px;
    }

    .caseItem img {
        width: 100%
    }

    .caseItem p {
        margin-top: 20px;
        color: #666;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
    }
</style>