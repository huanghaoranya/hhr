<template>
    <div class="vue layui-container">
        <h2>产品系列选择</h2>
        <p class="marginTop">采集器</p>
        <hr>
        <div>
            <button class="layui-btn layui-btn-primary layui-btn-checked">类型1</button>
            <button class="layui-btn layui-btn-primary">类型2</button>
            <button class="layui-btn layui-btn-primary">类型3</button>
            <button class="layui-btn layui-btn-primary">类型4</button>
            <button class="layui-btn layui-btn-primary">类型5</button>
        </div>

        <p class="marginTop">接收器</p>
        <hr>
        <div>
            <button class="layui-btn layui-btn-primary">类型1</button>
            <button class="layui-btn layui-btn-primary">类型2</button>
            <button class="layui-btn layui-btn-primary">类型3</button>
        </div>
        <hr>
        <div class="show marginTop"></div>
    </div>
</template>

<script>
    export default {
        name: "productChoose",
        data: {
            caiJi: [
                {name: 'jianshu1',price: 500,intro:'功能介绍',img:require('../assets/img/NT/NT59-LI-B1.png')}
            ],
            jieshou: [],
            result: []
        },
        methods: {
            choose: function (target) {

            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .vue {
        margin-top: 100px;
        min-height: 800px
    }

    .marginTop {
        margin-top: 30px
    }

    .show {
        width: 100%;
        min-height: 100px;
        border: 1px dotted #00FF00
    }
</style>