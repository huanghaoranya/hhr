<template>
    <div>
        <div class="nav">
            <div class="layui-container">
                <!-- 公司logo -->
                <div class="nav-logo layui-col-lg2 layui-md-12">
                    <router-link to="/"><img src="../assets/img/logo.png" alt="单片机公司"></router-link>
                </div>
                <div class="nav-list layui-col-lg10 layui-md-12">
                    <button>
                        <span></span><span></span><span></span>
                    </button>
                    <ul class="layui-nav" lay-filter="">
                        <li class="layui-nav-item">
                            <router-link class="language" data-en="HOME" data-cn="首页" to="/">首页</router-link>
                        </li>
                        <li class="layui-nav-item">
                            <router-link class="language" data-en="PRODUCT" data-cn="产品" to="/projectD">产品</router-link>
                        </li>
                        <li class="layui-nav-item">
                            <router-link class="language" data-en="USE" data-cn="使用" to="/use">使用</router-link>
                        </li>
                        <li class="layui-nav-item">
                            <router-link class="language" data-en="CASE" data-cn="案例" to="/case">案例</router-link>
                        </li>
                        <li class="layui-nav-item">
                            <router-link class="language" data-en="ABOUT" data-cn="关于" to="/about">关于</router-link>
                        </li>
                        <li class="layui-nav-item">
                            <router-link class="language" data-en="CONTACT" data-cn="联系我们" to="contact">联系我们
                            </router-link>
                        </li>
                        <li class="layui-nav-item layui-form">
                            <input type="checkbox" id="lan" lay-skin="switch" lay-filter="language" lay-text="EN|CN">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--QQ聊天-->
        <div class="QQ">
            <a class="ceshi"
               href="tencent://message/?uin=474882985&Menu=yes& Service=300&sigT=42a1e5347953b64c5ff3980f8a6e644d4b31456cb0b6ac6b27663a3c4dd0f4aa14a543b1716f9d45">
                <div class="yuan"></div>
                <div class="fang">
                    <h3>在线咨询</h3>
                    <h5>Online consultation </h5>
                    <p></p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        mounted() {
            layui.use(['form', 'jquery', 'element'], function () {
                function changeLanguage(checked) {
                    const doms = $(".language");
                    if (checked) {
                        for (let i = 0; i < doms.length; i++) {
                            $(doms[i]).css("font-family", "宋体").html($(doms[i]).attr('data-en'));
                        }
                    } else {
                        for (let i = 0; i < doms.length; i++) {
                            $(doms[i]).css("font-family", "inherit").html($(doms[i]).attr('data-cn'));
                        }
                    }
                }

                let form = layui.form,
                    $ = layui.jquery;
                form.render();
                form.on('switch(language)', function (data) {
                    let x = data.elem.checked;//判断开关状态
                    changeLanguage(x);
                    return false;
                });
                //滚动监听
                $(window).scroll(function () {
                    let scr = $(document).scrollTop();
                    scr > 0 ? $(".nav").addClass('scroll') : $(".nav").removeClass('scroll');
                });

                //导航切换
                let btn = $('.nav').find('.nav-list').children('button')
                    , spa = btn.children('span')
                    , ul = $('.nav').find('.nav-list').children('.layui-nav');
                btn.on('click', function () {
                    if (!$(spa[0]).hasClass('spa1')) {
                        spa[0].className = 'spa1';
                        spa[1].style.display = 'none';
                        spa[2].className = 'spa3';
                        $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
                    } else {
                        spa[0].className = '';
                        spa[1].style.display = 'block';
                        spa[2].className = '';
                        $('.nav')[0].style.height = 80 + 'px';
                    }
                });
            });
        }
    }
</script>

<style scoped>
    /*qq聊天*/
    .QQ {
        position: fixed;
        bottom: 100px;
        right: 20px;
        z-index: 10000;
    }

    .yuan {
        height: 80px;
        width: 80px;
        float: left;
        border: 1px solid purple;
        border-radius: 50%;
        background: url("../assets/img/chenGong.jpg");
    }

    .yuan img {
        overflow: hidden;
    }

    .fang {
        height: 50px;
        width: 130px;
        margin-top: 20px;
        margin-left: 40px;
        padding-left: 60px;
        padding-top: 10px;
        border: 1px solid #888888;
        border-radius: 5px;
        background: url("../assets/img/purple.jpg");
        color: white;
    }

</style>