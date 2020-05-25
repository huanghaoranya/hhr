<template>
    <div>
        <div class="layui-container">
            <div class="navigation">
                <ul class="layui-nav" lay-filter="">
                    <li class="layui-nav-item nav-item"><a href=""><img src="../assets/img/logo.jpg" alt=""></a></li>
                    <li class="layui-nav-item  nav-item"><a href="">Index</a></li>
                    <li class="layui-nav-item  nav-item"><a href="">Product</a></li>
                    <li class="layui-nav-item  nav-item"><a href="">Use</a></li>
                    <li class="layui-nav-item  nav-item"><a href="">Case</a></li>
                    <li class="layui-nav-item  nav-item"><a href="">About</a></li>
                    <li class="layui-nav-item  nav-item">
                        <a href="javascript:;">Contact</a>
                        <dl class="layui-nav-child"> <!-- 二级菜单 -->
                            <dd><a href="">移动模块</a></dd>
                            <dd><a href="">后台模版</a></dd>
                            <dd><a href="">电商平台</a></dd>
                        </dl>
                    </li>
                    <li class="layui-nav-item  nav-item layui-form">
                        <input type="checkbox" id="lan" lay-skin="switch" lay-filter="language" lay-text="EN|CN">
                    </li>
                </ul>
            </div>
            <div class="media" style="height: 200px;width: 100%;margin-top: 80px;">媒体查询</div>
        </div>
        <div style="height: 800px"></div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        mounted() {
            layui.use(['element', 'form','jquery'], function () {
                let element = layui.element;
                //渲染按钮
                let form = layui.form,$ = layui.jquery;
                form.render();
            });
            window.onresize = function () {
                let width = $('.layui-container').width();
                width > 500 ? $('.layui-nav').removeClass('layui-nav-tree') : $('.layui-nav').addClass('layui-nav-tree');
            };

            // 监听屏幕滚动事件。
            $(window).scroll(function () {
                let scr = $(document).scrollTop();
                scr > 0 ? $(".navigation").addClass('scroll') : $(".navigation").removeClass('scroll');
            });
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
        .media {
            background: #2cb6a1
        }
    }

    @media screen and (min-width: 0px) and (max-width: 1199px) {
        .navigation {
            height: 80px;
            overflow: hidden;
            background: #00FFFF
        }

        .media {
            background: #e4393c
        }
    }

    .navigation {
        height: 80px;
        width: 100%;
        line-height: 80px;
        position: fixed;
        top: 0;
        background: rgba(255, 255, 255, 0.2);
    }

    .navigation ul {
        background: rgba(0, 0, 0, 0);
    }

    .nav-item a:hover {
        color: #2db5a3
    }

    .nav-item a {
        color: #0c0c0c;
        margin: 0 30px
    }

    .navigation.scroll {
        background: orange;
        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05);
        transition: 0.3s
    }

</style>