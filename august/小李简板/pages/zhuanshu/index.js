// pages/zhuanshu/index.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  time:"",
  array: [{
      "name": "头版头条",
      "id": 110,
      "address": [
          {
              "id": 11,
              "content": "崔永元炮轰范冰冰 影视圈“炸了！！！崔永元炮轰范冰冰”",
              "time": "IT互联网圈等99+篇报道",
              "url": "新浪财经"
          },
          {
              "id": 12,
              "content": "体育综述---骑士将猛追莱昂纳德，世界杯爆冷夜，德国负墨西哥，巴西被瑞士逼平",
              "time": "中国基金会等49+篇报道",
              "url": "新浪财经"
          },
          {
              "id": 13,
              "content": "天猫618单日引7000万人逛商场，新零售成实体零售“振兴密码”",
              "time": "新华社等44+篇报道",
              "url": "新浪财经"
          }
      ]

  }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var time = util.formatTime(new Date()); 
      this.setData({
          time: time
      });  
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