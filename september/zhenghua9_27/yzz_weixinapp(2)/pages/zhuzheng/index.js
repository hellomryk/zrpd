// pages/zhuzheng/index.js
var _this=null;
Page({

  /**
   * 页面的初始数据
   */
    data: {
          nub:1,
        num:"主要",
         ayyr:[],
        allGoodsFilte: '',

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
  submit:function(){
    //   if (_this.data.nub==1){
    //       sub();
    //       _this.setData({
    //           nub: 2
    //       })
    //   } else if (_this.data.nub == 2){
    //       sub1();
    //   }
      sub();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      _this=this;
      //
wx.request({
    url: 'https://jk.infobigdata.com/newrobot',
    data: {
        type: "main"
    },
    header: {
        'content-type': 'application/json' // 默认值
    },
    method: "POST",
    success: function (res) {
        console.log(res.data)
        console.log(res.data.main)
        _this.setData({
            allGoodsFilte: res.data.main
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
function ayyr(){
    var psal=[];
    for (var i = 0; i < _this.data.allGoodsFilte.length; i++) {
        if (_this.data.allGoodsFilte[i].checked) {
            psal.push({ "id": _this.data.allGoodsFilte[i].id})
        }
    }
    _this.setData({
        ayyr: psal
    })
    console.log(_this.data.ayyr)
}
function sub () {
    //   _this.setData({
    //         num: "副"
    //     })
    var model = JSON.stringify(_this.data.ayyr);
    wx.navigateTo({    //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
        url: "/pages/fuzheng/index?id=" + model
    })

}
