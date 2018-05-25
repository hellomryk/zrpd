//index.js
import * as echarts from '../../ec-canvas/echarts';
//获取应用实例
const app = getApp();
var pageSelf = undefined;
var zfdata = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 105.6, 162.2, 32.6, 20.0, 6.4, 3.3], varmark = [], zzdata = ['广州', '深圳', '东莞', '上海', '北京', '杭州', '郑州', '成都', '太原', '天津', '长沙', '宁波'];
for (var i = 0; i < zfdata.length; i++) {
    varmark.push({
        value: zzdata[i], xAxis: i, yAxis: zfdata[i]
    })
}
console.log(varmark)
//雷达数据
var arr = ["left: 140rpx;top: 150rpx;", "left: 100rpx;top: 60rpx;", "left: 200rpx;top: 70rpx;", "left: 220rpx;top: 110rpx;", "left: 40rpx;top: 200rpx;", "left: 50rpx;top: 90rpx;", "left: 35rpx;top: 170rpx;", "left: 110rpx;top: 240rpx;", "left: 220rpx;top: 170rpx;", "left: 220rpx;top: 200rpx;"]
var pary = ['标的', '租赁房', '宣传片', '西湖大学', '街头艺人',];
var ppt = [];
var ldhs = function ld() {
    arr.sort(function () { return 0.5 - Math.random() })
    var str = arr.join();
    ppt = [];
    for (var i in pary) {

        ppt.push({
            coord: arr[i], par: pary[i]
        })
    }
    console.log(ppt)
}
ldhs()
Page({
    onShareAppMessage: function (res) {
        return {
            title: '页面分享',
            path: '/pages/index/index',
            success: function () { },
            fail: function () { }
        }
    },
    data: {
        motto: 'Hello World',
        userInfo: {},
        animation: '',//雷达动画
        ppt: ppt,//雷达数据
        hasUserInfo: false,
        ecBar: {
            onInit: function (canvas, width, height) {
                const barChart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(barChart);
                barChart.setOption(getBarOption());

                return barChart;
            }
        },

        ecScatter: {
            onInit: function (canvas, width, height) {
                const scatterChart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(scatterChart);
                scatterChart.setOption(getScatterOption());

                return scatterChart;
            }

        },
        arry: [{ time: '2', gzd: '大雨', ssl: '35000.00' }, { time: '2', gzd: '大雨', ssl: '35000.00' }, { time: '2', gzd: '大雨', ssl: '35000.00' }, { time: '2', gzd: '大雨', ssl: '35000.00' }, { time: '2', gzd: '大雨', ssl: '35000.00' }, { time: '2', gzd: '大雨', ssl: '35000.00' },],
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    mabel: function () {
        wx.showModal({
            title: '用户搜索聚焦',
            confirmText: '我知道了',
            showCancel: false,
            content: '北京近期阶段性大雨\r\n河北预期会有大雨\r\n夏季雨季较多较多地区会下大雨\r\n河南近期也会有大雨的天气情况',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    onLoad: function () {
        pageSelf = this;

        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    onReady: function () {

        // 页面渲染完成
        //实例化一个动画
        this.animation = wx.createAnimation({
            // 动画持续时间，单位ms，默认值 400
            duration: 300,
            //动画方式
            timingFunction: 'ease',
            // 延迟多长时间开始
            delay: 100,
            transformOrigin: '50% 50%',
            success: function (res) {
                console.log(res)
            }
        })
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})

function getBarOption() {
    return {

        color: "#F3BFC0",

        tooltip: {
            trigger: 'axis'
        },

        grid: {
            top: "13%",
            left: "2%",   //图表距边框的距离
            right: "4%",
            bottom: 0,
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['4/15', '4/15', '4/15', '4/15', '4/15', '4/15', '4/15']
        },
        yAxis: {
            x: 'center',
            type: 'value'
        },
        series: [{
            name: 'A',
            type: 'line',
            smooth: true,
            itemStyle: { normal: { areaStyle: { type: 'default' }, label: { show: true } } },
            data: [18, 36, 65, 30, 78, 40, 33]
        }]
    };


    chart.setOption(option);
    return chart;
}


function getScatterOption() {
    return {
        grid: {
            top: "23%",
            left: "2%",   //图表距边框的距离
            right: "4%",
            bottom: 0,
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['2018.5.11', '2018.5.11', '2018.5.11', '2018.5.11', '2018.5.11', '2018.5.11', '2018.5.11', '2018.5.11', '2018.5.11', '2018.5.11', '2018.5.11', '2018.5.11']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '蒸发量',
                type: 'bar',
                data: zfdata,
                label: { show: true, position: 'inside', },
                itemStyle: {
                    color: '#5DB1ED',
                },
                markPoint: {

                    emphasis: { label: { show: true, position: 'inside', color: '#fff' }, },
                    data: varmark,

                },

            }
        ]
    };

}


//雷达图动画
var n = 0;
var m = true;
var ld = setInterval(function () {
    n = n + 1;
    if (m) {
        //平移展示
        pageSelf.animation.opacity(1).rotate(360 * (n)).step({ duration: 1000 })
        m = !m;
    } else {
        pageSelf.animation.opacity(1).rotate(360 * (n)).step({ duration: 1000 })
        m = !m;
    }

    pageSelf.animation.opacity(0).step({ duration: 0 });
    ldhs();
    pageSelf.setData({
        ppt: ppt
    })
    pageSelf.setData({
        //输出动画
        animation: pageSelf.animation.export()
    })

}.bind(pageSelf), 8000)









