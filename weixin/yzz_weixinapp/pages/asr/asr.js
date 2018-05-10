/**
 * 作者：happycxz
 * 最后更新时间：2017.11.09
 * 源码分享链接：http://www.happycxz.com/m/?p=125
 *
 * https的silk语音识别API（专供微信小程序调用）：https://api.happycxz.com/wxapp/silk2asr
 * https的mp3语音识别API（专供微信小程序调用）：https://api.happycxz.com/wxapp/mp32asr
 * 该API服务搭建全过程解析及源码分享贴：http://blog.csdn.net/happycxz/article/details/78016299
 * 需要使用此API请联系作者QQ：404499164
 * 
 * 遵循开放、分享、自由、免费的精神，把开源坚持到底
 */

//获取应用实例 
var app = getApp()

var UTIL = require('../../utils/util.js');
var GUID = require('../../utils/GUID.js');
var NLI = require('../../utils/NLI.js');

const appkey = require('../../config').appkey
const appsecret = require('../../config').appsecret

//微信小程序新录音接口，录出来的是aac或者mp3，这里要录成mp3
const mp3Recorder = wx.getRecorderManager()
const mp3RecoderOptions = {
  duration: 60000,
  sampleRate: 16000,
  numberOfChannels: 1,
  encodeBitRate: 48000,
  format: 'mp3',
  //frameSize: 50
}

//弹幕定时器
var timer;
var ner;
var pageSelf = undefined;

var doommList = [];
class Doomm {
  constructor() {
    this.text = UTIL.getRandomItem(app.globalData.corpus);
    this.top = Math.ceil(Math.random() * 40);
    this.time = Math.ceil(Math.random() * 8 + 6);
    this.color = getRandomColor();
    this.display = true;
    let that = this;
    setTimeout(function () {
      doommList.splice(doommList.indexOf(that), 1);
      doommList.push(new Doomm());

      pageSelf.setData({
        doommData: doommList
      })
    }, this.time * 1000)
  }
}
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data: {
    j: 1,//帧动画初始图片 
    isSpeaking: false,//是否正在说话
    outputTxt: "", //输出识别结果
    isChecked_btn: false,//录音输入与文本输入切换
    value:"",//搜索结果
    hiddenLoading: true,// loading
    clickMeopen0: true,//控制疾病高亮显示
    clickMeopen: true,
    isChecked_img: true,//声音图标
    textboxtanselecthide:false,//猜你喜欢
    wantyoulike:true,//猜你喜欢旋转按钮
    wantyoulikeleft:false,//猜你喜欢
    array: [{
        id: 0,
        message: '支气管炎',
        open: true
    }, {
        id: 1,
        message: '高血压',
        open: false
    }, {
        id: 2,
        message: '痛风',
        open: false
    }, {
        id: 3,
        message: '关节炎',
        open: false
    }, {
        id: 4,
        message: '肝炎',
        open: false
    }, {
        id: 5,
        message: '甲亢',
        open: false
    }],//刷出疾病列表
    doommData: []
  },
  // 猜你喜欢
  clickWantSearch:function () {
      if (this.data.textboxtanselecthide) {
        this.setData({
          textboxtanselecthide: false
        })
      } else {
        this.setData({
          textboxtanselecthide: true
        })
      }
  },
  wantyoulike:function() {
    if (!this.data.textboxtanselecthide) {
        if(this.data.wantyoulike) {
          this.setData({
            wantyoulike:false
          })
          this.setData({
            wantyoulikeleft:true
          })
        } else {
          this.setData({
            wantyoulike:true
          })
          this.setData({
            wantyoulikeleft: false
          })
        }
    } else {
        this.setData({
          textboxtanselecthide: false
        })
    }
  },

  initDoomm: function () {
    doommList.push(new Doomm());
    doommList.push(new Doomm());
    doommList.push(new Doomm());
    this.setData({
      doommData: doommList
    })
  },

  onLoad: function () {
     
    pageSelf = this;
    this.initDoomm();

    //onLoad中为录音接口注册两个回调函数，主要是onStop，拿到录音mp3文件的文件名（不用在意文件后辍是.dat还是.mp3，后辍不决定音频格式）
    mp3Recorder.onStart(() => {
      UTIL.log('mp3Recorder.onStart()...')
    })
    mp3Recorder.onStop((res) => {
      UTIL.log('mp3Recorder.onStop() ' + res)
      const { tempFilePath } = res
    //   var urls = "https://api.happycxz.com/wxapp/mp32asr";
      UTIL.log('mp3Recorder.onStop() tempFilePath:' + tempFilePath)
      processFileUploadForAsr(tempFilePath, this);
    })
  },

  /////////////////////////////////////////////////////////////// 以下是调用新接口实现的录音，录出来的是 mp3
  touchdown: function () {
    //touchdown_mp3: function () {
    UTIL.log("mp3Recorder.start with" + mp3RecoderOptions)
    var _this = this;
    speaking.call(this);
    this.setData({
      isSpeaking: true
    })
    mp3Recorder.start(mp3RecoderOptions);
  },
  touchup: function () {
    //touchup_mp3: function () {
    UTIL.log("mp3Recorder.stop")
    this.setData({
      isSpeaking: false,
    })
    mp3Recorder.stop();
  },


  //切换到老版本
  turnToOld: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },

  /////////////////////////////////////////////////////////////// 以下是调用老接口实现的录音，录出来的是 silk_v3
  //手指按下 
  touchdown_silk: function () {
  //touchdown: function () {
    UTIL.log("手指按下了... new date : " + new Date)
    var _this = this;
    speaking.call(this);
    this.setData({
      isSpeaking: true
    })
    //开始录音 
    wx.startRecord({
      success: function (res) {
        //临时路径,下次进入小程序时无法正常使用
        var tempFilePath = res.tempFilePath;
        UTIL.log('record SUCCESS file path:' + tempFilePath)
        _this.setData({
          recordPath: tempFilePath
        });
      },
      fail: function (res) {
        //录音失败 
        wx.showModal({
          title: '提示',
          content: '录音的姿势不对!',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              UTIL.log('用户点击确定')
              return
            }
          }
        })
      }
    })
  },
  //手指抬起 
  touchup_silk: function () {
  //touchup: function () {
    UTIL.log("手指抬起了...")
    this.setData({
      isSpeaking: false,
    })
    clearInterval(this.timer)
    wx.stopRecord()
    var _this = this
    setTimeout(function () {
      var urls = "https://api.happycxz.com/wxapp/silk2asr/";
      UTIL.log(_this.data.recordPath);
      processFileUploadForAsr(urls, _this.data.recordPath, _this);
    }, 1000)
  },
  //点击切换成文字输入
  Singleclick:function(){
      if (this.data.isChecked_btn){
          this.setData({
              isChecked_btn: false
          }) 
      }else{
           this.setData({
          isChecked_btn: true
      }) 
      }
     },
   //文字输入
  listenerPhoneInput: function (e) {
      this.data.value = e.detail.value;
      console.log(this.data.value)
  },
    search_text : function(){
        search(this, this.data.value);
    },
    /* 新增人工智能上部区域内容 start*/
    // 点击事件多选疾病
    // clickMe: function (e) {
    //     var id = e.currentTarget.id, array = this.data.array;
    //     for (var i = 0, len = array.length; i < len; ++i) {
    //         if (array[i].id == id) {
    //             array[i].open = !array[i].open
    //         }
    //     }
    //     this.setData({
    //         array: array
    //     });
    // },
   /* 新增人工智能上部区域内容 end*/
   //声音暂停
    notried: function(){
        if (this.data.isChecked_img){
            this.setData({
                isChecked_img: false,
            });
            ner.stop()
        }else{
            this.setData({
                isChecked_img: true,
            });
        }
    }
})

//上传录音文件到 api.happycxz.com 接口，处理语音识别和语义，结果输出到界面
function processFileUploadForAsr(filePath, _this) {
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
                console.info(jsonData.dataInfo);
                // 跳转到分析结果页面
                if (jsonData.dataInfo != '') {
                    // wx.navigateTo({
                    //     url: '../word/Word-list?dataInfo=' + jsonData.dataInfo
                    // })
                    console.log(jsonData.dataInfo)
     _this.setData({
          hiddenLoading: false,
      });
      wx.request({
          url: 'https://tjk.infobigdata.com/ask',
          data: {
              str: jsonData.dataInfo

          },
          header: {
              'content-type': 'application/json' // 默认值
          },
          method: "POST",
          success: function (res) {
              console.log(res.data)
              console.log(res.data.result)
              if (res.data.result) {
                  _this.setData({
                      outputTxt: res.data.result,
                  });
                 
                  speckText(res.data.result)
              }


          }
      })
      _this.setData({
          hiddenLoading: true,
      });
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

function getNliFromResult(res_data) {
  var res_data_json = JSON.parse(res_data);
  var res_data_result_json = JSON.parse(res_data_json.result);
  return res_data_result_json.nli;
}

function getSttFromResult(res_data) {
  var res_data_json = JSON.parse(res_data);
  var res_data_result_json = JSON.parse(res_data_json.result);
  return res_data_result_json.asr.result;
}

//麦克风帧动画 
function speaking() {
  var _this = this;
  //话筒帧动画 
  var i = 1;
  this.timer = setInterval(function () {
    i++;
    i = i % 5;
    _this.setData({
      j: i
    })
  }, 200);
}
//搜索结果文字朗读

function speckText(str) {
  
    var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=" + encodeURI(str);        // baidu
    const innerAudioContext = wx.createInnerAudioContext()
    ner = innerAudioContext
    innerAudioContext.autoplay = true
    innerAudioContext.src = url
    innerAudioContext.onPlay(() => {
        console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
    })
 
}

//搜索接口函数
// search(this, '如何鉴别支气管炎');
function search(th,str){
    th.setData({
        hiddenLoading: false,
    });
    wx.request({
        url: 'https://tjk.infobigdata.com/ask', 
        data: {
            str: str

        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        method: "POST",
        success: function (res) {
            console.log(res.data)
            console.log(res.data.result)
            if (res.data.result){
                th.setData({
                    outputTxt: res.data.result,
                });
               
                speckText(res.data.result)
            }
           

        }
    })
    th.setData({
        hiddenLoading: true,
    });





    //      var re = /^[1-9]+[0-9]*]*$/；  
  
    //  if (!re.test(input.rate.value))  
    // {  
    //     alert("请输入正整数");  
    //     input.rate.focus();  
    //     return false;  
    //  } 





     
}
