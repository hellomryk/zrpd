// pages/historylist/historylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const selfPage = this;
wx.request({
  url:'http://192.168.1.111:8080/doctorapplet/f52024d75d4348f38cdad3670d209c1e/history',
  data:{

  },
  method:'post',
  success(res) {
    console.log(res)
    console.log(res.data.data)
    console.log(JSON.parse(res.data.data))
    var arr1 = JSON.parse(res.data.data);
    var arr2 = [];
    for(var i = 0;i < arr1.length;i ++) {
      var obj = {};
      var str = arr1[i].time;
      var arr3 = str.split("月");
      obj.month = arr3[0];
      obj.day = arr3[1];
      obj.basicinfo = arr1[i].baseinfo;
      obj.qsymptoms = arr1[i].symptoms;
      obj.id = arr1[i].id;
      arr2.push(obj)
    }
    console.log(arr2)
    selfPage.setData({
      array:arr2
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