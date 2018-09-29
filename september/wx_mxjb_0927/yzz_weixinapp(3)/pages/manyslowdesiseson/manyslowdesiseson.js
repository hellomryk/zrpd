// pages/manyslowdesiseson/manyslowdesiseson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nametitle:"",
    nametext:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(12345678)
    console.log(options)
    console.log(options.selectid)
    const selfPage = this;
    wx.request({
      url: 'http://192.168.1.111:8080/doctorapplet/f52024d75d4348f38cdad3670d209c1e/wiki',
      data: {
        wikiid: options.selectid,//0代表查列表，具体某一个id表示查具体某一条
      },
      method: 'get',
      success: function (res) {
        console.log(res)
        console.log(JSON.parse(res.data.data))
        selfPage.setData({
          nametitle: JSON.parse(res.data.data).wikipediName,
          nametext: JSON.parse(res.data.data).wikipediaDescribe
        })
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