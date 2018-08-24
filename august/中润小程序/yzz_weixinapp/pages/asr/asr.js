//获取应用实例 
var app = getApp()
var UTIL = require('../../utils/util.js');
var GUID = require('../../utils/GUID.js');
var NLI = require('../../utils/NLI.js');
var md5 = require('../../utils/MD5.js');
var json = {};
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
}
//弹幕定时器
var timer;
var ner = null;
var pageSelf = undefined;
var timestamp = Date.parse(new Date())/1000;//当前时间秒数
var voice = null;
// var doommList = [];
// class Doomm {
//     constructor() {
//         this.text = UTIL.getRandomItem(app.globalData.corpus);
//         this.top = Math.ceil(Math.random() * 40);
//         this.time = Math.ceil(Math.random() * 8 + 6);
//         this.color = getRandomColor();
//         this.display = true;
//         let that = this;
//         setTimeout(function () {
//             doommList.splice(doommList.indexOf(that), 1);
//             doommList.push(new Doomm());

//             pageSelf.setData({
//                 doommData: doommList
//             })
//         }, this.time * 1000)
//     }
// }
// function getRandomColor() {
//     let rgb = []
//     for (let i = 0; i < 3; ++i) {
//         let color = Math.floor(Math.random() * 256).toString(16)
//         color = color.length == 1 ? '0' + color : color
//         rgb.push(color)
//     }
//     return '#' + rgb.join('')
// }
Page({
    data: {
        j: 1,//帧动画初始图片 
        isSpeaking: false,//是否正在说话
        outputTxt: "", //输出识别结果
        isChecked_btn: false,//录音输入与文本输入切换
        value: "",//搜索结果
        hiddenLoading: true,// loading
        isChecked_img: true,//声音图标
        condition: true, //问题列表
        animation: '',//问题列表动画
        array: [],//刷出疾病列表
        icnicList: true,//疾病显示
        userInfo:{
          avatarUrl: "",//用户头像
          nickName: ""//用户昵称
        }
        // doommData: []
    },
    // initDoomm: function () {
    //     doommList.push(new Doomm());
    //     doommList.push(new Doomm());
    //     doommList.push(new Doomm());
    //     this.setData({
    //         doommData: doommList
    //     })
    // },
    onLoad: function () {
        pageSelf = this;
        // 获取用户信息开始
        wx.getUserInfo({
          success:function(res) {
            console.log(res);
            var avatarUrl = 'userInfo.avatarUrl';
            var nickName = 'userInfo.nickName';
            pageSelf.setData({
              [avatarUrl]:res.userInfo.avatarUrl,
              [nickName]:res.userInfo.nickName
            })
          }
        })
        // 获取用户信息结束
        wx.showModal({
            title: '提示',
            showCancel: false,
            confirmText:'我知道了',
            content: '本系统信息仅供参考，不能作为诊断及医疗的依据；请谨慎参阅，本系统不承担由此引起的法律责任。\r\n本系统敬告网民：身体若有不适，请及时到医院就诊。',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
        //问题列表数据请求
        wx.request({
            url: 'https://jk.infobigdata.com/que', 
            data: {
                word: ""
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: "POST",
            success: function (res) {
                console.log(res.data)
                json = res.data;
                //渲染问题列表
                pageSelf.setData({
                    array: json.key,
                });
            }
            // , fail: function (res) {
            //     console.log(111)
            //     //渲染问题列表
            //     pageSelf.setData({
            //         array: { id: 0, message:"暂无数据！！！"},
            //     });
            // }
        })
        // this.initDoomm();
        //onLoad中为录音接口注册两个回调函数，主要是onStop，拿到录音mp3文件的文件名（不用在意文件后辍是.dat还是.mp3，后辍不决定音频格式）
        mp3Recorder.onStart(() => {
            UTIL.log('mp3Recorder.onStart()...')
        })
        mp3Recorder.onStop((res) => {
            UTIL.log('mp3Recorder.onStop() ' + res)
            const { tempFilePath } = res
            UTIL.log('mp3Recorder.onStop() tempFilePath:' + tempFilePath)
            processFileUploadForAsr(tempFilePath, this);
        })
    },
    onReady: function () {
        // 页面渲染完成
        //实例化一个动画
        this.animation = wx.createAnimation({
            // 动画持续时间，单位ms，默认值 400
            duration: 300,
            //动画方式
            timingFunction: 'ease',
            // 延迟多长时间开始
            delay: 100,
            transformOrigin: '50% 50%',
            success: function (res) {
                console.log(res)
            }
        })
    },
    //问题列表 
    rotate: function () {
        if (this.data.condition) {

            //平移展示
            this.animation.translate(-wx.getSystemInfoSync().windowWidth).step({ duration: 600 })
            this.setData({
                //输出动画
                animation: this.animation.export()
            })
            this.setData({
                condition: false,
            });

        } else {
            //平移收回
            this.animation.translate(wx.getSystemInfoSync().windowWidth).step({ duration: 600 })
            this.setData({
                //输出动画
                animation: this.animation.export()
            });
            this.setData({
                condition: true,
            });
        }
    },
    // 以下是调用新接口实现的录音，录出来的是 mp3
    touchdown: function () {
        UTIL.log("mp3Recorder.start with" + mp3RecoderOptions)
        var _this = this;
        speaking(_this);
        this.setData({
            isSpeaking: true
        })
        mp3Recorder.start(mp3RecoderOptions);
    },
    touchup: function () {
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
    // 以下是调用老接口实现的录音，录出来的是 silk_v3
    //手指按下 
    touchdown_silk: function () {
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
            processFileUploadForAsr(_this.data.recordPath, _this);
        }, 1000)
    },
    //文字、语音切换
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
        this.data.value = e.detail.value;
    },
    search_text: function () {
        search(this.data.value,0);
    },
    // 问题列表搜索
    clickMe: function (e) {
        var id = e.currentTarget.id, array = this.data.array;
        for (var i = 0, len = array.length; i < len; ++i) {
            if (array[i].id == id) {

                search(array[i].message,1)
                //收回面板
                this.animation.translate(wx.getSystemInfoSync().windowWidth).step({ duration: 600 })
                this.setData({
                    animation: this.animation.export()
                })
                this.setData({
                    condition: true,
                });
            }
        }
    },
    //朗读声音暂停
    notried: function () {
        if (this.data.isChecked_img && ner != null) {
            this.setData({
                isChecked_img: false,
            });
            ner.stop()
        } 
    },
})
//上传录音文件到接口，处理语音识别和语义，结果输出到界面
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
                console.log(jsonData.dataInfo)
                // 跳转到分析结果页面
                if (jsonData.dataInfo != '') {
                    search(jsonData.dataInfo,0)
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
function speaking(_this) {
    //话筒帧动画 
    var i = 1;
    _this.timer = setInterval(function () {
        i++;
        i = i % 5;
        _this.setData({
            j: i
        })
    }, 200);
}
//搜索结果文字朗读
function speckText(str) {
    if (ner != null) {
        ner.stop();
    }
    if (str.length>510){//文字超限处理
        voice = str.substring(510,str.length);
         str=str.substring(0, 510);
         var voice = "http://tts.baidu.com/text2audio?idx=1&tex=" + encodeURI(voice) + "&cuid=baidu_speech_demo&cod=2&lan=zh&ctp=1&pdt=1&spd=5&vol=5&pit=5&per=0";

    }
    var url = "http://tts.baidu.com/text2audio?idx=1&tex=" + encodeURI(str) + "&cuid=baidu_speech_demo&cod=2&lan=zh&ctp=1&pdt=1&spd=5&vol=5&pit=5&per=0";
    const innerAudioContext = wx.createInnerAudioContext()
    ner = innerAudioContext
    innerAudioContext.autoplay = true
    innerAudioContext.src = url
    innerAudioContext.onPlay(() => {
        console.log(url)
        console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
        
        console.log(res.errMsg)
        console.log(res.errCode)
    })
    innerAudioContext.onStop((res) => {
        console.log("播放停止了")
        if (voice != null) {
            voice = null;
        };
    })
    innerAudioContext.onEnded((res) => {
        console.log("自然播放完毕")
        if (voice!=null){
            innerAudioContext.src = voice;
            voice = null;
        };
        
    })
}
//搜索接口
function search(str,level) {

    pageSelf.setData({
        hiddenLoading: false,
    });
    wx.request({
        url: 'https://jk.infobigdata.com/ask',
        data: {
            str: str,
            mode: level,
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        method: "POST",
        success: function (res) {
            console.log(res.data)
            console.log(res.data.result)
            if (res.data.result) {
                pageSelf.setData({
                    isChecked_img: true,
                });
                if (!pageSelf.data.condition) {
                    //平移收回
                    pageSelf.animation.translate(wx.getSystemInfoSync().windowWidth).step({ duration: 600 })
                    pageSelf.setData({
                        //输出动画
                        animation: pageSelf.animation.export()
                    });
                    pageSelf.setData({
                        condition: true,
                    });
                }
                pageSelf.setData({
                    outputTxt: res.data.result,
                });
                speckText(res.data.result)
            } else {
                if (ner != null) {
                    pageSelf.setData({
                        isChecked_img: false,
                    });
                    ner.stop()
                }
                wx.showToast({
                    title: '暂时没有您想要的数据！',
                    icon: 'none',
                    duration: 2000
                })
            }
        }
    })
    pageSelf.setData({
        hiddenLoading: true,
    });
}



// //讯飞文字转语音调试接口
// var apiKey = "1135b8ca5caff7a1408d007a10b4b67a";
// var curTime = timestamp.toString();
// var param = "eyJhdWYiOiAiYXVkaW8vTDE2O3JhdGU9MTYwMDAiLCJhdWUiOiAicmF3Iiwidm9pY2VfbmFtZSI6ICJ4aWFveWFuIiwic3BlZWQiOiAiNTAiLCJ2b2x1bWUiOiAiNTAiLCJwaXRjaCI6ICI1MCIsImVuZ2luZV90eXBlIjogImludHA2NSIsInRleHRfdHlwZSI6ICJ0ZXh0In0=";
// console.log(apiKey + curTime + param)
// var checkSum = md5.md5(apiKey + curTime + param);

// wx.request({
//     url: 'http://api.xfyun.cn/v1/service/v1/tts',
//     data: {
//         text: '支气管'
//     },
//     header:  {
//         'X-Appid':"5ac9cc84",
//         'X-CurTime': curTime,
//         'X-Param': param,
//         'X-checkSum': checkSum,
//         'content-type': 'application/x-www-form-urlencoded' // 默认值
//     },
//     method: "POST",
//     success: function (res) {
//         console.log(res)
//         console.log(res.data.result)

//     }
// })





//语义智能识别接口调试
// wx.request({
//     url: 'https://tjk.infobigdata.com/scr',
//     data: {
//         str: "我爱北京天安门"
//     },
//     header: {
//         'content-type': 'application/json' // 默认值
//     },
//     method: "POST",
//     success: function (res) {
//         console.log(res.data)
//         console.log(res.data.result)

//     }
// })