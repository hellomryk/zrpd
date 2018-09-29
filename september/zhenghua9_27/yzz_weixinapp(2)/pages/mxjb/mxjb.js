// pages/mxjb/mxjb.js
const date = new Date()
const years = []
const months = []
const days = []

// for (let i = 1990; i <= date.getFullYear(); i++) {
//   years.push(i)
// }

// for (let i = 1; i <= 12; i++) {
//   months.push(i)
// }

// for (let i = 1; i <= 31; i++) {
//   days.push(i)
// }
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // years: years,
    // year: date.getFullYear(),
    // months: months,
    // month: 2,
    // days: days,
    // day: 2,
    years: ["杨坤","王五","李兮兮"],
  },
  bindChange: function (e) {
    const val = e.detail.value
    console.log(val)
    console.log(e.detail)
    this.setData({
      year: this.data.years[val[0]]
      // year: this.data.years[2]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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



