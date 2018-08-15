// pages/jianbao/index.js
//获取应用实例
const app = getApp();

var _this=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      array: [{
          "name": "崔永元",
          "id": 110,
          "address": [
              {
                  "id": 11,
                  "content": "崔永元炮轰范冰冰 影视圈“炸了！！！”",
                  "time": "三小时前",
                  "url": "新浪财经"
              },
              {
                  "id": 12,
                  "content": "崔永元炮轰范冰冰 影视圈“炸了！！！”",
                  "time": "三小时前",
                  "url": "新浪财经"
              },
              {
                  "id": 13,
                  "content": "崔永元炮轰范冰冰 影视圈“炸了！！！”",
                  "time": "三小时前",
                  "url": "新浪财经"
              }
          ]
        
      }, {
          "name": "范冰冰",
          "id": 111,
          "address": [
              {
                  "id": 111,
                  "content": "范冰冰暂不回复 表示很尊重崔老师。。。",
                  "time": "三小时前",
                  "url": "新浪财经"
              },
              {
                  "id": 112,
                  "content": "范冰冰暂不回复 表示很尊重崔老师。。。",
                  "time": "三小时前",
                  "url": "新浪财经"
              },
              {
                  "id": 113,
                  "content": "范冰冰暂不回复 表示很尊重崔老师。。。",
                  "time": "三小时前",
                  "url": "新浪财经"
              }
          ]

      }],
      remove:true
  },
click:function(e){
    var id = e.currentTarget.id;
    console.log(id)

},
remove: function (e) {
    _this.setData({
        remove: false
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
onPullDownRefresh: function () {
    this.init();//初始化页面的接口请求
    wx.stopPullDownRefresh();//关闭下拉刷新
},
  onLoad: function (options) {  
      _this=this;
      wx.setNavigationBarTitle({
          title: '',
      })  //抬头导航设置
    //   wx.request({
    //       url: "",
    //       data: {
    //           str: '{"current_page":1,"page_size":10,"date_name":"' + encodeURIComponent('半年内') + '"}',
    //           rnd: Math.random()
    //       },
    //       method: "POST",
    //       success: function (res) {
            
    //       }
    //   })
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