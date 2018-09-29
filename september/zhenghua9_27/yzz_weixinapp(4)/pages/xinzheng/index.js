// pages/xinzheng/index.js
var _this = null;
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
        diseasename:'',
        diseasepro: '',

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
        sub();
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        _this = this;
        //
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
                _this.setData({
                    allGoodsFilte: res.data.sym
                })
                _this.setData({
                    nub: 1
                })
                // _this.setData({
                //     num: "main"
                // })
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
function sub() {
    //平移展示
    _this.animation.translateY(140).step({ duration: 600 })
    _this.setData({
        //输出动画
        animation: _this.animation.export()
    })
    // var model = JSON.stringify(_this.data.ayyr);
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
            _this.setData({
                diseasename: res.data.disease[0].name
            })
            _this.setData({
                diseasepro: res.data.disease[0].pro
            })
            _this.setData({
                allGoodsFilte: res.data.sym
            })
            
        }
    })

}
