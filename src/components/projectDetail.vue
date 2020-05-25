<template>
    <div>
        <div class="layui-container">
            <!--导航-->
            <div class="xiangQingTitle">
                <router-link to="/product">产品</router-link>
                >
                <router-link to="/projectD">产品详情</router-link>
                <hr>
            </div>
            <!--系列展示-->
            <h2>产品系列</h2>
            <div class="XLnav">
                <div>
                    <p>采集器</p>
                    <hr>
                </div>
                <div class="caiJQ">
                    <button class="layui-btn layui-btn-primary" v-for="item in this.$store.state.product.caiJiQi">
                        {{item.name}}
                    </button>
                </div>

                <div>
                    <p>接收器</p>
                    <hr>
                </div>
                <div class="jieSQ">
                    <button class="layui-btn layui-btn-primary" v-for="item in this.$store.state.product.jieShouQi">
                        {{item.name}}
                    </button>
                </div>
            </div>
            <div class="show">
                <div v-for="XL in this.$store.state.product.xiLie" style="display: none" class="showChildren">
                    <div class="layui-row XL">
                        <div class="layui-col-md8 marginTop XLMS">
                            <div><p class="biaoti">{{XL.title}}</p></div>
                            <div>
                                <p class="artical" v-html="XL.introduce"></p>
                            </div>
                        </div>
                        <div class="layui-col-md4 marginTop">
                            <img width="100%" :src="XL.MainImg" alt="网速不好别看图">
                        </div>
                    </div>
                    <!--产品图-->
                    <div>
                        <div>
                            <h2 class="shangPinLB">商品列表展示</h2>
                            <hr>
                        </div>
                    </div>
                    <div class="marginTop chanPinTu layui-row">
                        <!--59系列-->
                        <div class="layui-col-xs12">
                            <div class="layui-col-xs12">
                                <h3>59系列</h3>
                                <hr>
                            </div>
                            <div v-for="item in XL.ChanPinTu[0]" class="layui-col-lg3 layui-col-md4 layui-col-xs2">
                                <img :src="item.url" alt="网络不好别看图兄弟">
                            </div>
                        </div>
                        <!--78系列-->
                        <div class="layui-col-xs12">
                            <div class="layui-col-xs12">
                                <h3>78系列</h3>
                                <hr>
                            </div>
                            <div v-for="item in XL.ChanPinTu[1]" class="layui-col-lg3 layui-col-md4 layui-col-xs2">
                                <img :src="item.url" alt="网络不好别看图兄弟">
                            </div>
                        </div>

                        <!--第三系列-->
                        <div class="layui-col-xs12">
                            <div class="layui-col-xs12">
                                <h3>配套传感器</h3>
                                <hr>
                            </div>
                            <div v-for="item in XL.ChanPinTu[2]" class="layui-col-lg3 layui-col-md4 layui-col-xs2">
                                <img :src="item.url" alt="网络不好别看图兄弟">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--视频内容-->
            <div>
                <h2>产品介绍及使用</h2>
                <hr>
                <div class="layui-row">
                    <div class="layui-col-lg4 layui-col-md6 layui-col-sm12 shiPin">
                        <video src="../assets/video/showUse.mp4" width="100%" height="400px" controls></video>
                    </div>
                    <div class="layui-col-lg4 layui-col-md6 layui-col-sm12 shiPin">
                        <video src="../assets/video/showUse.mp4" width="100%" height="400px" controls></video>
                    </div>
                    <div class="layui-col-lg4 layui-col-md6 layui-col-sm12 shiPin">
                        <video src="../assets/video/showUse.mp4" width="100%" height="400px" controls></video>
                    </div>
                </div>
            </div>
            <!--图片内容-->
            <div class="excel">
                <h2>系列介绍</h2>
                <hr>
                <!--系列1-->
                <div>
                    <table class="layui-table">
                        <thead>
                        <tr class="noPadding">
                            <th>采集发射器</th>
                            <th>测温范围</th>
                            <th>应用场景</th>
                            <th>精度</th>
                            <th>室外</th>
                            <th>室内</th>
                            <th>通讯</th>
                            <th>发射</th>
                            <th>休眠</th>
                            <th>供电</th>
                            <th colspan="2">产品</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="NT/DS59-LI-BD.png">DS59-LI-BD</td>
                            <td>【-40~120℃】</td>
                            <td>捆绑接触式测温</td>
                            <td rowspan="2">±0.5℃</td>
                            <td>80米</td>
                            <td>1层</td>
                            <td rowspan="6">FSK-433</td>
                            <td rowspan="6">92mA</td>
                            <td rowspan="6">3.2uA</td>
                            <td rowspan="6">3500mA电池</td>
                            <td>腕带式结构，安装方便</td>
                            <td>主要用于电缆线、铜排、配电柜等</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="NT/NT59-LI-A.png">NT59-LI-A</td>
                            <td>【-30~80℃】</td>
                            <td rowspan="3">小范围环境测温</td>
                            <td rowspan="3">100米</td>
                            <td rowspan="3">2层</td>
                            <td>美观精巧，密封防水好</td>
                            <td>内置探头，适合冰箱、冷藏柜等</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="NT/NT59-LI-C.png">NT59-LI-C10</td>
                            <td rowspan="4">【-30~120℃】</td>
                            <td rowspan="4">±0.3℃</td>
                            <td rowspan="4">多种类型结构温度探头可选</td>
                            <td>外置可替换探头，适合建筑水泥</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="NT/NT59-LI-D.png">NT59-LI-D05</td>
                            <td>外置针式探头，适合料堆、粮堆、土壤</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="NT/NT59-LE-B.png">NT59-LE-B10</td>
                            <td rowspan="2">车间等中型环境测温</td>
                            <td rowspan="2">300米</td>
                            <td rowspan="2">4层</td>
                            <td>外置防水探头,通用性强</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="NT/NT59-LE-E.png">NT59-LE-E10</td>
                            <td>外置片状探头，适合金属表面测温</td>
                        </tr>
                        <tr>
                            <td colspan="12" class="noneTr"></td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="NT/NT78-LE-A.png">NT78-LE-A</td>
                            <td>【-30~80℃】</td>
                            <td rowspan="4">多楼层等大环境测温</td>
                            <td>±0.5℃</td>
                            <td rowspan="4">500米</td>
                            <td rowspan="4">10层</td>
                            <td rowspan="4">LORA-433</td>
                            <td rowspan="4">132mA</td>
                            <td rowspan="4">1.8uA</td>
                            <td rowspan="4">3500mA电池</td>
                            <td>简约美观，传输距离远</td>
                            <td rowspan="4">与NT59相比，无线传输性能更佳，功耗也更大</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="NT/NT78-LE-B.png">NT78-LE-B10</td>
                            <td rowspan="3">【-30~120℃】</td>
                            <td rowspan="3">±0.3℃</td>
                            <td rowspan="3">多种类型结构温度探头可选</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="NT/NT78-LE-D05.png">NT78-LE-D5</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="NT/NT78-LE-E10.png">NT78-LE-E10</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--系列2   PT-->
                <div>
                    <table class="layui-table">
                        <thead>
                        <tr>
                            <th>采集发射器</th>
                            <th>应用场景</th>
                            <th>通讯方式</th>
                            <th>天线类型</th>
                            <th>室外传输</th>
                            <th>室内传输</th>
                            <th>发射电流</th>
                            <th>休眠电流</th>
                            <th>供电方式</th>
                            <th>产品特性</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PT59-LI-xxx.png">PT59-LI-xx</td>
                            <td>实验室等小范围测温</td>
                            <td rowspan="2">FSK-433</td>
                            <td>内置天线</td>
                            <td>100米</td>
                            <td>2层</td>
                            <td rowspan="2">92mA</td>
                            <td rowspan="2">3.2uA</td>
                            <td rowspan="4">3500mA电池</td>
                            <td>密封防水特性好</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PT59-LE-xxx.png">PT59-LE-xx</td>
                            <td>大型车间等中型环境测温</td>
                            <td rowspan="3">外置天线</td>
                            <td>300米</td>
                            <td>4层</td>
                            <td>与PT59-LI-xx系列相比无线传输距离更远</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PT78-LI-xxx.png">PT78-LI-xx</td>
                            <td rowspan="2">多楼宇之间复杂大环境测温</td>
                            <td rowspan="2">LORA-433</td>
                            <td>200米</td>
                            <td>4层</td>
                            <td rowspan="2">132mA</td>
                            <td rowspan="2">1.8uA</td>
                            <td rowspan="2">与PT59系列相比，PT78系列无线传输性能更佳</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PT78-LE-xxx.png">PT78-LE-xx</td>
                            <td>500米</td>
                            <td>10层</td>
                        </tr>
                        <tr>
                            <td colspan="10" class="noneTr"></td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="layui-table">
                        <thead>
                        <tr>
                            <th>配套传感器</th>
                            <th>测温量程</th>
                            <th>传感器类型</th>
                            <th>传感精度</th>
                            <th>封装工艺</th>
                            <th>产品特性</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PTS-A10.png">PTS-A10</td>
                            <td rowspan="2">【-50~260℃】</td>
                            <td rowspan="4">三线制 Heraeus</td>
                            <td rowspan="9">（-40~40 @±0.3℃，其他范围±0.5℃）</td>
                            <td rowspan="4">采用原装A级PT100国内封装</td>
                            <td>滚珠工艺，304不锈钢防水,防油探头，硅胶屏蔽线抗干扰性好耐低温</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PTS-B10.png">PTS-B10</td>
                            <td>长方形探头，6mm孔易于螺丝固定,四氟屏蔽线抗干扰性好耐高温，不防水</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PTS-C10.png">PTS-C10</td>
                            <td>【-50~550℃】</td>
                            <td>贴片式探头，4mm孔易于螺丝固定,钢网屏蔽线，耐高温性能好，不防水</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PTS-A10.png">PTS-D10</td>
                            <td>【-50~260℃】</td>
                            <td>针式304不锈钢探头，不锈钢探头直径7mm，利于插拔式测试</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PTS-E15.png">PTS-E15</td>
                            <td>【-100~180℃】</td>
                            <td>【-100~180℃】</td>
                            <td>A级PT100级引线均原装进口</td>
                            <td>滚珠工艺，304不锈钢防水,柔性硅胶镀银线，耐低温效果好</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PTS-F15.png">PTS-F15</td>
                            <td rowspan="4">【-100~260℃】</td>
                            <td rowspan="4">三线制 Heraeus</td>
                            <td rowspan="4">采用原装A级PT100国内封装</td>
                            <td>磁吸式探头，采用耐高温强磁工艺，利于金属表面测温</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PTS-G15.png">PTS-G15</td>
                            <td>小贴片探头，适合硅胶固定,四氟屏蔽线抗干扰性好耐高温，防水</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PTS-H10.png">PTS-H10</td>
                            <td>大贴片探头，适合硅胶固定,四氟屏蔽线抗干扰性好耐高温，防水</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PT/PTS-I10.png">PTS-I10</td>
                            <td>针式304不锈钢探头，插入式测温,四氟屏蔽线抗干扰性好耐高温，防水</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--系列3 KT-->
                <div>
                    <table class="layui-table">
                        <thead>
                        <tr>
                            <td>采集发射器</td>
                            <td>应用场景</td>
                            <td>通讯方式</td>
                            <td>天线类型</td>
                            <td>室外传输</td>
                            <td>室内传输</td>
                            <td>发射电流</td>
                            <td>休眠电流</td>
                            <td>供电方式</td>
                            <td>产品特性</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="KT/KT59-LI-xxx.png">KT59-LI-xx</td>
                            <td>实验室等小范围测温</td>
                            <td rowspan="2">FSK-433</td>
                            <td>内置天线</td>
                            <td>100米</td>
                            <td>2层</td>
                            <td rowspan="2">93mA</td>
                            <td rowspan="2">3.2uA</td>
                            <td rowspan="4">3500mA电池</td>
                            <td>密封防水特性好,尺寸精巧</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="KT/KT59-LE-xxx.png">KT59-LE-xx</td>
                            <td>大型车间等中型环境测温</td>
                            <td rowspan="3">外置天线</td>
                            <td>300米</td>
                            <td>4层</td>
                            <td>与KT59-LI-xx系列相比无线传输距离更远</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="KT/KT78-LI-xxx.png">KT78-LI-XX</td>
                            <td rowspan="2">多楼宇之间复杂大环境测温</td>
                            <td rowspan="2">LORA-433</td>
                            <td>300米</td>
                            <td>4层</td>
                            <td rowspan="2">133mA</td>
                            <td rowspan="2">1.8uA</td>
                            <td rowspan="2">与KT59系列相比，KT78系列无线传输性能更佳</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="KT/KT78-LE-xxx.png">KT78-LE-xx</td>
                            <td>500米</td>
                            <td>10层</td>
                        </tr>
                        <tr>
                            <td colspan="10" class="noneTr"></td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="layui-table">
                        <thead>
                        <tr>
                            <td>配套传感器</td>
                            <td>测温量程</td>
                            <td>传感器类型</td>
                            <td>传感精度</td>
                            <td>产品特性</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="KT/KTS-A20.png">KTS-A20</td>
                            <td rowspan="4">【0-600℃】</td>
                            <td rowspan="5">K型热电偶</td>
                            <td rowspan="4">±2℃</td>
                            <td>6mm螺钉探头，易于螺丝固定,钢网屏蔽线抗干扰性好，耐高温</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="KT/KTS-B20.png">KTS-B20</td>
                            <td>3mm直径20CM针式探头，便于插入式测温,钢网屏蔽线抗干扰性好，耐高温</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="KT/KTS-C20.png">KTS-C20</td>
                            <td>1.5mm玻璃纤维测温线,特点是传感器线径特细</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="KT/KTS-D20.png">KTS-D20</td>
                            <td>贴片探头，易于螺丝固定,钢网屏蔽线抗干扰性好，耐高温</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="KT/KTS-E06.png">KTS-E06</td>
                            <td>【0~1350℃】</td>
                            <td>±4℃</td>
                            <td>刚玉陶瓷探头，适合大于600度的超高温场景</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--系列4 HT温湿度-->
                <div>
                    <table class="layui-table">
                        <thead>
                        <tr>
                            <th>采集发射器</th>
                            <th>通讯</th>
                            <th>天线</th>
                            <th>室外</th>
                            <th>室内</th>
                            <th>发射电流</th>
                            <th>休眠电流</th>
                            <th>供电方式</th>
                            <th>测温范围</th>
                            <th>产品特性</th>
                            <th>应用</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="HT/HT59-LI-A.png">HT59-LI-A</td>
                            <td>FSK-433</td>
                            <td rowspan="3">内置天线</td>
                            <td>100米</td>
                            <td>2层</td>
                            <td>92mA</td>
                            <td>3.2uA</td>
                            <td rowspan="3">3500mA电池</td>
                            <td rowspan="3">【-40~80℃，1-~99.9%】</td>
                            <td>内置探头，简约精巧</td>
                            <td>房间等小范围测温</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="HT/HT59-LE-C10.png">HT59-LE-C10</td>
                            <td rowspan="2">外置天线</td>
                            <td rowspan="2">300米</td>
                            <td rowspan="2">4层</td>
                            <td rowspan="2">92mA</td>
                            <td rowspan="2">3.2uA</td>
                            <!--<td>3500mA电池</td>-->
                            <!--<td>【-40~120℃，1-~99.9%】</td>-->
                            <td>外置可替换探头，通用性更强</td>
                            <td rowspan="2">车间等中型环境测温</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="HT/HT59-LE-D.png">HT59-LE-D</td>
                            <!--<td>【-40~80℃，1-~99.9%】</td>-->
                            <td>外置探头，防尘工艺，感应环境变化更灵敏</td>
                        </tr>
                        <tr>
                            <td colspan="11" class="noneTr"></td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="HT/HT78-LE-C10.png">HT78-LE-C10</td>
                            <td rowspan="2">LORA-433</td>
                            <td rowspan="2">外置天线</td>
                            <td rowspan="2">500米</td>
                            <td rowspan="2">10层</td>
                            <td rowspan="2">132mA</td>
                            <td rowspan="2">1.8uA</td>
                            <td rowspan="2">3500mA电池</td>
                            <td rowspan="2">【-40~120℃，1-~99.9%】</td>
                            <td>外置可替换探头，通用性更强</td>
                            <td rowspan="2">楼宇等复杂大环境测温</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="HT/HT78-LE-D.png">HT78-LE-D</td>
                            <!--<td>【-40~80℃，1-~99.9%】</td>-->
                            <td>外置探头，防尘工艺，感应环境变化更灵敏</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--二氧化碳CO2-->
                <div>
                    <table class="layui-table">
                        <thead>
                        <tr>
                            <th>采集发射器</th>
                            <th>通讯方式</th>
                            <th>天线类型</th>
                            <th>室外传输</th>
                            <th>室内传输</th>
                            <th>发射电流</th>
                            <th>休眠电流</th>
                            <th>供电方式</th>
                            <th>量程及精度</th>
                            <th>产品特性</th>
                            <th>应用场景</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="CO/CO59-LI-A.png">CO59-LI-A</td>
                            <td>FSK-433</td>
                            <td>内置天线</td>
                            <td>100米</td>
                            <td>2层</td>
                            <td>280mA</td>
                            <td>200mA</td>
                            <td>220VAC</td>
                            <td>0~3000ppm,精度为±50ppm+5%FS</td>
                            <td>内置探头，简约精巧</td>
                            <td>房间等中小型范围</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="CO/CO78-LI-A.png">CO78-LI-A</td>
                            <td>LORA-433</td>
                            <td>内置天线</td>
                            <td>300米</td>
                            <td>5层</td>
                            <td>320mA</td>
                            <td>200mA</td>
                            <td>220VAC</td>
                            <td>0~3000ppm,精度为±50ppm+5%FS</td>
                            <td>内置探头，简约精巧</td>
                            <td>楼宇等复杂大环境</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--光照-->
                <div>
                    <table class="layui-table">
                        <thead>
                        <tr>
                            <th>采集发射器</th>
                            <th>通讯方式</th>
                            <th>天线类型</th>
                            <th>室外传输</th>
                            <th>室内传输</th>
                            <th>发射电流</th>
                            <th>休眠电流</th>
                            <th>供电方式</th>
                            <th>量程</th>
                            <th>产品特性</th>
                            <th>应用场景</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="SU/SU59-LI-A.png">SU59-LI-A</td>
                            <td rowspan="2">FSK-433</td>
                            <td>内置天线</td>
                            <td>100米</td>
                            <td>2层</td>
                            <td rowspan="2">93mA</td>
                            <td rowspan="2">3.2uA</td>
                            <td rowspan="2">3500mAh电池</td>
                            <td rowspan="3">0.054流明至200000流明</td>
                            <td>内置探头，简约精巧</td>
                            <td>小型范围</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="SU/SU59-LE-A.png">SU59-LE-A</td>
                            <td rowspan="2">外置天线</td>
                            <td>300米</td>
                            <td>4层</td>
                            <td>外置天线，距离远</td>
                            <td>中小型范围</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="SU/SU78-LE-A.png">SU78-LE-A</td>
                            <td>LORA-433</td>
                            <td>500米</td>
                            <td>10层</td>
                            <td>130mA</td>
                            <td>1.8uA</td>
                            <td>3500mAh电池</td>
                            <td>距离远，抗干扰效果佳</td>
                            <td>楼宇等复杂大环境</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--水浸-->
                <div>
                    <table class="layui-table">
                        <thead>
                        <tr>
                            <th>采集发射器</th>
                            <th>通讯方式</th>
                            <th>天线类型</th>
                            <th>室外传输</th>
                            <th>室内传输</th>
                            <th>发射电流</th>
                            <th>休眠电流</th>
                            <th>供电方式</th>
                            <th>量程</th>
                            <th>产品特性</th>
                            <th>应用场景</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="SO/SO59-LE-A.png">SO59-LE-A</td>
                            <td rowspan="2">FSK-433</td>
                            <td rowspan="4">外置天线</td>
                            <td rowspan="2">300米</td>
                            <td rowspan="2">3层</td>
                            <td rowspan="2">93mA</td>
                            <td rowspan="2">3.2uA</td>
                            <td rowspan="4">3500mAh电池</td>
                            <td rowspan="4">干燥2100~4200浸水</td>
                            <td rowspan="2">功耗低待机时间长</td>
                            <td rowspan="2">中小型范围</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="SO/SO59-LE-B.png">SO59-LE-B</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="SO/SO78-LE-A.png">SO78-LE-A</td>
                            <td rowspan="2">LORA-433</td>
                            <td rowspan="2">500米</td>
                            <td rowspan="2">10层</td>
                            <td rowspan="2">130mA</td>
                            <td rowspan="2">1.8uA</td>
                            <td rowspan="2">距离远，抗干扰效果佳</td>
                            <td rowspan="2">楼宇等复杂大环境</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="SO/SO78-LE-B.png">SO78-LE-B</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--pm2.5-->
                <div>
                    <table class="layui-table">
                        <thead>
                        <tr>
                            <th>采集发射器</th>
                            <th>通讯方式</th>
                            <th>天线类型</th>
                            <th>室外传输</th>
                            <th>室内传输</th>
                            <th>发射电流</th>
                            <th>休眠电流</th>
                            <th>供电方式</th>
                            <th>有效量程</th>
                            <th>产品特性</th>
                            <th>应用场景</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PM/PM59-LI-A.png">PM59-LI-A</td>
                            <td>FSK-433</td>
                            <td>内置天线</td>
                            <td>100米</td>
                            <td>2层</td>
                            <td>230mA</td>
                            <td>150mA</td>
                            <td>220VAC</td>
                            <td>0~500微克/立方米</td>
                            <td>内置探头，简约精巧</td>
                            <td>房间等中小型范围</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="PM/PM78-LI-A.png">PM78-LI-A</td>
                            <td>LORA-433</td>
                            <td>内置天线</td>
                            <td>300米</td>
                            <td>5层</td>
                            <td>270mA</td>
                            <td>150mA</td>
                            <td>220VAC</td>
                            <td>0~500微克/立方米</td>
                            <td>内置探头，简约精巧</td>
                            <td>楼宇等复杂大环境</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--网关-->
                <div>
                    <!--数据接收器-->
                    <table class="layui-table">
                        <thead>
                        <tr class="noPadding">
                            <th>&nbsp;数据接收器&nbsp;</th>
                            <th>交互方式</th>
                            <th>&nbsp;数据存储&nbsp;</th>
                            <th>产品类型</th>
                            <th>开放协议</th>
                            <th>数据展示</th>
                            <th>应用场景</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/WT59.png">WT59</td>
                            <td rowspan="4">WIFI</td>
                            <td rowspan="12">云存储</td>
                            <td rowspan="12">网关（互联网模式）</td>
                            <td rowspan="12">HTTP协议，JSON格式</td>
                            <td rowspan="12">提供网页APP免费使用，支持手机、电脑远程观测</td>
                            <td rowspan="4">适合有WIFI网络覆盖的场景，不产生流量费用</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/WT59-TFT.png">WT59-TFT</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/WT78.png">WT78</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/WT78-TFT.png">WT78-TFT</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/WG59.png">WG59</td>
                            <td rowspan="4">GPRS</td>
                            <td rowspan="4">任何手机通讯的场合均可使用，布网成本最低，流量费用10RMB/年</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/WG59-TFT.png">WG59-TFT</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/WG78.png">WG78</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/WG78-TFT.png">WG78-TFT</td>
                        </tr>

                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/ET59.png">ET59</td>
                            <td rowspan="4">以太网</td>
                            <td rowspan="4">适合已经有线局域网络覆盖的场景，不产生流量费用</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/ET59-TFT.png">ET59-TFT</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/ET78.png">ET78</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="WG/ET78-TFT.png">ET78-TFT</td>
                        </tr>
                        <tr class="noneTr">
                            <td colspan="7">备注：后缀TFT为网关带显示屏功能，可以实现本地显示屏观测，异地远程电脑观测，手机随时随地观测</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--集中器-->
                <div>
                    <table class="layui-table">
                        <thead>
                        <tr>
                            <th>接收器</th>
                            <th>交互方式</th>
                            <th>数据存储</th>
                            <th>产品类型</th>
                            <th>开放协议类型</th>
                            <th>数据展示软件</th>
                            <th>应用场景</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="RE/RE59-M-485.png">RE59-M-485</td>
                            <td rowspan="2">RS485</td>
                            <td rowspan="4">本地暂存</td>
                            <td rowspan="4">集中器（非联网模式）</td>
                            <td rowspan="2">标准MODBUS-RTU</td>
                            <td rowspan="2">提供协议说明，需要用户自己设计组态软件</td>
                            <td rowspan="2">一般与PLC\DTU\串口服务器等设备对接，适合工控系统集成</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="RE/RE78-M-485.png">RE78-M-485</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="RE/RE59-P-USB.png">RE59-P-USB</td>
                            <td rowspan="2">USB转串口</td>
                            <td rowspan="2">私有协议</td>
                            <td rowspan="2">免费提供电脑桌面观测软件</td>
                            <td rowspan="2">适合不会编程的人使用，电脑需一直开启，一旦关机数据停止记录</td>
                        </tr>
                        <tr>
                            <td @mouseenter="addTip($event)" data-tip="RE/RE78-P-USB.png">RE78-P-USB</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "projectDetail",
        methods: {
            addTip: function (event) {
                const target = event.target;
                // let src = $(target).html();
                let img = $(target).attr('data-tip');
                let url = require(`../assets/img/${img}`);
                let str = '<img src=\"' + url + '\" style="width: 200px;background-color: #fff;margin: 0;">';
                layer.tips(str, target, {
                    anim: 0,
                    tips: [4, '#fff'],
                    time: 1500,
                    area: '230px',
                    isOutAnim: false,
                    shade: 0
                });
            }
        },
        mounted() {
            $('.caiJQ').children('button').each(function (index) {
                $(this).on('click', function () {
                    $(this).addClass('active').siblings().removeClass('active');
                    $('.jieSQ').children('button').removeClass('active');
                    $('.excel div').css({display: 'none'});
                    $('.show').children().css({display: 'none'});
                    $('.excel div').eq(index).css({display: 'block'});
                    $('.show').children().eq(index).css({display: 'block'});
                });
            });
            $('.jieSQ').children('button').each(function (index) {
                $(this).on('click', function () {
                    $(this).addClass('active').siblings().removeClass('active');
                    $('.caiJQ').children('button').removeClass('active');
                    $('.excel div').css({display: 'none'});
                    $('.show').children().css({display: 'none'});
                    $('.excel div').eq(index + 8).css({display: 'block'});
                    $('.show').children().eq(index + 8).css({display: 'block'});
                });
            });
            let nthChild = this.$store.state.product.ntnChild;
            $('.excel div').css({display: 'none'});
            if (nthChild <= 8) {
                $('.caiJQ').children('button').eq(nthChild).addClass('active');
                $('.excel div').eq(nthChild).css({display: 'block'});
            } else {
                $('.jieSQ').children('button').eq(nthChild - 8).addClass('active');
                $('.excel div').eq(8).css({display: 'block'});
            }
            $('.show').children().eq(nthChild).css({display: 'block'});
        }
    }
</script>

<style scoped>
    h2 {
        margin-top: 20px;
    }

    h3 {
        background: #0c0c0c;
        color: #fff;
        text-align: center
    }

    .XLnav {
        margin-top: 20px;
    }

    .xiangQingTitle {
        margin-top: 100px
    }

    .shiPin {
        padding: 0 20px;
    }

    .active {
        background: #009688;
        color: #fff;
    }

    /*各个系列*/
    .marginTop {
        margin-top: 20px
    }

    .XL img {
        margin: 0 auto
    }

    .XLMS {
        background: #f7f7f7;
        padding: 20px
    }

    .artical {
        color: #888888;
        font-size: 16px;
        min-height: 300px;
    }

    .biaoti {
        color: #0C0C0C;
        font-size: 24px;
        line-height: 30px;
        font-family: 微软雅黑;
        padding: 20px 0;
    }

    .shangPinLB {
        margin-top: 20px
    }

    .chanPinTu div {
        padding: 10px;
        border: 1px solid #f7f7f7;
    }

    .chanPinTu img {
        width: 100%;
    }

    .noneTr {
        min-height: 12px;
        background: #666666;
    }

    .noneTr td {
        color: #fff;
    }

    td {
        padding-left: 0;
        padding-right: 0;
        text-align: center
    }

    /*控制nt用的*/
    .noPadding > th {
        padding-left: 0px;
        padding-right: 0;
        text-align: center
    }
</style>