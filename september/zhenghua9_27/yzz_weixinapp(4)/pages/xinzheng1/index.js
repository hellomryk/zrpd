// pages/xinzheng/index.js
var _this = null;
import * as echarts from '../../ec-canvas/echarts';
let chart = null;
function setOption(chart,list,data) {
    var option = {
        color: ['#37a2da', '#32c5e9', '#67e0e3'],
        title: {
            text: '疾病排行',
            textStyle:{
                fontSize: 15,
                color: '#919aa4',
            }

        },
        tooltip: {
            show: false
        },
        legend: {
            x: 'right',
            data: list
        },
        grid: {
            top:'20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: list,
                axisLine: {
                    lineStyle: {
                        color: '#919aa4'
                    }
                },
                axisLabel: {
                    // rotate: -15,//-15度角倾斜显示  
                    interval: 0,//横轴信息全部显示
                    color: '#919aa4'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#919aa4'
                    }
                },
                axisLabel: {
                    color: '#919aa4'
                }
            }
        ],
        series: [
            {
                name: 'box',
                type: 'bar',
                barMaxWidth: 60,//最大宽度
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        trigger: 'item',
                        formatter: '{c}%'
                    }
                },
                itemStyle: {
                    normal: {
                        // 随机显示
                        //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}

                        // 定制显示（按顺序）
                        color: function (params) {
                            var colorList = ['#52c126', '#14c858', '#0dc989'];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: data,




            }
        ]
    };

  
    chart.setOption(option);
    wx.hideLoading(); 
    chart.on('click', function (params) {
        var name_bar = params.name;
        wx.navigateTo({
            url: '../weidu/index?id=' + name_bar,
        })
        console.log(params.name)
    })
    
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nub: 1,
        num: "主要",
        ayyr: [],
        allGoodsFilte: '',
        animation: '',//问题列表动画
        diseasename:'---',
        diseasepro: '0%',
        ec: {
            lazyLoad: true 
        }

    },
    psname: function (e) {
        var name_bar = _this.data.diseasename;
        wx.navigateTo({
            url: '../weidu/index?id=' + name_bar,
        })
    },
    serviceValChange: function (e) {
        var allGoodsFilte = this.data.allGoodsFilte;
        var checkArr = e.detail.value;
        console.log(checkArr)
        for (var i = 0; i < allGoodsFilte.length; i++) {
            if (checkArr.indexOf(i + "") != -1) {
                allGoodsFilte[i].checked = true;
            } else {
                allGoodsFilte[i].checked = false;
            }
        }
        this.setData({
            allGoodsFilte: allGoodsFilte
        })
        ayyr();
        
    },
    submit: function () {
        console.log(_this.data.ayyr)
        wx.showLoading({
            title: '加载中',
        })
        wx.request({
            url: 'https://jk.infobigdata.com/newrobot4',
            data: {
                sym: _this.data.ayyr

            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: "POST",
            success: function (res) {
                console.log(res.data)
                console.log(res.data.sym)
                if (res.data.disease.length==0){
                    _this.setData({
                        diseasename: "--"
                    })
                    _this.setData({
                        diseasepro: "0%"
                    })
                 
                }else{
                    _this.setData({
                        diseasename: res.data.disease[0].name
                    })
                    _this.setData({
                        diseasepro: res.data.disease[0].pro
                    })
                  
                }
                _this.setData({
                    allGoodsFilte: res.data.sym
                })
         
                //柱状图
               
                var di= res.data.disease,ar=['无数据'],ay=[0];
                if (res.data.disease.length != 0) {
                    ar = [], ay = []
                    for (var s = 0; s < di.length; s++) {
                        ar.push(di[s].name);
                        ay.push(di[s].pro.substring(0, di[s].pro.length - 1));

                    }
                }
                
                console.log(ar)
           console.log(ay)
            
                _this.ecComponent = _this.selectComponent('#mychart-dom-bar');
                _this.ecComponent.init((canvas, width, height) => {
                    // 获取组件的 canvas、width、height 后的回调函数
                    // 在这里初始化图表
                    const chart = echarts.init(canvas, null, {
                        width: width,
                        height: height
                    });
                   
                    setOption(chart, ar, ay);

                    // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
                    _this.chart = chart;


                    // 注意这里一定要返回 chart 实例，否则会影响事件处理等
                    return chart;
                });
               
            }
              
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        _this = this;
        wx.showLoading({
            title: '加载中',
        })
        //请求
        wx.request({
            url: 'https://jk.infobigdata.com/newrobot4',
            data: {
                sym: []
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: "POST",
            success: function (res) {
                console.log(res.data)
                console.log(res.data.main)
                if (res.data.disease.length == 0) {
                    _this.setData({
                        diseasename: "--"
                    })
                    _this.setData({
                        diseasepro: "0%"
                    })

                } else {
                    _this.setData({
                        diseasename: res.data.disease[0].name
                    })
                    _this.setData({
                        diseasepro: res.data.disease[0].pro
                    })

                }
                _this.setData({
                    allGoodsFilte: res.data.sym
                })

                //柱状图

                var di = res.data.disease, ar = ['无数据'], ay = [0];
                if (res.data.disease.length != 0) {
                    ar = [], ay = []
                    for (var s = 0; s < di.length; s++) {
                        ar.push(di[s].name);
                        ay.push(di[s].pro.substring(0, di[s].pro.length - 1));

                    }
                }

                console.log(ar)
                console.log(ay)

                _this.ecComponent = _this.selectComponent('#mychart-dom-bar');
                _this.ecComponent.init((canvas, width, height) => {
                    // 获取组件的 canvas、width、height 后的回调函数
                    // 在这里初始化图表
                    const chart = echarts.init(canvas, null, {
                        width: width,
                        height: height
                    });

                    setOption(chart, ar, ay);

                    // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
                    _this.chart = chart;


                    // 注意这里一定要返回 chart 实例，否则会影响事件处理等
                    return chart;
                });
                
            }
             
        })
      
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // 页面渲染完成
        //实例化一个动画
        _this.animation = wx.createAnimation({
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

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
//取选中数组
function ayyr() {
    var psal = [];
    for (var i = 0; i < _this.data.allGoodsFilte.length; i++) {
        if (_this.data.allGoodsFilte[i].checked) {
            psal.push( _this.data.allGoodsFilte[i].id )
        }
    }
    _this.setData({
        ayyr: psal
    })
    console.log(_this.data.ayyr)
    
}

