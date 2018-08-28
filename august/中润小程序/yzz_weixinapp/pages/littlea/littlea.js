// pages/littlea/littlea.js
//获取应用实例 
var app = getApp();
var UTIL = require('../../utils/util.js');
var GUID = require('../../utils/GUID.js');
var NLI = require('../../utils/NLI.js');
var md5 = require('../../utils/MD5.js');
// var WXBizDataCrypt = require('../../utils/WXBizDataCrypt.js');
var json = {};
const appkey = 'wx00c96ec6fcfd168f'
const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
// wx5687b6dd46979010
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
var timestamp = Date.parse(new Date()) / 1000;//当前时间秒数
var voice = null;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputValue:"",
    j: 1,//帧动画初始图片 
    isSpeaking: false,//是否正在说话
    outputTxt: "", //输出识别结果
    isChecked_btn: false,//录音输入与文本输入切换
    value: "",//搜索结果
    hiddenLoading: true,// loading
    isChecked_img: true,//声音图标
    condition: true, //问题列表
    animation: '',//问题列表动画
    icnicList: true,//疾病显示
    voiceorwrite:true,//控制是语音录入还是文字录入
    textThinkIsShow:false,//控制联想区域显示隐藏
    loadhistoryisshow:true,//控制历史记录按钮是否显示
    maintitle: "中润普达魔系AI",//主标题
    littletitle: "24小时为您服务",//副标题
    phoneswitch:1,//电话开关
    phonenumber:"010-89561235",//电话号码
    wheel_demo: "#1ba9c8",//颜色
    thinkValue:"",//储存联想内容
    windowHeight:"",//滚动区域高度
    openId:"",//用户个人化的id
    user:{},
    //用户个人信息
    userInfo: {
      avatarUrl: "../../pics/peopleimg.png",//用户头像
      nickName: "",//用户昵称
    },
    arrayThink:[
      {
      id:"0",
      issue:"文字1"
      },
      {
        id: "1",
        issue: "文字2"
      }
    ],
    siginup:"true",//登陆框消息
    ytbt_icno_restaurant:false,//美食图标到闲聊图标
    ytbt_icno_hotel:true,
    ytbt_icno_plane:true,
    ytbt_icno_train:true,
    ytbt_icno_film:true,
    ytbt_icno_weather:true,
    ytbt_icno_chat:true,
    ytbt_tip:"主人你可以这样问我:有啥好吃的",//上面小机器人提示语
    numberstar:4,
    array:[
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
// onload方法开始
  onLoad: function (options) {
    const pageSelf = this;
    // 设置转发开始
    // wx.showshareMenu({
    //   withShareMenu: true
    // })
    // 设置转发结束
    // 获取用户地理位置开始
    wx.getLocation({
      type:'gcj02',//返回可以用于wx.openlocation的经纬度
      success:function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log('地理位置开始')
        console.log(res)
        console.log(latitude)
        console.log(longitude)
        console.log('地理位置结束')
        // wx.openLocation({
        //   latitude:latitude,
        //   longitude:longitude,
        //   scale:28
        // })
      }
    })
    // 获取用户地理位置结束
    // 计算屏幕高度
    wx.getSystemInfo({
      success: function (res) {
        let clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR;
        console.log(calc)
        pageSelf.setData({
          windowHeight: calc
        });
      }
    });
    // 判断是否授权然后把登陆框去掉
    //判断是否授权
    wx.getSetting({
      success: function (res) {
        //已授权
        // pageSelf.setData({
        //    siginup:false
        // })
      },
      //未授权
      fail: function (res) {
        pageSelf.setData({
          siginup: true
        })
      }
    })
    /**
         * 获取用户信息
         */
    wx.getUserInfo({
      success: function (res) {
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        pageSelf.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
        // 获取小程序id开始
        var user = wx.getStorageSync('user') || {};
        var userInfo = wx.getStorageSync('userInfo') || {};
        console.log(123)
        wx.login({
          success: function (res) {
            if (res.code) {
              wx.getUserInfo({
                success: function (res) {
                  var objz = {};
                  objz.avatarUrl = res.userInfo.avatarUrl;
                  objz.nickName = res.userInfo.nickName;
                  wx.setStorageSync('userInfo', objz);//存储userInfo
                }
              });
              const appkey = 'wx00c96ec6fcfd168f'
              const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
              var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo'
              console.log(res)
              wx.request({
                url: l,
                data: {
                  code:res.code
                },
                method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
                // header: {}, // 设置请求的 header  
                success: function (res) {
                  var obj = {};
                  obj.openid = res.data.openid;
                  obj.expires_in = Date.now() + res.data.expires_in;
                  console.log("打印openid开始")
                  console.log(obj.openid);
                  pageSelf.setData({
                    openId:obj.openid
                  })
                  console.log("打印openid结束")
                  wx.setStorageSync('user', obj);//存储openid  
                }
              });
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          }
        });
        //获取小程序id结束
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
    // 加载头部
    wx.request({
      url: "https://robot.moxiai.com/applets/078f83e953444764ad893ae049b1a9c2/init",
      data: {},
      header: {
        'content-type': "application/json"//默认值
      },
      success: function (res) {
        pageSelf.setData({
          maintitle: res.data.maintitle,
          littletitle: res.data.littletitle,
          phoneswitch: res.data.phoneswitch,
          phonenumber: res.data.phonenumber,
          wheel_demo: res.data.wheel_demo
        })
        // console.log(appkey)
      }
    })
    // 滚动到底部
    let query = wx.createSelectorQuery().in(this)
    query.select('.container_innerHeight').boundingClientRect((res) => {
      this.setData({
        scrollTop: res.height
      });
    }).exec()
    //历史记录传小城程序id开始
    // 获取小程序id开始
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    console.log(123)
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.getUserInfo({
            success: function (res) {
              var objz = {};
              objz.avatarUrl = res.userInfo.avatarUrl;
              objz.nickName = res.userInfo.nickName;
              wx.setStorageSync('userInfo', objz);//存储userInfo
            }
          });
          const appkey = 'wx00c96ec6fcfd168f'
          const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
          var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo';
          console.log(res)
          wx.request({
            url: l,
            data: {
              code:res.code
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            // header: {}, // 设置请求的 header  
            success: function (res) {
              var obj = {};
              obj.openid = res.data.openid;
              obj.expires_in = Date.now() + res.data.expires_in;
              console.log("打印openid开始")
              console.log(obj.openid);
              pageSelf.setData({
                openId: obj.openid
              })
              console.log("打印openid结束")
              wx.setStorageSync('user', obj);//存储openid  
              //history开始
                wx.request({
                  url: 'https://jqr.infobigdata.com/skillapplet/f52024d75d4348f38cdad3670d209c1e/wxskill',
                  data: {
                    issue: encodeURI("@历史记录"),
                    openid: pageSelf.data.openId
                  },
                  header: {
                    'content-type': 'application/json'//默认值
                  },
                  success: function (res) {
                    console.log('判断是否有历史记录开始')
                    console.log(res)
                    console.log(res.data.data)
                    console.log(typeof res.data.data)
                    console.log(pageSelf.data.openId)
                    console.log('判断是否有历史记录结束')
                    console.log(pageSelf.data.openId)
                    var result = JSON.parse(res.data.data);
                    console.log(result.historytalk);
                    console.log(result.historystat);
                    if (result.historystat == 1) {
                      pageSelf.setData({
                        loadhistoryisshow: true
                      })
                    } else {
                      pageSelf.setData({
                        loadhistoryisshow: false
                      })
                    }
                  }
                })
              //history结束
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
//获取小程序id结束
//历史记录穿小程序id结束
  },
  // onload方法结束   
  //获取小程序openid
  onLaunch: function () {
    const pageSelf = this
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    // if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
      console.log(123)
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.getUserInfo({
              success: function (res) {
                var objz = {};
                objz.avatarUrl = res.userInfo.avatarUrl;
                objz.nickName = res.userInfo.nickName;
                wx.setStorageSync('userInfo', objz);//存储userInfo
              }
            });
            const appkey = 'wx00c96ec6fcfd168f'
            const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
            var d = pageSelf.globalData;//这里存储了appid、secret、token串  
            var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo';
            console.log(res)
            console.log("12222")
            console.log(res.code)
            console.log(l)
            wx.request({
              url: l,
              data: {
                code:res.code
              },
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
              // header: {}, // 设置请求的 header  
              success: function (res) {
                var obj = {};
                obj.openid = res.data.openid;
                obj.expires_in = Date.now() + res.data.expires_in;
                console.log("打印openid开始")
                console.log(obj.openid);
                pageSelf.setData({
                  openId: obj.openid
                })
                console.log(pageSelf.data.openId)
                console.log("打印openid结束")
                wx.setStorageSync('user', obj);//存储openid  
              }
            });
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    // }
  },
  //美食酒店机票tab按钮:
  ytbt_tab1:function() {
    const selfPage = this;
    selfPage.setData({
      ytbt_icno_restaurant:false,//美食图标到闲聊图标
      ytbt_icno_hotel: true,
      ytbt_icno_plane: true,
      ytbt_icno_train: true,
      ytbt_icno_film: true,
      ytbt_icno_weather: true,
      ytbt_icno_chat: true,
      ytbt_tip: "主人你可以这样问我:有啥好吃的",
    }) 
    console.log(selfPage.data.openId)
  },
  ytbt_tab2: function () {
    const selfPage = this;
    selfPage.setData({
      ytbt_icno_restaurant:true,//美食图标到闲聊图标
      ytbt_icno_hotel: false,
      ytbt_icno_plane: true,
      ytbt_icno_train: true,
      ytbt_icno_film: true,
      ytbt_icno_weather: true,
      ytbt_icno_chat: true,
      ytbt_tip: "主人你可以这样问我:我要定制旅行",
    })
  },
  ytbt_tab3: function () {
    const selfPage = this;
    selfPage.setData({
      ytbt_icno_restaurant:true,//美食图标到闲聊图标
      ytbt_icno_hotel: true,
      ytbt_icno_plane: false,
      ytbt_icno_train: true,
      ytbt_icno_film: true,
      ytbt_icno_weather: true,
      ytbt_icno_chat: true,
      ytbt_tip: "主人你可以这样问我:我要去土耳其",
    })
  },
  ytbt_tab4: function () {
    const selfPage = this;
    selfPage.setData({
      ytbt_icno_restaurant:true,//美食图标到闲聊图标
      ytbt_icno_hotel: true,
      ytbt_icno_plane: true,
      ytbt_icno_train: false,
      ytbt_icno_film: true,
      ytbt_icno_weather: true,
      ytbt_icno_chat: true,
      ytbt_tip: "主人你可以这样问我:火车票或者我想去拉萨",
    })
  },
  ytbt_tab5: function () {
    const selfPage = this;
    selfPage.setData({
      ytbt_icno_restaurant:true,//美食图标到闲聊图标
      ytbt_icno_hotel: true,
      ytbt_icno_plane: true,
      ytbt_icno_train: true,
      ytbt_icno_film: false,
      ytbt_icno_weather: true,
      ytbt_icno_chat: true,
      ytbt_tip: "主人你可以这样问我:听音乐",
    })
  },
  ytbt_tab6: function () {
    const selfPage = this;
    selfPage.setData({
      ytbt_icno_restaurant:true,//美食图标到闲聊图标
      ytbt_icno_hotel: true,
      ytbt_icno_plane: true,
      ytbt_icno_train: true,
      ytbt_icno_film: true,
      ytbt_icno_weather:false,
      ytbt_icno_chat: true,
      ytbt_tip: "主人你可以这样问我:天气",
    })
  },
  ytbt_tab7: function () {
    const selfPage = this;
    selfPage.setData({
      ytbt_icno_restaurant:true,//美食图标到闲聊图标
      ytbt_icno_hotel: true,
      ytbt_icno_plane: true,
      ytbt_icno_train: true,
      ytbt_icno_film: true,
      ytbt_icno_weather: true,
      ytbt_icno_chat: false,
      ytbt_tip: "治咳川贝枇杷露里面加蛇胆川贝散有治疗咳嗽的作用吗？",
    })
  },
  // 点击关闭返回上一页面
  navigator_back:function() {
    wx.navigateBack()
  },
  //控制登录按钮开关
  siginuptab:function() {
    const selfPage = this;
    selfPage.setData({
      siginup:false
    })
  },
  //头像
  // onGotUserInfo:function(res) {
  //   console.log(res)
  //   console.log(res.detail)
  //   console.log(res.detail.rawData)
  //   console.log(JSON.parse(res.detail.rawData).avatarUrl)
  //   this.setData({
  //     [avatarUrl]:JSON.parse(res.detail.rawData).avatarUrl
  //   });
  // },
  onGotUserInfo: function (res) {
    wx.getUserInfo({
      success: function (res) {
        this.setData({
          [avatarUrl]: JSON.parse(res.detail.rawData).avatarUrl
        });
      },
      fail: function () {

      }
    })
  },
  // 确认键盘输入
  submitMessage:function() {
    sendmessage_pub(this);
  },
  // 文字框转语音输入
  voicetowrite:function() {
    const selfPage = this;
    selfPage.setData({
        voiceorwrite:false
    })
  },
  writetovoice:function() {
    const selfPage = this;
    selfPage.setData({
      voiceorwrite: true
    })
  },
  // 存储input输入内容
  catchMessage:function(e) {
    const selfPage = this;
    if(e.detail.value != "") {
      selfPage.setData({
        inputValue: e.detail.value
      })
    }
    // 输入内容是联想
    var value = e.detail.value;
    const requestThink = wx.request({
      url:'https://robot.moxiai.com/robot/think',
      data:{
        issue:value,
        puserId:"4"
      },
      header: {
        'content-type':"application/json"
      },
      success:function(data) {
        if (data != "") {
          if(data.data != "") {
            var thinkarr = data.data;
            for(var i = 0; i < thinkarr.length; i ++) {
              // thinkarr[i].issueOld
              thinkarr[i].issue = thinkarr[i].issue.replace(/font/g, "text");
              console.log(thinkarr[i].issue.replace(/font/g,"view"));
            } 
            // console.log(12)
            // console.log(thinkarr)
            selfPage.setData({
              arrayThink: data.data,
              textThinkIsShow: false
            })
          } else {
            selfPage.setData({
              textThinkIsShow:false
            })
          }
        } 
      }
    })
    // console.log(value)
  },
  //点击联想的文字
  thinktab:function(e) {
    const selfPage = this;
    selfPage.setData({
      thinkValue: e.target.dataset.name
    })
    var thinkContent = this.data.thinkValue;
    if (thinkContent != "") {
      var obj = {
        typeId: 0,
        message: thinkContent
      };
      var dataarray = this.data.array;
      dataarray.push(obj);
      selfPage.setData({
        array: dataarray,
        inputValue: ""
      });
    }
    //获取机器人返回的说话内容
    console.log(thinkContent)
    wx.request({
      url: 'https://robot.moxiai.com/applets/f52024d75d4348f38cdad3670d209c1e/wx',
      data: {
        issue: thinkContent
      },
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        console.log(res);
        console.log(res.data);
        console.log(res.data.data);
        var obj = {
          typeId: res.data.showType,
          message: res.data.data
        };
        var dataarray = selfPage.data.array;
        dataarray.push(obj);
        // console.log(dataarray)
        selfPage.setData({
          array: dataarray,
          textThinkIsShow: false
        });
        // 滚动到底部
        let query = wx.createSelectorQuery().in(selfPage)
        query.select('.container_innerHeight').boundingClientRect((res) => {
          selfPage.setData({
            scrollTop: res.height
          });
        }).exec()
      }
    })
    // 滚动到底部
    let query = wx.createSelectorQuery().in(this)
    query.select('.container_innerHeight').boundingClientRect((res) => {
      this.setData({
        scrollTop: res.height
      });
    }).exec()
  },
  // 点击发送
  sendMessage:function(e) {
    sendmessage_pub(this);
  },
  // 点击加载历史记录
  loadhistoryMessage:function() {
    console.log(912)
    const selfPage = this;
    //历史记录传小城程序id开始
    // 获取小程序id开始
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    console.log(123)
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.getUserInfo({
            success: function (res) {
              var objz = {};
              objz.avatarUrl = res.userInfo.avatarUrl;
              objz.nickName = res.userInfo.nickName;
              wx.setStorageSync('userInfo', objz);//存储userInfo
            }
          });
          const appkey = 'wx00c96ec6fcfd168f'
          const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
          var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo';
          console.log(res)
          wx.request({
            url: l,
            data: {
              code:res.code
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            // header: {}, // 设置请求的 header  
            success: function (res) {
              var obj = {};
              obj.openid = res.data.openid;
              obj.expires_in = Date.now() + res.data.expires_in;
              console.log("打印openid开始")
              console.log(obj.openid);
              selfPage.setData({
                openId: obj.openid
              })
              console.log("打印openid结束")
              wx.setStorageSync('user', obj);//存储openid  
              //按钮的history开始
              wx.request({
                url: 'https://jqr.infobigdata.com/skillapplet/f52024d75d4348f38cdad3670d209c1e/wxskill',
                data: {
                  issue: encodeURI("@历史记录"),
                  openid: selfPage.data.openId
                },
                header: {
                  'content-type': 'application/json'//默认值
                },
                success: function (res) {
                  console.log(914)
                  console.log(res)
                  var result = JSON.parse(res.data.data);
                  console.log(result.historytalk);
                  if (result.historystat == 1) {
                    for (var i = 0; i < result.historytalk.length; i++) {
                      var objserver = {
                        typeId: -1,
                        message: result.historytalk[result.historytalk.length - 1 - i].server
                      }
                      var dataarray = selfPage.data.array;
                      dataarray.unshift(objserver);
                      var objperson = {
                        typeId: 0,
                        message: result.historytalk[result.historytalk.length - 1 - i].client
                      }
                      dataarray.unshift(objperson);
                    }
                    selfPage.setData({
                      loadhistoryisshow: false
                    })
                  } else {
                    selfPage.setData({
                      loadhistoryisshow: true
                    })
                  }
                  // console.log(dataarray)
                  selfPage.setData({
                    array: dataarray,
                    textThinkIsShow: false
                  });
                  // 滚动到底部
                  let query = wx.createSelectorQuery().in(selfPage)
                  query.select('.container_innerHeight').boundingClientRect((res) => {
                    selfPage.setData({
                      scrollTop: res.height
                    });
                  }).exec()
                }
              })
              // 滚动到底部
              let query = wx.createSelectorQuery().in(this)
              query.select('.container_innerHeight').boundingClientRect((res) => {
                this.setData({
                  scrollTop: res.height
                });
              }).exec()

              //按钮的history结束
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
//获取小程序id结束
//历史记录穿小程序id结束
    // 滚动到底部
    let query = wx.createSelectorQuery().in(this)
    query.select('.container_innerHeight').boundingClientRect((res) => {
      this.setData({
        scrollTop: res.height
      });
    }).exec()
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
        })
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
    wx.stopRecord();
    var _this = this;
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
  // 问题列表搜索
  // clickMe: function (e) {
  //   var id = e.currentTarget.id, array = this.data.array;
  //   for (var i = 0, len = array.length; i < len; ++i) {
  //     if (array[i].id == id) {
  //       search(array[i].message, 1)
  //       //收回面板
  //       this.animation.translate(wx.getSystemInfoSync().windowWidth).step({ duration: 600 })
  //       this.setData({
  //         animation: this.animation.export()
  //       })
  //       this.setData({
  //         condition: true,
  //       });
  //     }
  //   }
  // },
  //朗读声音暂停
  notried: function () {
    if (this.data.isChecked_img && ner != null) {
      this.setData({
        isChecked_img: false,
      });
      ner.stop()
    }
  },
  //打电话
  tel: function() {
    var phonenumber = this.data.phonenumber;
    wx.makePhoneCall({
      phoneNumber: phonenumber
    })
  }
})
//上传录音文件到接口，处理语音识别和语义，结果输出到界面
function processFileUploadForAsr(filePath, _this) {
  // const selfPage = this;
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
      };
      var jsonData = JSON.parse(resData);
      if (jsonData.code === '1') {
        console.log("0313")
        console.log(jsonData.dataInfo)
        // 把人语音的内容放进页面-start
        var inputContent = jsonData.dataInfo;
          var obj = {
            typeId: 0,
            message: inputContent
          };
          var dataarray = _this.data.array;
          dataarray.push(obj);
          _this.setData({
            array: dataarray,
            inputValue: ""
          });
        // 把人语音的内容放进页面 - end
          // 语音录入机器人回答开始
        // 点击发送
        // 获取小程序id开始(语音发送事件板块)
        var user = wx.getStorageSync('user') || {};
        var userInfo = wx.getStorageSync('userInfo') || {};
        console.log(123)
        wx.login({
          success: function (res) {
            if (res.code) {
              wx.getUserInfo({
                success: function (res) {
                  var objz = {};
                  objz.avatarUrl = res.userInfo.avatarUrl;
                  objz.nickName = res.userInfo.nickName;
                  wx.setStorageSync('userInfo', objz);//存储userInfo
                }
              });
              const appkey = 'wx00c96ec6fcfd168f'
              const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
              var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo';
              console.log(res)
              wx.request({
                url: l,
                data: {
                  code:res.code
                },
                method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
                // header: {}, // 设置请求的 header  
                success: function (res) {
                  var obj = {};
                  obj.openid = res.data.openid;
                  obj.expires_in = Date.now() + res.data.expires_in;
                  console.log("打印openid开始")
                  console.log(obj.openid);
                  _this.setData({
                    openId: obj.openid
                  })
                  console.log("打印openid结束")
                  wx.setStorageSync('user', obj);//存储openid  
                  //点击发送事件开始
                  wx.request({
                    url: 'https://jqr.infobigdata.com/skillapplet/f52024d75d4348f38cdad3670d209c1e/wxskill',
                    data: {
                      issue: encodeURI(inputContent),
                      openid: _this.data.openId
                    },
                    header: {
                      'content-type': 'application/json;charset=utf-8'//默认值
                    },
                    success: function (res) {
                      console.log(res);
                      console.log(res.data);
                      console.log(res.data.data);
                      // 机器人说话朗读
                      speckText(res.data.data)
                      var obj = {
                        typeId: res.data.showType,
                        message: res.data.data
                      };
                      var dataarray = _this.data.array;
                      dataarray.push(obj);
                      _this.setData({
                        array: dataarray
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
                  //点击发送事件结束
                }
              });
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          }
        });
   //获取小程序id结束(语音发送事件板块)
        // 跳转到分析结果页面
        if (jsonData.dataInfo != '') {
          // search(jsonData.dataInfo, 0)
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
  if (str.length > 510) {//文字超限处理
    voice = str.substring(510, str.length);
    str = str.substring(0, 510);
    var voice = "https://tts.baidu.com/text2audio?idx=1&tex=" + encodeURI(voice) + "&cuid=baidu_speech_demo&cod=2&lan=zh&ctp=1&pdt=1&spd=5&vol=5&pit=5&per=4";
  }
  var url = "https://tts.baidu.com/text2audio?idx=1&tex=" + encodeURI(str) + "&cuid=baidu_speech_demo&cod=2&lan=zh&ctp=1&pdt=1&spd=5&vol=5&pit=5&per=4";
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
    if (voice != null) {
      innerAudioContext.src = voice;
      voice = null;
    };

  })
}
//搜索接口
// function search(str, level) {
//   pageSelf.setData({
//     hiddenLoading: false,
//   });
//   wx.request({
//     url: 'https://jk.infobigdata.com/ask',
//     data: {
//       str: str,
//       mode: level,
//     },
//     header: {
//       'content-type': 'application/json' // 默认值
//     },
//     method: "POST",
//     success: function (res) {
//       console.log(res.data)
//       console.log(res.data.result)
//       if (res.data.result) {
//         pageSelf.setData({
//           isChecked_img: true,
//         });
//         if (!pageSelf.data.condition) {
//           //平移收回
//           pageSelf.animation.translate(wx.getSystemInfoSync().windowWidth).step({ duration: 600 })
//           pageSelf.setData({
//             //输出动画
//             animation: pageSelf.animation.export()
//           });
//           pageSelf.setData({
//             condition: true,
//           });
//         }
//         pageSelf.setData({
//           outputTxt: res.data.result,
//         });
//         // speckText(res.data.result)
//       } else {
//         if (ner != null) {
//           pageSelf.setData({
//             isChecked_img: false,
//           });
//           ner.stop()
//         }
//         // wx.showToast({
//         //   title: '暂时没有您想要的数据！',
//         //   icon: 'none',
//         //   duration: 2000
//         // })
//       }
//     }
//   })
//   pageSelf.setData({
//     hiddenLoading: true,
//   });
// }
// 发送事件封装
function sendmessage_pub(_this) {
  const selfPage = _this;
  var inputContent = _this.data.inputValue;
  if (inputContent != "") {
    var obj = {
      typeId: 0,
      message: inputContent
    };
    var dataarray = _this.data.array;
    dataarray.push(obj);
    // console.log(dataarray)
    selfPage.setData({
      array: dataarray,
      inputValue: ""
    });
  }
  // 获取小程序id开始(发送事件板块)
  var user = wx.getStorageSync('user') || {};
  var userInfo = wx.getStorageSync('userInfo') || {};
  console.log(123)
  wx.login({
    success: function (res) {
      if (res.code) {
        wx.getUserInfo({
          success: function (res) {
            var objz = {};
            objz.avatarUrl = res.userInfo.avatarUrl;
            objz.nickName = res.userInfo.nickName;
            wx.setStorageSync('userInfo', objz);//存储userInfo
          }
        });
        const appkey = 'wx00c96ec6fcfd168f'
        const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
        var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo'
        console.log(res)
        wx.request({
          url: l,
          data: {
            code:res.code
          },
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
          // header: {}, // 设置请求的 header  
          success: function (res) {
            var obj = {};
            obj.openid = res.data.openid;
            obj.expires_in = Date.now() + res.data.expires_in;
            console.log("打印openid开始")
            console.log(obj.openid);
            selfPage.setData({
              openId: obj.openid
            })
            console.log("打印openid结束")
            wx.setStorageSync('user', obj);//存储openid  
            //点击发送事件开始
            wx.request({
              url: 'https://jqr.infobigdata.com/skillapplet/f52024d75d4348f38cdad3670d209c1e/wxskill',
              data: {
                issue: encodeURI(inputContent),
                openid: selfPage.data.openId
              },
              header: {
                'content-type': 'application/json'//默认值
              },
              success: function (res) {
                console.log("点击发送事件开始")
                var obj = {
                  typeId: res.data.showType,
                  message: res.data.data
                };
                var dataarray = selfPage.data.array;
                dataarray.push(obj);
                selfPage.setData({
                  array: dataarray,
                  textThinkIsShow: false
                });
                // 滚动到底部
                let query = wx.createSelectorQuery().in(selfPage)
                query.select('.container_innerHeight').boundingClientRect((res) => {
                  selfPage.setData({
                    scrollTop: res.height
                  });
                }).exec()
              }
            })
            //点击发送事件结束
          }
        });
      } else {
        console.log('获取用户登录态失败！' + res.errMsg)
      }
    }
  });
   //获取小程序id结束(发送事件板块)
  // 滚动到底部
  let query = wx.createSelectorQuery().in(_this)
  query.select('.container_innerHeight').boundingClientRect((res) => {
    _this.setData({
      scrollTop: res.height
    });
  }).exec()
}
//获取用户id
function getId() {
    /**
        * 获取用户信息
        */
    // 获取小程序id开始
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    console.log(123)
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.getUserInfo({
            success: function (res) {
              var objz = {};
              objz.avatarUrl = res.userInfo.avatarUrl;
              objz.nickName = res.userInfo.nickName;
              wx.setStorageSync('userInfo', objz);//存储userInfo
            }
          });
          const appkey = 'wx00c96ec6fcfd168f'
          const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
          var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo'
          console.log(res)
          wx.request({
            url: l,
            data: {
              code:res.code
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            // header: {}, // 设置请求的 header  
            success: function (res) {
              var obj = {};
              obj.openid = res.data.openid;
              obj.expires_in = Date.now() + res.data.expires_in;
              console.log("打印openid开始")
              console.log(obj.openid);
              pageSelf.setData({
                openId: obj.openid
              })
              console.log("打印openid结束")
              wx.setStorageSync('user', obj);//存储openid  
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
   //获取小程序id结束
}
