// pages/mappage/mappage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    m_jingdu: 1,
    m_weidu: 54,
    m_pagecan: 21
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    console.log(11111111)
    that.setData({
      m_jingdu: Number(options.jingdu),
      m_weidu: Number(options.weidu),
      m_pagecan: Number(options.pagecan)
    })
    console.log("huoqu晶晶几军军军军军军军军军军军军军军军军军军")
    console.log(that.data.m_jingdu)
    console.log(that.data.m_weidu)
    // 获取用户地理位置开始
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openlocation的经纬度
      success: function (res) {
        // var latitude = res.latitude
        // var longitude = res.longitude
        // console.log('地理位置开始')
        // console.log(res)
        // console.log(latitude)
        // console.log(longitude)
        // console.log('地理位置结束')
        wx.openLocation({
          latitude: that.data.m_jingdu,
          longitude: that.data.m_weidu,
          scale: 28
        })
      }
    })
    // 获取用户地理位置结束
    //回退页面回退两级
    wx.navigateback({
      delta: 2
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(1111111111222222222222222222)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const that = this;
    if (that.data.m_pagecan == 0) {
      wx.navigateTo({
        url: '/pages/littlea/littlea'
      })
    }
    if (that.data.m_pagecan == 1) {
      that.setData({
        m_pagecan: 0
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(4444)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.relaunch({
      url: "/pages/littlea/littlea"
    })
    console.log(55555)
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