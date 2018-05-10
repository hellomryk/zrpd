// pages/details/Word-details.js
var CusBase64 = require('../../utils/base64.js');
var md5Util = require('../../utils/MD5.js')
const app = getApp();
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
var tempFilePath;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordTime : 0
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  //开始录音的时候
  start: function () {

    const options = {
      duration: 600000,//指定录音的时长，单位 ms
      sampleRate: 16000,//采样率
      numberOfChannels: 1,//录音通道数
      encodeBitRate: 96000,//编码码率
      format: 'mp3',//音频格式，有效值 aac/mp3
      frameSize: 50,//指定帧大小，单位 KB
    }
    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
      var timestamp = Date.parse(new Date());
      this.setData({ recordTime: timestamp})


    });
    //错误回调
    recorderManager.onError((res) => {
      console.log(res);
    })
  },
  //停止录音
  stop: function () {
    recorderManager.stop();
    recorderManager.onStop((res) => {
      console.info(res);
      this.tempFilePath = res.tempFilePath;
      console.log('停止录音', res.tempFilePath)
      const { tempFilePath } = res;

      var timestamp = Date.parse(new Date());
      var recoTime = this.data.recordTime;
      console.info(timestamp);
      console.info(recoTime);
      var spendTime = timestamp - recoTime;
      console.info(spendTime);
      if (spendTime<=1000){
        wx.showToast({
          title: '语音太短请重试~',
          icon: 'none',
          duration: 1000
        })
        return;
      }

      wx.showLoading({
        title: '分析中',
      })


      // 文件上传到服务器
      wx.uploadFile({
        url: 'https://ssl.infobigdata.com/weixin/upload',
        filePath: tempFilePath,
        name: 'file',
        formData: {
          'user': 'test'
        },
        success: function (res) {
          var resData = res.data;
          if (resData==''){
            wx.showToast({
              title: '语音太短请重试~',
              icon: 'none',
              duration: 1000
            })
          }
          var jsonData = JSON.parse(resData);
          if (jsonData.code === '1'){
            console.info(jsonData.dataInfo);
            // 跳转到分析结果页面
            if (jsonData.dataInfo != ''){
              wx.navigateTo({
                url: '../word/Word-list?dataInfo=' + jsonData.dataInfo
              })
              // 关闭分析中弹框
              wx.hideLoading();
            } else {
              wx.showToast({
                title: '未识别请重试~',
                icon: 'none',
                duration: 2000
              })
            }
          } else {
            wx.showToast({
              title: '系统开小差了~',
              icon: 'none',
              duration: 2000
            })
          }
        }
      })

      // 播放声音
      // innerAudioContext.autoplay = true
      // innerAudioContext.src = this.tempFilePath,
      //   innerAudioContext.onPlay(() => {
      //     console.log('开始播放')
      //   })
      // innerAudioContext.onError((res) => {
      //   console.log(res.errMsg)
      //   console.log(res.errCode)
      // })
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
  
  },
  touchStart:function(){
    console.info("开始触摸");
  },
  touchStop:function(){
    console.info("结束触摸");
  }
})