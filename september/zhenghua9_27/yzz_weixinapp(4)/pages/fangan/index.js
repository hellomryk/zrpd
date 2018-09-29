// pages/fangan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:"牙周病",//病名
      bingyin: [    //病因
          {
              name:"补肾固齿丸",
              yin:"牙周痛",
              zheng: "牙龈出血",
      },
          {
              name: "补肾固齿丸",
              yin: "牙周痛",
              zheng: "牙龈出血",
          },
      ],
      bingzheng: [    //病症
          {
              name: "补肾固齿丸",
              yin: "牙周痛",
              zheng: "牙龈出血",
          },
          {
              name: "补肾固齿丸",
              yin: "牙周痛",
              zheng: "牙龈出血",
          },
      ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   wx.showLoading({title:"正在加载"});
      
    //   wx.request({
    //       url: '',
    //       data: {
         

    //       },
    //       header: {
    //           'content-type': 'application/x-www-form-urlencoded' // 默认值
    //       },
    //       method: "POST",
    //       success: function (res) {
    //           console.log(1111111111111111)
     //        wx.hideLoading();

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