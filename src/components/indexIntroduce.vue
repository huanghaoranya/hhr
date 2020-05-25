<template>
    <div>
        <div class="main-product">
            <div class="layui-container">
                <p class="title">一站式IOT<span>解决方案</span></p>
                <div class="layui-row layui-col-space25">
                    <div class="layui-col-sm6 layui-col-md3" v-for="item in this.$store.state.index.iot">
                        <div class="content">
                            <div><img :src="item.img"></div>
                            <div>
                                <p class="label">{{item.title}}</p>
                                <p class="intro">{{item.intro}}</p>
                            </div>
                            <!--<a href="javascript:;">查看产品 ></a>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        //name: "introduce"
    }
</script>

<style scoped>
.intro{text-align: left;padding-bottom: 20px;}
</style>