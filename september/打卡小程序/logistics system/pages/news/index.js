// pages/news/index.js
//微信小程序新录音接口，录出来的是aac或者mp3，这里要录成mp3
var kkn = 0, kktimer = null;//语音动画计时用的
const mp3Recorder = wx.getRecorderManager()
const mp3RecoderOptions = {
    duration: 60000,
    sampleRate: 16000,
    numberOfChannels: 1,
    encodeBitRate: 48000,
    format: 'mp3',
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
      inputValue: "",//文字输入数据
      isChecked_btn: false,//录音输入与文本输入切换
      isSpeaking: false,//是否正在说话
      yuyin: '按住说话',//是否正在说话切换
      fenzhong:'00',//计时器分
      miaozhong:'00',//计时器秒
      isSureVoiceShow: true,//显示计时器
      isCancleVoiceShow: true//取消计时器
  },
    //文字、语音状态切换
    Singleclick: function () {
        if (this.data.isChecked_btn) {
            this.setData({
                isChecked_btn: false
            })
        } else {
            this.setData({
                isChecked_btn: true
            })
        }
    },
    //文字输入数据存储
    listenerPhoneInput: function (e) {
        this.data.inputValue = e.detail.value;
    },
    search_text: function () {
        search(this.data.inputValue);
    },
    // 以下是调用新接口实现的录音，录出来的是 mp3
    touchdown: function () {
        // speaking(_this);麦克动画
        const selfPage = this; 
        this.setData({
            isSpeaking: true,
            yuyin:"松开发送"
        })
        mp3Recorder.start(mp3RecoderOptions);
        // 秒表计时开始
        clearInterval(kktimer);
        kktimer = setInterval(function() {
          kkn ++;
          var m = parseInt(kkn/60);
          var s = parseInt(kkn%60);
          selfPage.setData({
            fenzhong: toDub(m),
            miaozhong: toDub(s),
            isSureVoiceShow: false,
            isCancleVoiceShow: true
          })
        },1000)
        // 秒表计时结束
    },
    touchmove:function() {
      this.setData({
        isSureVoiceShow:true,
        isCancleVoiceShow:false
      })
    },
    touchup: function () {
        kkn =0;
        clearInterval(kktimer);
        this.setData({
          isSpeaking: false,
          yuyin: "按住说话",
          isSureVoiceShow:true,
          isCancleVoiceShow:true
        })
        mp3Recorder.stop();
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const _this = this;
         wx.setNavigationBarTitle({
           title: '张德贵',
     })  //更改顶部名称
      mp3Recorder.onStop((res) => {

          processFileUploadForAsr(res, this);
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


// 发送事件封装
function submit_news() {
    var inputContent = _this.data.inputValue;
    if (inputContent != "") {
        var obj = {
            typeId: 0,
            message: inputContent
        };
        var dataarray = _this.data.array;
        dataarray.push(obj);
        // console.log(dataarray)
        _this.setData({
            array: dataarray,
            inputValue: ""
        });
    }
    //获取机器人返回的说话内容
    console.log(inputContent)
    wx.request({
        // url: 'https://192.168.1.138:8080/applets/078f83e953444764ad893ae049b1a9c2/init',
        // url: 'https://robot.moxiai.com/applets/078f83e953444764ad893ae049b1a9c2/init',
        url: 'https://jk.infobigdata.com/baby',
        data: {
            s: encodeURI(inputContent)
        },
        header: {
            'content-type': 'application/json'//默认值

        },
        method: "POST",
        success: function (res) {
            console.log(res);
            console.log(res.data);
            console.log(res.data.res);
            var obj = {
                typeId: -1,
                message: res.data.res
            };
            var dataarray = _this.data.array;
            dataarray.push(obj);
            _this.setData({
                array: dataarray,
                textThinkIsShow: false
            });
            // 滚动到底部
            let query = wx.createSelectorQuery().in(_this)
            query.select('.container_innerHeight').boundingClientRect((res) => {
                _this.setData({
                    scrollTop: res.height
                });
            }).exec()
        }
    })
    // 滚动到底部
    let query = wx.createSelectorQuery().in(_this)
    query.select('.container_innerHeight').boundingClientRect((res) => {
        _this.setData({
            scrollTop: res.height
        });
    }).exec()
}

//上传录音文件到接口，处理语音识别和语义，结果输出到界面
function processFileUploadForAsr(filePath, _this) {
    console.log(filePath)
    // 文件上传到服务器
    wx.uploadFile({
        url: 'https://ssl.infobigdata.com/weixin/upload',
        filePath: filePath,
        name: 'file',
        formData: {
            'user': 'test'
        },
        success: function (res) {
            var resData = res.data;
            if (resData == '') {
                wx.showToast({
                    title: '语音太短请重试~',
                    icon: 'none',
                    duration: 1000
                })
            }
            var jsonData = JSON.parse(resData);
            if (jsonData.code === '1') {
                console.log(jsonData.dataInfo)
                // 跳转到分析结果页面
                if (jsonData.dataInfo != '') {
                    search(jsonData.dataInfo, 0)
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
}
// 语音计时器开始
//补零
function toDub(n) {
  return n < 10 ? "0" + n : "" + n;
}
// 语音计时器结束