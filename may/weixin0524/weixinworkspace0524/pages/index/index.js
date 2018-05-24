//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  doTTS:function() {
    var ttsDiv = document.getElementById('bdtts_div_id');
    var ttsAudio = document.getElementById('tts_autio_id');
    var ttsText = document.getElementById('ttsText').value;
    // 这样为什么替换不了播放内容
    /*var ssrcc = 'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=10&text='+ttsText;
    document.getElementById('tts_source_id').src=ssrcc;*/

    // 这样就可实现播放内容的替换了
    ttsDiv.removeChild(ttsAudio);
    var au1 = '<audio id="tts_autio_id" autoplay="autoplay">';
    var sss = '<source id="tts_source_id" src="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=9&text=' + ttsText + '"                              type="audio/mpeg">';
    var eee = '<embed id="tts_embed_id" height="0" width="0" src="">';
    var au2 = '</audio>';
    ttsDiv.innerHTML = au1 + sss + eee + au2;

    ttsAudio = document.getElementById('tts_autio_id');

    ttsAudio.play();
  },
  tapNamebofang: function (event) {
      var ttsDiv = document.getElementById('bdtts_div_id');
      var ttsAudio = document.getElementById('tts_autio_id');
      var ttsText = document.getElementById('ttsText').value;
      // 这样为什么替换不了播放内容
      /*var ssrcc = 'http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=10&text='+ttsText;
      document.getElementById('tts_source_id').src=ssrcc;*/

      // 这样就可实现播放内容的替换了
      ttsDiv.removeChild(ttsAudio);
      var au1 = '<audio id="tts_autio_id" autoplay="autoplay">';
      var sss = '<source id="tts_source_id" src="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=9&text=' + ttsText + '"                              type="audio/mpeg">';
      var eee = '<embed id="tts_embed_id" height="0" width="0" src="">';
      var au2 = '</audio>';
      ttsDiv.innerHTML = au1 + sss + eee + au2;

      ttsAudio = document.getElementById('tts_autio_id');

      ttsAudio.play();  
      alert(1)
  }
})
