<template>
    <div>
        <div class="main-service">
            <div class="layui-container">
                <p class="title">专注品质<span>服务至上</span></p>
                <div class="layui-row layui-col-space25 layui-col-space80">
                    <div v-for="item in this.$store.state.index.service" class="layui-col-sm6">
                        <div class="content">
                            <div class="content-left"><img :src="item.img"></div>
                            <div class="content-right">
                                <p class="label">{{item.title}}</p>
                                <span></span>
                                <p v-html="item.intro"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service-more"><router-link to ="/product">查看更多</router-link></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        //name: "indexItem"
    }
</script>

<style scoped>

</style>