// pages/znpgresult/znpgresult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pinggu_box_show: true,
    bopenid:'',
    array:[],
    zzhen:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const selfPage = this;
    // 获取小程序id开始
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    console.log(123)
    wx.login({
      success: function (res) {
        console.log("122222222222222222");
        console.log(res.code);
        console.log(res)
        if (res.code) {
          wx.getUserInfo({
            success: function (res) {
              var objz = {};
              objz.avatarUrl = res.userInfo.avatarUrl;
              objz.nickName = res.userInfo.nickName;
              wx.setStorageSync('userInfo', objz); //存储userInfo
            }
          });
          // var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo'
          var l = 'http://192.168.1.111:8080/appletApi/getUserInfo'
          // console.log(res)
          wx.request({
            url: l,
            data: {
              code: res.code
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            // header: {}, // 设置请求的 header  
            success: function (res) {
              var obj = {};
              console.log(res)
              obj.openid = res.data.openid;
              obj.expires_in = Date.now() + res.data.expires_in;
              console.log("打印openid开始")
              console.log(obj.openid);
              selfPage.setData({
                bopenid: obj.openid
              })
              console.log("打印openid结束")
              wx.setStorageSync('user', obj); //存储openid 
              console.log(selfPage.data.bopenid)
              wx.request({
                url: 'http://192.168.1.111:8080/doctorapplet/f52024d75d4348f38cdad3670d209c1e/evaluationtest',
                data: {
                  openid: encodeURI(selfPage.data.bopenid)
      },
                method: "get",
                success: function (res) {
                  console.log(res)
                  console.log(res.data.data)
                  // console.log(JSON.parse(res.data.data))
                  // console.log(JSON.parse(res.data.data).selftest)
                  // console.log(JSON.parse(res.data.data).selftest[0].evaluationTime)
                  // console.log(getMyDate(JSON.parse(res.data.data).selftest[0].evaluationTime))
                  var arr1 = JSON.parse(res.data.data).selftest;
                  var arr2 = [];
                  for (var i = 0; i < arr1.length; i++) {
                    var obj = {}
                    obj.id = arr1[i].id;
                    obj.basicInfo = arr1[i].basicinfo
                    obj.questioningSymptoms = arr1[i].symptoms
                    obj.time = getMyDate(arr1[i].time)
                    arr2.push(obj)
                  }
                  selfPage.setData({
                    array: arr2
                  })
                  // console.log(JSON.parse(res.data.data))
                  // console.log(JSON.parse(res.data.data))
                }
              })




            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  //获取小程序id结束


 
  },
  showbox1() {
      this.setData({
        pinggu_box_show: true
      })
  },
  showbox2() {
    this.setData({
      pinggu_box_show: false
    })
  },
  gobaogao(e) {
    console.log(e)
    const id = e.currentTarget.id
    const selfPage = this;
    wx.navigateTo({
      url: '/pages/baogao/baogao?bid='+id+'&bopenid='+selfPage.data.bopenid,
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
function getMyDate(str_time) {
      var date = new Date(str_time),
        year = date.getFullYear(),//年
        month = date.getMonth() + 1,//月
        day = date.getDate(),//日
        hour = date.getHours(),//时
        min = date.getMinutes(),//分
        sen = date.getSeconds(),//秒
        msen = date.getMilliseconds(),//毫秒
        time1 = year + '-' + getzf(month) + '-' + getzf(day) + ' ' + getzf(hour) + ':' + getzf(min) + ':' + getzf(sen),
        time = year + '-' + getzf(month) + '-' + getzf(day) + ' ' + getzf(hour) + ':' + getzf(min) + ':' + getzf(sen) + ':' + getzf(msen);
      return time1;
};
//补0操作  
function getzf(num) {
      if (parseInt(num) < 10) {
            num = '0' + num;
      }
      return num;
}
