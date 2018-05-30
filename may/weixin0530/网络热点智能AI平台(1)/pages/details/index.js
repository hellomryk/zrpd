//index.js
import * as echarts from '../../ec-canvas/echarts';
let chart = null;
//获取应用实例
const app = getApp();
var pageSelf = undefined, dates = null, tdvalue = null, box = null, img = "", title = "", updateTime = "", typeNameArray = null, barEchartsProcessJson = "", zfdata = [], varmark = [], zzdata = [], uptime = [], ciyun = null, id = "", recordTimeInterval="";
//词云数据处理
var side = ['side--back', 'side--left', 'side--right', 'side--top', 'side--bottom', 'side--front'], sidewzh = [], sidecolor = ['color:#EDE100;', 'color:#01A6ED;', 'color:#F4768C;', 'color:#F16321;', 'color:#FAC10F;', 'color:#CFE8CB;'];
//雷达数据处理
var arr = ["left: 140rpx;top: 150rpx;", "left: 100rpx;top: 60rpx;", "left: 200rpx;top: 70rpx;", "left: 220rpx;top: 110rpx;", "left: 40rpx;top: 200rpx;", "left: 50rpx;top: 90rpx;", "left: 35rpx;top: 170rpx;", "left: 110rpx;top: 240rpx;", "left: 220rpx;top: 170rpx;", "left: 220rpx;top: 200rpx;"]
var pary = [];
var ppt = [];
var ldhs = function ld() {
    arr.sort(function () { return 0.5 - Math.random() });
    var str = arr.join();

    ppt = [];
    for (var i = 0; i < 5; i++) {

        ppt.push({
            coord: arr[i], par: pary[i]
        })
    }
}
//折线图
function getBarOption(canvas, width, height) {
    //折线图数据
    wx.request({
        url: 'http://catch.infobigdata.com/api/GetChartData',
        data: {
            wordId: id,
            rnd: Math.random()
        },
        header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method: "POST",
        success: function (res) {
            console.log(res.data)
            if (res.data) {
                dates = res.data[0].dates;
                tdvalue = res.data[0].value;
                const barChart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                });
                canvas.setChart(barChart);


                var oph = {

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
                        data: dates
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
                        data: tdvalue
                    }]
                };

                barChart.setOption(oph);
                return barChart;
            } else {
                pageSelf.setData({
                    uca: false
                });
                pageSelf.setData({
                    uc: "暂无数据！"
                });
             
            }


        },
        fail: function () {

        }
    })


}

//柱状图
function getScatterOption(canvas, width, height) {
    wx.showLoading({
        title: '加载中',
    })
    //柱状图、详细信息接口、列表数据接口
    wx.request({
        url: 'http://catch.infobigdata.com/applet/getDetail',
        data: {
            json: '{"hot_id":' + id + '}',
            rnd: Math.random()
        },
        header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method: "POST",
        success: function (res) {
            wx.hideLoading();
            // var arr2 = res.data.result.split(",");
            // console.log(res.data)
            box = JSON.parse(res.data.result)
            // console.log(box)
            pageSelf.setData({
                img: box.hotImg
            });
            pageSelf.setData({
                title: box.hotName
            });
            pageSelf.setData({
                typeNameArray: box.typeNameArray
            });
            pageSelf.setData({
                updateTime: box.updateTime
            });
            pageSelf.setData({
                arry: box.eventList
            });
            barEchartsProcessJson = JSON.parse(box.barEchartsProcessJson);
            // console.log(barEchartsProcessJson)
            if (barEchartsProcessJson.length > 10) {
                barEchartsProcessJson.length = 10;
            }
            zfdata = [];
            zzdata = [];
            varmark = [];
            uptime = [];
            for (var i = 0; i < barEchartsProcessJson.length; i++) {
                zfdata.push(barEchartsProcessJson[i].serchcount / 10000);
                zzdata.push(barEchartsProcessJson[i].title)
                uptime.push(barEchartsProcessJson[i].uptime)
            }

            for (var i = 0; i < zfdata.length; i++) {
                varmark.push({
                    value: zzdata[i], xAxis: i, yAxis: zfdata[i]
                })
            }
            pageSelf.setData({
                barEchartsProcessJson: barEchartsProcessJson
            });
            const scatterChart = echarts.init(canvas, null, {
                width: width,
                height: height
            });
            canvas.setChart(scatterChart);


            var opz = {
                grid: {
                    top: "30%",
                    left: "2%",   //图表距边框的距离
                    right: "4%",
                    bottom: 0,
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: uptime
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: { formatter: '{value} 万' }

                    }
                ],
                series: [
                    {
                        name: '蒸发量',
                        type: 'bar',
                        data: zfdata,
                        label: {
                            show: true, position: 'inside',

                        },

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
            scatterChart.setOption(opz);

            return scatterChart;

        }
    })



}
//雷达
function radar(id) {
    wx.request({
        url: 'http://catch.infobigdata.com/applet/getRadarRandom',
        data: {
            hot_id: id
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        method: "POST",
        success: function (res) {
            if (res.data.code == 200) {
                var arr2 = res.data.result.split(",");
                ciyun = arr2;
                sidewzh = [];
                for (var s = 0; s < side.length; s++) {
                    sidewzh.push({
                        a: ciyun[s], b: side[s], c: sidecolor[s]
                    })

                }
                pageSelf.setData({
                    ciyun: sidewzh
                })

                // arr2.length = 5;
                pary = arr2;
                ldhs();
                pageSelf.setData({
                    ppt: ppt
                })
            } else if (res.data.code == 300) {
                wx.showToast({
                    title: '暂时没有您想要的数据！',
                    icon: 'none',
                    duration: 2000
                })
            } else if (res.data.code == 400) {
                wx.showToast({
                    title: '系统搜索错误，请重试！',
                    icon: 'none',
                    duration: 2000
                })
            }

        }
    })
}



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
        uc:'',
        uca:true,
        barEchartsProcessJson: '',
        img: img,//logo
        title: title,//title
        updateTime: updateTime,//更新时间
        typeNameArray: typeNameArray,//详细标签
        animation: '',//雷达动画
        ciyun: sidewzh,//词云
        isSpeaking: false,//弹窗蒙版
        dataArray: [],//弹窗数据
        ppt: ppt,//雷达数据
        arry: [],//数据列表信息
        hasUserInfo: false,
        ecBar: {
            // lazyLoad: true ,
            onInit: getBarOption
        },

        ecScatter: {
            // lazyLoad: false,
            onInit: getScatterOption

        },

        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    showmabel: function (e) {
        var id = e.currentTarget.id;

        pageSelf.setData({
            isSpeaking: true
        })
        pageSelf.setData({
            dataArray: pageSelf.data.arry[id].dataArray
        })


    },
    hidemabel: function () {
        pageSelf.setData({
            isSpeaking: false
        })

    },
    onLoad: function (options) {
        pageSelf = this;
         id = options.title;
        radar(id);
        clearInterval(recordTimeInterval);
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
        // 雷达刷新数据
        recordTimeInterval= setInterval(function () {
            radar(id);
        }, 6000)
      
    },
    onShow: function () {
        // Do something when page show.


    },
    onHide: function () {
        // Do something when page hide.

    },
    onReady: function () {

        // // 页面渲染完成
        // //实例化一个动画
        // this.animation = wx.createAnimation({
        //     // 动画持续时间，单位ms，默认值 400
        //     duration: 300,
        //     //动画方式
        //     timingFunction: 'ease',
        //     // 延迟多长时间开始
        //     delay: 100,
        //     transformOrigin: '50% 50%',
        //     success: function (res) {
        //         // console.log(res)
        //     }
        // })

    },
    copyTBL: function (e) {//一键复制
        var self = this;
        wx.setClipboardData({
            data: self.data.taokouling,
            success: function (res) {
                // self.setData({copyTip:true}),  
                wx.showModal({
                    title: '提示',
                    content: '复制成功',
                    success: function (res) {
                        if (res.confirm) {
                            console.log('确定')
                        } else if (res.cancel) {
                            console.log('取消')
                        }
                    }
                })
            }
        });
    },
    getUserInfo: function (e) {
        // console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})





