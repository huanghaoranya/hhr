<template>
    <div>
        <!--背景-->
        <div class="banner news">
            <div class="title">
                <p>联系我们</p>
                <p class="en">CONTACT US</p>
            </div>
        </div>

        <div class="layui-container">
            <!--导航-->
            <div>
                <div class="contactTitle">
                    <h2>联系方式</h2>
                    <hr>
                </div>
            </div>
            <!--联系方式-->
            <div class="contact">
                <h2><b>沈阳维恩电子科技有限公司</b></h2>
                <div class="contactList">
                    <li class="iconfont icon-dizhi"><span> 地址：辽宁省沈阳市铁西区建设东路和谐大厦A座21层</span></li>
                    <li class="iconfont icon-dianhua"><span> 电话:</span></li>
                    <li class="iconfont icon-dianhua"><span> 手机:</span></li>
                    <li class="iconfont icon-youbian "><span> 邮编:</span></li>
                    <li class="iconfont icon-youxiang"><span> 邮箱:</span></li>
                    <li class="iconfont icon-chuanzhen"><span> 传真:</span></li>
                    <li class="iconfont icon-guanwang"><span> 官网: <a href="https://www.rfinchina.com">https://www.rfinchina.com</a></span>
                    </li>
                    <li class="iconfont icon-ziyuan"><span> 淘宝店铺: <a href="https://smartrf.taobao.com">https://smartrf.taobao.com</a></span>
                    </li>
                </div>
                <!---->
                <!--地图解析-->
                <div>
                    <div class="map">
                        <div id="allmap" class="Tmap"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "contact",
        mounted() {
            layui.use('jquery', function () {
                let $ = layui.jquery;
                $('.title').animate({
                    paddingTop: "120px"
                }, 1000);
            });

            //百度地图：
            let map = new BMap.Map("allmap");    // 创建Map实例
            let point = new BMap.Point(123.385377, 41.795781);
            let top_left_navigation = new BMap.NavigationControl();
            map.centerAndZoom(new BMap.Point(123.385377, 41.795781), 22);  // 初始化地图,设置中心点坐标和地图级别

            //添加地图类型控件
            map.centerAndZoom(point, 22);
            let marker = new BMap.Marker(point);
            //添加移动缩放控件
            map.addControl(top_left_navigation);
            map.addOverlay(marker);
            marker.setAnimation(BMAP_ANIMATION_BOUNCE);

            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

            //自定义遮盖物
            let opts= {
                width:250,
                height:80,
                title:'<h3 style="color: #cc5522;">沈阳维恩电子科技有限公司</h3>',
            };
            let infoWindow = new BMap.InfoWindow("<p>辽宁省沈阳市铁西区建设东路和谐大厦A座21层</p><p>电话：8888 8888</p>", opts);
            map.openInfoWindow(infoWindow, map.getCenter());
        }
    }
</script>

<style scoped type="text/css">
    .banner.news {
        background: url(../assets/img/shanCunContact.jpg) no-repeat center top;
        background-size: cover;
    }
    .contact {
        background: #ffffff;
        padding: 20px
    }

    .contactTitle {
        margin-top: 100px;
    }

    .contactList {
        color: #1E9FFF;
        font-size: 16px;
        line-height: 35px;
    }

    .contactList span {
        color: #666666;
    }

    .map {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 800px;
        margin: 20px auto;
    }

    #allmap {
        height: 400px;
    }
</style>