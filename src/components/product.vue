<template>
    <div>
        <div class="banner product">
            <div class="title">
                <p>产品展示</p>
                <p class="en">Product Display</p>
            </div>
        </div>
        <div class="main-product layui-container">
            <div class="ptitle">
                <h2>产品系列</h2>
                <hr>
            </div>
            <div class="pbody layui-row">
                <!--产品加载-->
                <div v-for="(item,index) in this.$store.state.product.mainProduct"class="layui-col-lg3 layui-col-md6 layui-col-xs12">
                    <div class="pitem">
                        <button class="ckgd"  @click="change(index)"><img @mouseenter="tip($event)" :src="item.img" alt="no"></button>
                        <div class="theight"><h3>{{item.title}}</h3></div>
                        <!--<p>{{item.introduce}}</p>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // 进入路由
        mounted() {
            layui.use('jquery', function () {
                let $ = layui.jquery;
                $('.title').animate({
                    paddingTop: "120px"
                }, 1000);
            })
        },
        methods:{
           change(n){
               this.$router.push('/projectD');
               this.$store.commit('change',n)
           },
           tip(e){
               const target = e.target;
               layer.tips('点击查看更多',target,{tips:[2,'#666'],time:1500});
           }
        }
    }
</script>

<style scoped>
    .banner.product {
        background: url(../assets/img/nav_img1.jpg) no-repeat center top;
        background-size: cover;
    }

    .pbody{padding: 15px;margin: 20px;border: 1px solid #f7f7f7;}
    .pitem{margin: 10px}
    .pitem img{width: 100%}
    .pitem button{padding:5px;border: 1px solid #5FB878;border-radius: 2px;color: #5FB878;background: white }
    .theight{height: 20px}
    .pitem h3{font-size: 18px;margin-top: 15px;line-height: 10px;}
    .pitem p{color: #888888;font-size: 14px;line-height: 24px;margin-top: 5px}
    .content-img img {
        width: 500px;
    }
    .main-product .ckgd{ border: none;cursor:pointer}

</style>