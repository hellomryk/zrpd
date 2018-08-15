// pages/build/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      array: [{
          "name": "商业人物",
          "id": 110,
          "address": [
              {
                  "id": 11,
                  "name": "马云",
                   "detailed": "阿里巴巴创始人",
                  "content": "马云大将沈迪凡获5930万港元股权奖励，出任阿里健康CEO不足三个月",
                  "time": "三小时前",
                  "url": "新浪财经"
              },
              {
                  "id": 11,
                  "name": "李彦宏",
                  "detailed": "百度创始人",
                  "content": "马云大将沈迪凡获5930万港元股权奖励，出任阿里健康CEO不足三个月",
                  "time": "三小时前",
                  "url": "新浪财经"
              },
              {
                  "id": 11,
                  "name": "马化腾",
                  "detailed": "腾讯创始人",
                  "content": "马云大将沈迪凡获5930万港元股权奖励，出任阿里健康CEO不足三个月",
                  "time": "三小时前",
                  "url": "新浪财经"
              }
          ]

      }, {
          "name": "行业主题",
          "id": 111,
          "address": [
              {
                  "id": 11,
                  "name": "新零售",
                  "content": "马云大将沈迪凡获5930万港元股权奖励，出任阿里健康CEO不足三个月",
                  "time": "三小时前",
                  "url": "新浪财经"
              },
              {
                  "id": 11,
                  "name": "云计算",
                  "content": "马云大将沈迪凡获5930万港元股权奖励，出任阿里健康CEO不足三个月",
                  "time": "三小时前",
                  "url": "新浪财经"
              },
              {
                  "id": 11,
                  "name": "国内互联网大公司",
                  "content": "马云大将沈迪凡获5930万港元股权奖励，出任阿里健康CEO不足三个月",
                  "time": "三小时前",
                  "url": "新浪财经"
              }
          ]

      }],
      autoplay: false,
     
  },
    locall:function(){
        wx.navigateTo({
            url: "/pages/new/index"
        })
    
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
          title: '',
      })  //抬头导航设置
  
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