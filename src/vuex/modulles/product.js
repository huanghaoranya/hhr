//产品数据
const state = {
    //选中的第几个系列，默认第一个系列
    ntnChild: 0,
    //产品详情页采集器名字标签
    mainProduct: [
        {
            img: require('../../assets/img/proMain/main-nt.png'),
            title: 'NT(常温系列)',
            introduce: '【-30 ~ 120℃】主要用于医疗、农业、冷链等常温精测 '
        },
        {
            img: require('../../assets/img/proMain/main-pt.png'),
            title: 'PT(宽温系列)',
            introduce: '【-100 ~ 260℃】主要用于仪表、工控、计量等宽温精测 '
        },
        {
            img: require('../../assets/img/proMain/main-kt.png'),
            title: 'KT(高温系列)',
            introduce: '【 0 ~ 1350℃】主要用于烤箱、锅炉、转窑等高温精测 '
        },
        {
            img: require('../../assets/img/proMain/main-ht.png'),
            title: '温湿度(-40℃~120℃)&(1-99.9%)',
            introduce: '【-40 ~ 120℃，1-99.9%】主要用于大棚、仓库、工厂等环境温湿度监控 '
        },
        {img: require('../../assets/img/ChanPin03.png'), title: '二氧化碳', introduce: '主要用于农业种植、细菌培养等环境CO2浓度值检测 '},
        {img: require('../../assets/img/ChanPin03.png'), title: '光照', introduce: '主要用于环境光照度检测，为农业种植、节能减排提供数据参考源。 '},
        {img: require('../../assets/img/ChanPin03.png'), title: '水浸', introduce: '主要用于机房等环境的漏水、溢水等状态检测 '},
        {img: require('../../assets/img/ChanPin03.png'), title: 'PM2.5', introduce: '主要用于城市、工矿灯环境颗粒浓度PM2.5值检测 '},
        {
            img: require('../../assets/img/ChanPin03.png'),
            title: '网关',
            introduce: '简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍... '
        },
        {
            img: require('../../assets/img/ChanPin03.png'),
            title: '集中器',
            introduce: '简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍... '
        },
        {
            img: require('../../assets/img/ChanPin03.png'),
            title: '报警器',
            introduce: '简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍... '
        },
        {
            img: require('../../assets/img/ChanPin03.png'),
            title: '设置器',
            introduce: '简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍简单介绍... '
        }
    ],
    caiJiQi: [
        {name: '温度(-30℃~120℃)'},
        {name: '温度(-100℃~240℃)'},
        {name: '温度(0℃~1350℃)'},
        {name: '温湿度((-40℃~120℃)&(1-99.9%)'},
        {name: '二氧化碳'},
        {name: '光照'},
        {name: '水浸'},
        {name: 'PM2.5'}
    ],

    //产品详情页接收器标签
    jieShouQi: [
        {name: '网关'},
        {name: '集中器'},
        // {name: '报警器'},
        // {name: '设置器'}
    ],
    //各个系列
    xiLie: [
        {
            title: 'NT系列',
            MainImg: require('../../assets/img/proMain/main-nt.png'),
            introduce: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NT系列无线温度采集器的温度探头采用1%高精度进口热敏电阻封装而成。为满足不同的应用场景需求（如传感器引线的长度，导热系数，防水等级以及安装固定方式等），推出一系列产品供用户选择。实际使用时先将传感器探头与待测环境、固体、液体充分接触，无线采集器定时测温，并通过无线电磁波传输技术将温度传输汇总到远端接收器，最佳测温范围-30~120℃，精度可达到小于±0.5℃，与PT/KT系列相比特点在于性价比高，但测温范围较窄。\n' +
                '</br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了满足不同传输距离的要求，我们推出NT59系列和NT78系列，其中NT59系列采用433MHZ-FSK调制解调方式，接收灵敏度高，室外可传输300米以上，隔墙后可传输50米左右，隔墙传输能力远优于Zigbee、蓝牙和WIFI，适合工业应用场景；而NT78系列为LORA协议，具有距离远，抗干扰性能好，隔墙性能强劲等特点，NT78系列在野外空旷可达到2000米以上，市区环境可以传输500米以上，隔墙后可以传输100米以上，非常适合楼宇环境温度监控。\n' +
                '</br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无线温度采集器出厂时均预装一颗3500mAh功率型锂电池，该电池可-40~80℃工业场景使用，且持续发射电流可达1A，从而确保无线传输性能。' +
                '用户可通过视频和文档来更好的了解产品细节，欢迎交流。',
            ChanPinTu: [
                [
                    {url: require('../../assets/img/NT/NT59-LI-A.png'), title: 'NT59-LI-A'},
                    {url: require('../../assets/img/NT/DS59-LI-BD.png'), title: 'DS59-LI-BD'},
                    {url: require('../../assets/img/NT/NT59-LI-C.png'), title: 'NT59-LI-C'},
                    {url: require('../../assets/img/NT/NT59-LI-D.png'), title: 'NT59-LI-D'},
                    {url: require('../../assets/img/NT/NT59-LE-B.png'), title: 'NT59-LE-B'},
                    {url: require('../../assets/img/NT/NT59-LE-E.png'), title: 'NT59-LE-E'},
                    {url: require('../../assets/img/NT/NT59-LI-D.png'), title: 'NT59-LI-D'},
                ],
                [
                    {url: require('../../assets/img/NT/NT78-LE-A.png'), title: 'NT78-LE-A'},
                    {url: require('../../assets/img/NT/NT78-LE-B.png'), title: 'NT78-LE-B'},
                    {url: require('../../assets/img/NT/NT78-LE-D05.png'), title: 'NT78-LE-D05'},
                    {url: require('../../assets/img/NT/NT78-LE-E10.png'), title: 'NT78-LE-E10'}
                ],
                []
            ]
        },
        {
            title: 'PT系列',
            MainImg: require('../../assets/img/proMain/main-pt.png'),
            introduce: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PT系列默认采用3线制A级PT100，也可提供2/4线制PT100。为满足不同的应用场景需求（如传感器引线的长度，导热系数，防水等级以及安装固定方式等），推出一系列产品供用户选择。PT100传感器与无线温度采集器之间采用航空插头接口,相比冷压端子更坚固，实际使用时先将传感器探头与待测环境、固体、液体充分接触，无线采集器定时测温，并通过无线电磁波传输技术将温度传输汇总到远端接收器，，最佳测温范围-100~550℃，精度可达到小于±0.5℃，与NT/KT系列相比特点在于检测超低温环境时更精准。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了满足不同传输距离的要求，我们推出PT59系列和PT78系列，其中PT59系列采用433MHZ-FSK调制解调方式，接收灵敏度高，室外可传输300米以上，隔墙后可传输50米左右，隔墙传输能力远优于Zigbee、蓝牙和WIFI，适合工业应用场景；而PT78系列为LORA协议，具有距离远，抗干扰性能好，隔墙性能强劲等特点，PT78系列在野外空旷可达到2000米以上，市区环境可以传输500米以上，隔墙后可以传输100米以上，非常适合楼宇环境温度监控。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无线温度采集器出厂时均预装一颗3500mAh功率型锂电池，该电池可-40~80℃工业场景使用，且持续发射电流可达1A，从而确保无线传输性能。用户可通过视频和文档来更好的了解产品细节，欢迎交流。',
            ChanPinTu: [
                [
                    {url: require('../../assets/img/PT/PT59-LI-xxx.png'), title: 'PT59-LI-xxx'},
                    {url: require('../../assets/img/PT/PT59-LE-xxx.png'), title: 'PT59-LE-xxx'},

                ],
                [
                    {url: require('../../assets/img/PT/PT78-LI-xxx.png'), title: 'PT78-LI-xxx'},
                    {url: require('../../assets/img/PT/PT78-LE-xxx.png'), title: 'PT78-LE-xxx'},
                ],
                [
                    {url: require('../../assets/img/PT/PTS-A10.png'), title: 'PTS-A10'},
                    {url: require('../../assets/img/PT/PTS-B10.png'), title: 'PTS-B10'},
                    {url: require('../../assets/img/PT/PTS-C10.png'), title: 'PTS-C10'},
                    {url: require('../../assets/img/PT/PT59-LI-D05.png'), title: 'PT59-LI-D05'},
                    {url: require('../../assets/img/PT/PTS-E15.png'), title: 'PTS-E15'},
                    {url: require('../../assets/img/PT/PTS-F15.png'), title: 'PTS-F15'},
                    {url: require('../../assets/img/PT/PTS-G15.png'), title: 'PTS-G10'},
                    {url: require('../../assets/img/PT/PTS-H10.png'), title: 'PTS-H10'},
                    {url: require('../../assets/img/PT/PTS-I10.png'), title: 'PTS-I10'}
                ],
            ]
        },
        {
            title: 'KT系列',
            MainImg: require('../../assets/img/KT/KT59-LE-xxx.png'),
            introduce: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KT系列采用标准K型热电偶传感器。为满足不同的应用场景需求（如传感器引线的长度，导热系数，防水等级以及安装固定方式等），推出一系列产品供用户选择。由于K型热电偶传感器的特殊性，采用冷压端子接口，实际使用时先将传感器探头与待测环境、固体、液体充分接触，无线采集器定时测温，并通过无线电磁波传输技术将温度传输汇总到远端接收器，最佳测温范围0~1350℃，精度可达到小于±2℃@0~700℃，±4℃@700~1350℃，与NT/PT系列相比特点在于超高温环境测温更精准。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了满足不同传输距离的要求，我们推出KT59系列和KT78系列，其中KT59系列采用433MHZ-FSK调制解调方式，接收灵敏度高，室外可传输300米以上，隔墙后可传输50米左右，隔墙传输能力远优于Zigbee、蓝牙和WIFI，适合工业应用场景；而KT78系列为LORA协议，具有距离远，抗干扰性能好，隔墙性能强劲等特点，KT78系列在野外空旷可达到2000米以上，市区环境可以传输500米以上，隔墙后可以传输100米以上，非常适合楼宇环境温度监控。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无线温度采集器出厂时均预装一颗3500mAh功率型锂电池，该电池可-40~80℃工业场景使用，且持续发射电流可达1A，从而确保无线传输性能。                                       用户可通过视频和文档来更好的了解产品细节，欢迎交流。',
            ChanPinTu: [
                [
                    {url: require('../../assets/img/KT/KT59-LI-xxx.png'), title: 'KT59-LI-xxx'},
                    {url: require('../../assets/img/KT/KT59-LE-xxx.png'), title: 'KT59-LE-xxx'},
                ],
                [
                    {url: require('../../assets/img/KT/KT78-LI-xxx.png'), title: 'KT78-LI-xxx'},
                    {url: require('../../assets/img/KT/KT78-LE-xxx.png'), title: 'KT78-LE-xxx'},
                ],
                [
                    {url: require('../../assets/img/KT/KTS-A20.png'), title: 'KTS-A20'},
                    {url: require('../../assets/img/KT/KTS-B20.png'), title: 'KTS-B20'},
                    {url: require('../../assets/img/KT/KTS-C20.png'), title: 'KTS-C20'},
                    {url: require('../../assets/img/KT/KTS-D20.png'), title: 'KTS-D20'},
                    {url: require('../../assets/img/KT/KTS-E06.png'), title: 'KTS-E06'},
                ]
            ]
        },
        {
            title: '温湿度',
            MainImg: require('../../assets/img/proMain/main-ht.png'),
            introduce: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HT系列采用原装进口SHT30温湿度一体传感器。主要用于环境监测，无线采集器定时采集温湿度数据，并通过无线电磁波传输技术将温度传输汇总到远端接收器，最佳测温范围-40~120℃，精度±0.2℃ @0~65℃，1℃ @；±2%@10~90%，±4%@其他范围；湿度其他范围与NT/PT/KT系列相比特点在于增加湿度功能。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了满足不同传输距离的要求，我们推出HT59系列和HT78系列，其中HT59系列采用433MHZ-FSK调制解调方式，接收灵敏度高，室外可传输300米以上，隔墙后可传输50米左右，隔墙传输能力远优于Zigbee、蓝牙和WIFI，适合工业应用场景；而HT78系列为LORA协议，具有距离远，抗干扰性能好，隔墙性能强劲等特点，KT78系列在野外空旷可达到2000米以上，市区环境可以传输500米以上，隔墙后可以传输100米以上，非常适合楼宇环境温湿度监控。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无线温湿度采集器出厂时均预装一颗3500mAh功率型锂电池，该电池可-40~80℃工业场景使用，且持续发射电流可达1A，从而确保无线传输性能。',
            ChanPinTu: [
                [
                    {url: require('../../assets/img/HT/HT59-LI-A.png'), title: 'HT59-LI-A'},
                    {url: require('../../assets/img/HT/HT59-LE-C10.png'), title: 'HT59-LE-C10'},
                    {url: require('../../assets/img/HT/HT59-LE-D.png'), title: 'HT59-LE-D'},
                ],
                [
                    {url: require('../../assets/img/HT/HT78-LE-C10.png'), title: 'HT78-LE-C10'},
                    {url: require('../../assets/img/HT/HT78-LE-D.png'), title: 'HT78-LE-D'}
                ],
                []
            ]
        },
        {
            title: '二氧化碳',
            MainImg: require('../../assets/img/CO/CO59-LI-A.png'),
            introduce: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CO系列为无线二氧化碳采集器。主要用于采集环境的CO2值。采用非分红外吸收原理，两种波长的红外光照射在传感器上的两个通道，测哦哦从而得到光强对应关系及其变化，同时依据二氧化碳对于其中两种波长的红外光的吸收比率，计算出实际二氧化碳浓度。微处理器定时采集CO2数据，并通过无线电磁波传输技术将数据传输汇总到远端接收器，有效量程0~3000ppm,精度为±50ppm+5%FS。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了满足不同传输距离的要求，我们推出CO59系列和CO78系列，其中CO59系列采用433MHZ-FSK调制解调方式，接收灵敏度高，室外可传输300米以上，隔墙后可传输50米左右，隔墙传输能力远优于Zigbee、蓝牙和WIFI，适合工业应用场景；而PM78系列为LORA协议，具有距离远，抗干扰性能好，隔墙性能强劲等特点，CO78系列在野外空旷可达到2000米以上，市区环境可以传输500米以上，隔墙后可以传输100米以上，非常适合楼宇环境监控。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于内部集成的CO2传感器功耗较大，不适合电池供电，所以采用9-30V直流供电或者220V交流的供电，其他相关技术细节欢迎交流。',
            ChanPinTu: [
                [{url: require('../../assets/img/CO/CO59-LI-A.png'), title: 'CO59-LI-A'},],
                [{url: require('../../assets/img/CO/CO78-LI-A.png'), title: 'CO78-LI-A'},],
                []
            ]
        },
        {
            title: '光照',
            MainImg: require('../../assets/img/SU/SU59-LE-A.png'),
            introduce: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SU系列为无线光照度采集器，内部集成了数字光电传感器，通过片上滤光器可有效过滤紫外线和红外光，具有极宽的光动态范围，从0.054流明至200000流明。微处理器定时采集器光照度值，并通过无线电磁波传输技术将数据传输汇总到远端接收器。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了满足不同传输距离的要求，我们推出SU59系列和SU78系列，其中SU59系列采用433MHZ-FSK调制解调方式，接收灵敏度高，室外可传输300米以上，隔墙后可传输50米左右，隔墙传输能力远优于Zigbee、蓝牙和WIFI，适合工业应用场景；而SU78系列为LORA协议，具有距离远，抗干扰性能好，隔墙性能强劲等特点，SU78系列在野外空旷可达到2000米以上，市区环境可以传输500米以上，隔墙后可以传输100米以上，非常适合楼宇环境光照度监控。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无线温度采集器出厂时均预装一颗3500mAh功率型锂电池，该电池可-40~80℃工业场景使用，且持续发射电流可达1A，从而确保无线传输性能,欢迎交流。',
            ChanPinTu: [
                [
                    {url: require('../../assets/img/SU/SU59-LE-A.png'), title: 'SU59-LE-A'},
                    {url: require('../../assets/img/SU/SU59-LI-A.png'), title: 'SU59-LI-A'},
                ],
                [
                    {url: require('../../assets/img/SU/SU78-LE-A.png'), title: 'SU78-LE-A'},
                    {url: require('../../assets/img/SU/SU78-LI-A.png'), title: 'SU78-LI-A'},
                ],
                []
            ]
        },
        {
            title: '水浸',
            MainImg: require('../../assets/img/SO/SO59-LE-A.png'),
            introduce: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SO系列为无线水浸传感采集器。主要用于机房等环境的漏水、溢水等状况的报警提示，主要有漏水绳、无线发射装置构成，采用电池供电轻松实现随处安装，原理上，不同介质（水、油、酸碱、酒精等）液体都有对应的电导系数，当漏水绳接触到液体时，水浸传感采集器将检测出相应的感应值，并通过无线电磁波传输技术将数据传输汇总到远端接收器，如测水时，干燥情况下感应值为2200，当漏水绳接触到水时，感应值会变大直到4100。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了满足不同传输距离的要求，我们推出SO59系列和SO78系列，其中SO59系列采用433MHZ-FSK调制解调方式，接收灵敏度高，室外可传输300米以上，隔墙后可传输50米左右，隔墙传输能力远优于Zigbee、蓝牙和WIFI，适合工业应用场景；而SO78系列为LORA协议，具有距离远，抗干扰性能好，隔墙性能强劲等特点，在野外空旷可达到2000米以上，市区环境可以传输500米以上，隔墙后可以传输100米以上，非常适合楼宇环境监控。\n' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SO系列为无线水浸传感采集器出厂时均预装一颗3500mAh功率型锂电池，该电池可-40~80℃工业场景使用，且持续发射电流可达1A，从而确保无线传输性能。                                       用户可通过视频和文档来更好的了解产品细节，欢迎交流。',
            ChanPinTu: [
                [
                    {url: require('../../assets/img/SO/SO59-LE-A.png'), title: 'SO59-LE-A'},
                    {url: require('../../assets/img/SO/SO59-LE-B.png'), title: 'SO59-LE-B'}
                ],
                [
                    {url: require('../../assets/img/SO/SO78-LE-A.png'), title: 'SO78-LE-A'},
                    {url: require('../../assets/img/SO/SO78-LE-B.png'), title: 'SO78-LE-B'},
                ],
                []
                ,

            ]
        },
        {
            title: 'PM2.5',
            MainImg: require('../../assets/img/PM/PM59-LI-A.png'),
            introduce: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PM系列为无线PM2.5采集器。内部集成了基于激光散射原理的数字式PM2.5颗粒浓度传感器，微处理器定时采集PM2.5数据，并通过无线电磁波传输技术将数据传输汇总到远端接收器，有效量程0~500微克/立方米。' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了满足不同传输距离的要求，我们推出PM59系列和PM78系列，其中PM59系列采用433MHZ-FSK调制解调方式，接收灵敏度高，室外可传输300米以上，隔墙后可传输50米左右，隔墙传输能力远优于Zigbee、蓝牙和WIFI，适合工业应用场景；而PM78系列为LORA协议，具有距离远，抗干扰性能好，隔墙性能强劲等特点，在野外空旷可达到2000米以上，市区环境可以传输500米以上，隔墙后可以传输100米以上，非常适合楼宇环境监控。' +
                '</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了测量精确，需要确保检测空气的流通性，所以采用的PM2.5传感器内置风扇，因为功耗较大，所以采用9-30V直流供电或者220V交流的供电，欢迎交流。',
            ChanPinTu: [
                [ {url: require('../../assets/img/PM/PM59-LI-A.png'), title: 'PM59-LI-A'},],
                [{url: require('../../assets/img/PM/PM78-LI-A.png'), title: 'PM78-LI-A'},],
                []
            ]
        },
        {
            title: '网关',
            MainImg: require('../../assets/img/WG/ET59-TFT.png'),
            introduce: 'PT系列的文字描述',
            ChanPinTu: [
                [
                    {url: require('../../assets/img/WG/ET59.png'), title: 'ET59'},
                    {url: require('../../assets/img/WG/ET59-TFT.png'), title: 'ET59-TFT'},
                    {url: require('../../assets/img/WG/WG59.png'), title: 'WG59'},
                    {url: require('../../assets/img/WG/WG59-TFT.png'), title: 'WG59-TFT'},
                    {url: require('../../assets/img/WG/WT59.png'), title: 'WT59'},
                    {url: require('../../assets/img/WG/WT59-TFT.png'), title: 'WT59-TFT'},
                ],
                [
                    {url: require('../../assets/img/WG/WG78.png'), title: 'WG78'},
                    {url: require('../../assets/img/WG/WG78-TFT.png'), title: 'WG78-TFT'},
                    {url: require('../../assets/img/WG/ET78.png'), title: 'ET78'},
                    {url: require('../../assets/img/WG/ET78-TFT.png'), title: 'ET78-TFT'},
                    {url: require('../../assets/img/WG/WT78.png'), title: 'WT78'},
                    {url: require('../../assets/img/WG/WT78-TFT.png'), title: 'WT78-TFT'},
                ],
                []
            ]
        },
        {
            title: '集中器',
            MainImg: require('../../assets/img/RE/RE59-M-485.png'),
            introduce: 'PT系列的文字描述',
            ChanPinTu: [
                [
                    {url: require('../../assets/img/RE/RE59-M-485.png'), title: 'RE59-M-485'},
                    {url: require('../../assets/img/RE/RE59-P-USB.png'), title: 'RE59-P-USB'},
                ],
                [
                    {url: require('../../assets/img/RE/RE78-M-485.png'), title: 'RE78-M-485'},
                    {url: require('../../assets/img/RE/RE78-P-USB.png'), title: 'RE78-P-USB'},
                ],
                []
            ]
        },
        {
            title: '报警器',
            MainImg: require('../../assets/img/ChanPin01.png'),
            introduce: 'PT系列的文字描述',
            ChanPinTu: [
                // {url: require('../../assets/img/NT/NT59-LI-A.png'), title: 'NT59-LI-A'},
                // {url: require('../../assets/img/NT/NT59-LI-A1.png'), title: 'NT59-LI-A1'},
                // {url: require('../../assets/img/NT/NT59-LI-A2.png'), title: 'NT59-LI-A2'},
                // {url: require('../../assets/img/NT/NT59-LI-B.png'), title: 'NT59-LI-B'},
                // {url: require('../../assets/img/NT/NT59-LI-B1.png'), title: 'NT59-LI-B1'},
                // {url: require('../../assets/img/NT/NT59-LI-C.png'), title: 'NT59-LI-C'},
                // {url: require('../../assets/img/NT/NT59-LI-D.png'), title: 'NT59-LI-D'},
                // {url: require('../../assets/img/NT/NT59-LI-JSTX.png'), title: '天线'},
            ]
        },
        {
            title: '设置器',
            MainImg: require('../../assets/img/ChanPin01.png'),
            introduce: 'PT系列的文字描述',
            ChanPinTu: [
                // {url: require('../../assets/img/NT/NT59-LI-A.png'), title: 'NT59-LI-A'},
                // {url: require('../../assets/img/NT/NT59-LI-A1.png'), title: 'NT59-LI-A1'},
                // {url: require('../../assets/img/NT/NT59-LI-A2.png'), title: 'NT59-LI-A2'},
                // {url: require('../../assets/img/NT/NT59-LI-B.png'), title: 'NT59-LI-B'},
                // {url: require('../../assets/img/NT/NT59-LI-B1.png'), title: 'NT59-LI-B1'},
                // {url: require('../../assets/img/NT/NT59-LI-C.png'), title: 'NT59-LI-C'},
                // {url: require('../../assets/img/NT/NT59-LI-D.png'), title: 'NT59-LI-D'},
                // {url: require('../../assets/img/NT/NT59-LI-JSTX.png'), title: '天线'},
            ]
        }

    ]
};
const mutations = {
    change(state, n) {
        state.ntnChild = n;
    }
};
const getters = {};
export default {
    state,
    getters,
    mutations
}