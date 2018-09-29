// pages/baogao/index.js
var _this = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name_yy: '',
    list: [

    ],

  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = _this.data.list;
    // console.log(e)
    // console.log(id)
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      }
    }
    _this.setData({
      list: list
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    _this = this;
    wx.request({
      url: 'http://192.168.1.111:8080/doctorapplet/f52024d75d4348f38cdad3670d209c1e/report',
      data: {
        recordid:encodeURI(options.bid),
        openid:encodeURI(options.bopenid)
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "POST",
      success: function (res) {
        console.log(res.data)
        var bean = JSON.parse(res.data.data);
        console.log(bean)
        _this.setData({
          list: bean
        });
        _this.setData({
          name_yy: res.data.prompt
        });
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