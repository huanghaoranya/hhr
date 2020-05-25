<template>
    <div class="show">
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
            <th>测温范围</th>
            <th colspan="2">产品特性</th>
            <th>应用场景</th>
            </tr>
            </thead>
            <tbody>

            <!--nt59-li-->
            <tr>
                <td @mouseenter="addTip($event)" data-tip="HT/HT78-LE-D.png">NT59-LI-A</td>
                <td rowspan="5">FSK-433</td>
                <td rowspan="5">内置天线</td>
                <td rowspan="5">100米</td>
                <td rowspan="5">2层</td>
                <td rowspan="5">92mA</td>
                <td rowspan="5">3.2uA</td>
                <td rowspan="5">3500mA电池</td>
                <td>【-30~80℃】</td>
                <td>外形小巧，密封性更好</td>
                <td>内置探头，适合冰箱、冷藏柜等冷链测温</td>
                <td rowspan="5">房间等小范围测温</td>
            </tr>
            <tr>
                <td @mouseenter="addTip($event)" data-tip="NT/NT78-LE-D05.png" >NT59-LI-B10</td>
                <td rowspan="4">【-30~120℃】</td>
                <td rowspan="4">传感器长度可选且更灵敏</td>
                <td>外置防水探头，适合环境、液体等</td>
            </tr>
            <tr>
                <td @mouseenter="addTip($event)" data-tip="HT/HT78-LE-D.png">NT59-LI-C10</td>
                <td>外置可替换探头，适合建筑水泥测温</td>
            </tr>
            <tr>
                <td>NT59-LI-D10</td>
                <td>外置针式探头，适合料堆、粮堆、土壤测温</td>
            </tr>
            <tr>
                <td>NT59-LI-E10</td>
                <td>外置片状探头，适合金属表面测温</td>
            </tr>
            <tr>
                <td colspan="12" class="hr"></td>
            </tr>

            <!--nt59-le-->
            <tr>
                <td>NT59-LE-A</td>
                <td rowspan="5">FSK-433</td>
                <td rowspan="5">外置天线</td>
                <td rowspan="5">300米</td>
                <td rowspan="5">5层</td>
                <td rowspan="5">92mA</td>
                <td rowspan="5">3.2uA</td>
                <td rowspan="5">3500mA电池</td>
                <td>【-30~80℃】</td>
                <td>更美观</td>
                <td>内置探头，适合冰箱、冷藏柜等冷链测温</td>
                <td rowspan="5">车间等中型环境测温</td>
            </tr>
            <tr>
                <td>NT59-LE-B10</td>
                <td rowspan="4">【-30~120℃】</td>
                <td rowspan="4">传感器长度可选且更灵敏</td>
                <td>外置防水探头，适合环境、液体等</td>
            </tr>
            <tr>
                <td>NT59-LE-C10</td>
                <td>外置可替换探头，适合建筑水泥测温</td>
            </tr>
            <tr>
                <td>NT59-LE-D10</td>
                <td>外置针式探头，适合料堆、粮堆、土壤测温</td>
            </tr>
            <tr>
                <td>NT59-LE-E10</td>
                <td>外置片状探头，适合金属表面测温</td>
            </tr>
            <tr>
                <td colspan="12" class="hr"></td>
            </tr>

            <!--nt-78-->
            <tr>
                <td>NT78-LE-A</td>
                <td rowspan="5">LORA-433</td>
                <td rowspan="5">外置天线</td>
                <td rowspan="5">500米</td>
                <td rowspan="5">10层</td>
                <td rowspan="5">132mA</td>
                <td rowspan="5">1.8uA</td>
                <td rowspan="5">3500mA电池</td>
                <td>【-30~80℃】</td>
                <td>外形小巧，密封性更好</td>
                <td>内置探头，适合冰箱、冷藏柜等冷链测温</td>
                <td rowspan="5">楼宇等复杂大环境测温</td>
            </tr>
            <tr>
                <td>NT78-LE-B10</td>
                <td rowspan="4">【-30~120℃】</td>
                <td rowspan="4">传感器长度可选且更灵敏</td>
                <td>外置防水探头，适合环境、液体等</td>
            </tr>
            <tr>
                <td>NT78-LE-C10</td>
                <td>外置可替换探头，适合建筑水泥测温</td>
            </tr>
            <tr>
                <td>NT78-LE-D10</td>
                <td>外置针式探头，适合料堆、粮堆、土壤测温</td>
            </tr>
            <tr>
                <td>NT78-LE-E10</td>
                <td>外置片状探头，适合金属表面测温</td>
            </tr>
            </tbody>
        </table>
        <!--数据接收器-->
        <table class="layui-table">
            <thead>
            <tr>
                <th>数据接收器</th>
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
                <td>RE59-M-485</td>
                <td rowspan="2">RS485</td>
                <td rowspan="4">本地暂存</td>
                <td rowspan="4">集中器（非联网模式）</td>
                <td rowspan="2">标准MODBUS-RTU</td>
                <td rowspan="2">提供协议说明，需要用户自己设计组态软件</td>
                <td rowspan="2">一般与PLC\DTU\串口服务器等设备对接，适合工控系统集成</td>
            </tr>
            <tr>
                <td>RE78-M-485</td>
            </tr>
            <tr>
                <td>RE59-P-USB</td>
                <td rowspan="2">USB转串口</td>
                <td rowspan="2">私有协议</td>
                <td rowspan="2">免费提供电脑桌面观测软件</td>
                <td rowspan="2">适合不会编程的人使用，电脑需一直开启，一旦关机数据停止记录</td>
            </tr>
            <tr>
                <td>RE78-P-USB</td>
            </tr>
            <tr>
                <td>WT59</td>
                <td rowspan="4">WIFI</td>
                <td rowspan="12">云存储</td>
                <td rowspan="12">网关（互联网模式）</td>
                <td rowspan="12">HTTP协议，JSON格式</td>
                <td rowspan="12">提供网页APP免费使用，支持手机、电脑远程观测</td>
                <td rowspan="4">适合有WIFI网络覆盖的场景，不产生流量费用</td>
            </tr>
            <tr>
                <td>WT59-TFT</td>
            </tr>
            <tr>
                <td>WT78</td>
            </tr>
            <tr>
                <td>WT78-TFT</td>
            </tr>
            <tr>
                <td>WG59</td>
                <td rowspan="4">GPRS</td>
                <td rowspan="4">任何手机通讯的场合均可使用，布网成本最低，流量费用10RMB/年</td>
            </tr>
            <tr>
                <td>WG59-TFT</td>
            </tr>
            <tr>
                <td>WG78</td>
            </tr>
            <tr>
                <td>WG78-TFT</td>
            </tr>

            <tr>
                <td>ET59</td>
                <td rowspan="4">以太网</td>
                <td rowspan="4">适合已经有线局域网络覆盖的场景，不产生流量费用</td>
            </tr>
            <tr>
                <td>ET59-TFT</td>
            </tr>
            <tr>
                <td>ET78</td>
            </tr>
            <tr>
                <td>ET78-TFT</td>
            </tr>
            <tr>
                <td>AL59</td>
                <td rowspan="2" colspan="2">高分贝声光报警器</td>
                <td rowspan="2" colspan="5">独立运行，单个报警器支多路温度采集器，且可以设置每一路的温度报警阈值，且每一路的阈值可设置不同；当声光报警时，查阅显示屏或手机或电脑来排查异常</td>
            </tr>
            <tr>
                <td>AL78</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                content: '',    //初始化数据
                err: ''
            }
        },
        methods:{
            addTip:function(event) {
                const target = event.target;
                let img = $(target).attr('data-tip');
                let url = require(`../assets/img/${img}`);
                let str = '<img src=\"'+url+'\" style="width: 200px;background-color: #fff;margin: 0;">';
                layer.tips(str, target, {anim: 0, tips: [2,'#fff'], time: 1500,area:'230px',isOutAnim: false,shade:0});
            }
        },
        mounted(){
            let td = $('td:nth-child(1)');
            console.log(td);
        },
    }
</script>

<style scoped>
    .show {
        margin: 0 50px;
        margin-top: 100px;
        min-height: 800px;
    }
    .hr{min-height: 20px;background: #666666}
</style>