// // pages/littlea/littlea.js
// //获取应用实例 
// var app = getApp();
// var UTIL = require('../../utils/util.js');
// var GUID = require('../../utils/GUID.js');
// var NLI = require('../../utils/NLI.js');
// var md5 = require('../../utils/MD5.js');
// var bmap = require('../../utils/bmapwx.js'); //百度地图搜索附近美食接口
// // var WXBizDataCrypt = require('../../utils/WXBizDataCrypt.js');
// var json = {};
// const appkey = 'wx00c96ec6fcfd168f'
// const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
// // wx5687b6dd46979010
// //微信小程序新录音接口，录出来的是aac或者mp3，这里要录成mp3
// const mp3Recorder = wx.getRecorderManager()
// const mp3RecoderOptions = {
//   duration: 60000,
//   sampleRate: 16000,
//   numberOfChannels: 1,
//   encodeBitRate: 48000,
//   format: 'mp3',
// }
// var ner = null;
// var pageSelf = undefined;
// var timestamp = Date.parse(new Date()) / 1000; //当前时间秒数
// var voice = null;
// var wxMarkerData = []; //百度搜索附近美食
// var liflagstr,
//     liflagarr;//美食的给后台的数据
// Page({
//   /**
//    * 页面的初始数据
//    */
//   data: {
//     inputValue: "",
//     j: 1, //帧动画初始图片 
//     isSpeaking: false, //是否正在说话
//     outputTxt: "", //输出识别结果
//     isChecked_btn: false, //录音输入与文本输入切换
//     value: "", //搜索结果
//     hiddenLoading: true, // loading
//     isChecked_img: true, //声音图标
//     condition: true, //问题列表
//     animation: '', //问题列表动画
//     icnicList: true, //疾病显示
//     voiceorwrite: true, //控制是语音录入还是文字录入
//     textThinkIsShow: false, //控制联想区域显示隐藏
//     loadhistoryisshow: true, //控制历史记录按钮是否显示
//     maintitle: "中润普达魔系AI", //主标题
//     littletitle: "24小时为您服务", //副标题
//     phoneswitch: 1, //电话开关
//     phonenumber: "010-89561235", //电话号码
//     wheel_demo: "#1ba9c8", //颜色
//     thinkValue: "", //储存联想内容
//     windowHeight: "", //滚动区域高度
//     openId: "", //用户个人化的id
//     user: {},
//     //用户个人信息
//     userInfo: {
//       avatarUrl: "../../pics/peopleimg.png", //用户头像
//       nickName: "", //用户昵称
//     },
//     arrayThink: [{
//         id: "0",
//         issue: "文字1"
//       },
//       {
//         id: "1",
//         issue: "文字2"
//       }
//     ],
//     siginup: "true", //登陆框消息
//     ytbt_icno_restaurant: false, //美食图标到闲聊图标
//     ytbt_icno_hotel: true,
//     ytbt_icno_plane: true,
//     ytbt_icno_train: true,
//     ytbt_icno_film: true,
//     ytbt_icno_weather: true,
//     ytbt_icno_chat: true,
//     ytbt_tip: "您可以说:附近有啥好吃的?", //上面小机器人提示语
//     numberstar: 4,
//     // isshake:true,
//     // 百度地图需要的数据开始
//     markers: [],
//     latitude: '',
//     longitude: '',
//     placeData: {},
//     // 百度地图需要的数据开始
//     deletevoice: '', //语音结束后删除音频文件
//     skillType: 0, //美食列表
//     arr: [], //美食列表中的信息
//     numberstar: '4', //美食评分
//     liflagstr:"",//美食列表传给后台数据
//     liflagarr: [],//存储附近美食列表
//     pagestwoarr:[],//,美食列表第二句存储的一个列表
//     wordtwostr:'',//第二句上面的回答
//     strvoiceshow:'1',//人说话语音让在那
//     jing1: 39.91231,
//     wei1: 116.36611,
//     array: []
//   },
//   // onready开始
//   // onready结束
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   // onload方法开始
//   onLoad: function(options) {
//     const pageSelf = this;
//     // 如果用户取消授权第二次扔弹出授权提示开始
//     console.log('授权结果')
//     // wx.openSetting({
//     //   success:(res) => {
//     //     console.log('授权结果')
//     //     console.log(res)
//     //     if (!res.authSetting["scope.userinfo"] || !res.authSetting["scope.userLocation"]) {
//     //       applyNotice()
//     //     }
//     //   }
//     // })
//     // wx.openSetting({
//     //   success: (res) => {
//     //     console.log('授权结果1')

//     //      res.authSetting = {
//     //        "scope.userInfo": true,
//     //        "scope.userLocation": true,
//     //        "scope.startRecord":true
//     //      }
//     //   }
//     // })

//     // wx.openSetting({
//     //   success: (res) => {
//     //     /*
//     //      * res.authSetting = {
//     //      *   "scope.userInfo": true,
//     //      *   "scope.userLocation": true
//     //      * }
//     //      */
//     //   }
//     // })
//     // if (!res.authSetting['scope.record']) {
//     //   //未设置录音授权
//     //   console.log("未设置录音授权");
//     //   wx.showModal({
//     //     title: '提示',
//     //     content: '您未授权录音，功能将无法使用',
//     //     showCancel: false,
//     //     success: function (res) {

//     //     },
//     // 如果用户取消授权第二次扔弹出授权提示结束
//     // //百度搜索附近美食开始
//     // // 新建百度地图对象 
//     // var BMap = new bmap.BMapWX({
//     //   ak: 'zG0qcmqsXdaWPhYxg5KHD67Q3m1ArhGV'
//     // });
//     // var fail = function (data) {
//     //   console.log(data)
//     // };
//     // var success = function (data) {
//     //   wxMarkerData = data.wxMarkerData;
//     //   console.log("探索data开始")
//     //   console.log(data)
//     //   console.log(data.originalData.array.results)
//     //   console.log("探索data结束")
//     //   pageSelf.setData({
//     //     arr: data.originalData.array.results,
//     //     markers: wxMarkerData,
//     //     latitude: wxMarkerData[0].latitude,
//     //     longitude: wxMarkerData[0].longitude
//     //   });
//     // }
//     // // 发起POI检索请求 
//     // BMap.search({
//     //   "query": '美食',
//     //   fail: fail,
//     //   success: success,
//     //   iconPath: '../../pics/marker_red.png',
//     //   iconTapPath: '../../pics/marker_red.png'
//     // });
//     // //百度搜索附近美食开始
//     // 设置转发开始
//     // wx.showshareMenu({
//     //   withShareMenu: true
//     // })
//     wx.showShareMenu({
//       // 要求小程序返回分享目标信息
//       withShareTicket: true
//     });
//     // 设置转发结束
//     // 获取用户地理位置开始
//     wx.getLocation({
//       type: 'gcj02', //返回可以用于wx.openlocation的经纬度
//       success: function(res) {
//         var latitude = res.latitude
//         var longitude = res.longitude
//         console.log('地理位置开始')
//         console.log(res)
//         console.log(latitude)
//         console.log(longitude)
//         console.log('地理位置结束')
//         // wx.openLocation({
//         //   latitude:latitude,
//         //   longitude:longitude,
//         //   scale:28
//         // })
//       }
//     })
//     // 获取用户地理位置结束
//     // 计算屏幕高度
//     wx.getSystemInfo({
//       success: function(res) {
//         let clientHeight = res.windowHeight,
//           clientWidth = res.windowWidth,
//           rpxR = 750 / clientWidth;
//         var calc = clientHeight * rpxR;
//         console.log(calc)
//         pageSelf.setData({
//           windowHeight: calc
//         });
//       }
//     });
//     // 判断是否授权然后把登陆框去掉
//     //判断是否授权
//     // wx.getSetting({
//     //   success: function(res) {
//     //     //已授权
//     //     pageSelf.setData({
//     //        siginup:false
//     //     })
//     //   },
//     //   //未授权
//     //   fail: function(res) {
//     //     pageSelf.setData({
//     //       siginup: true
//     //     })
//     //   }
//     // })
//     // scope.userInfo

//     // 获取录音功能开始
//     // wx.startRecord({
//     //   success:function(res) {

//     //   }
//     // })
//     //获取录音共结束
//     /**
//      * 获取用户信息
//      */
//     wx.getUserInfo({
//       success: function(res) {
//         var avatarUrl = 'userInfo.avatarUrl';
//         var nickName = 'userInfo.nickName';
//         pageSelf.setData({
//           [avatarUrl]: res.userInfo.avatarUrl,
//           [nickName]: res.userInfo.nickName,
//         })
//         // 获取小程序id开始
//         var user = wx.getStorageSync('user') || {};
//         var userInfo = wx.getStorageSync('userInfo') || {};
//         console.log(123)
//         wx.login({
//           success: function(res) {
//             if (res.code) {
//               wx.getUserInfo({
//                 success: function(res) {
//                   var objz = {};
//                   objz.avatarUrl = res.userInfo.avatarUrl;
//                   objz.nickName = res.userInfo.nickName;
//                   wx.setStorageSync('userInfo', objz); //存储userInfo
//                 }
//               });
//               const appkey = 'wx00c96ec6fcfd168f'
//               const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
//               var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo'
//               console.log(res)
//               wx.request({
//                 url: l,
//                 data: {
//                   code: res.code
//                 },
//                 method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
//                 // header: {}, // 设置请求的 header  
//                 success: function(res) {
//                   var obj = {};
//                   obj.openid = res.data.openid;
//                   obj.expires_in = Date.now() + res.data.expires_in;
//                   console.log("打印openid开始")
//                   console.log(obj.openid);
//                   pageSelf.setData({
//                     openId: obj.openid
//                   })
//                   console.log("打印openid结束")
//                   wx.setStorageSync('user', obj); //存储openid  
//                 }
//               });
//             } else {
//               console.log('获取用户登录态失败！' + res.errMsg)
//             }
//           }
//         });
//         //获取小程序id结束
//       }
//     })
//     //问题列表数据请求
//     wx.request({
//       url: 'https://jk.infobigdata.com/que',
//       data: {
//         word: ""
//       },
//       header: {
//         'content-type': 'application/json' // 默认值
//       },
//       method: "POST",
//       success: function(res) {
//         console.log(res.data)
//         json = res.data;
//         //渲染问题列表
//         pageSelf.setData({
//           array: json.key,
//         });
//       }
//     })
//     // this.initDoomm();
//     //onLoad中为录音接口注册两个回调函数，主要是onStop，拿到录音mp3文件的文件名（不用在意文件后辍是.dat还是.mp3，后辍不决定音频格式）
//     mp3Recorder.onStart(() => {
//       UTIL.log('mp3Recorder.onStart()...')
//     })
//     mp3Recorder.onStop((res) => {
//       UTIL.log('mp3Recorder.onStop() ' + res)
//       const {
//         tempFilePath
//       } = res
//       UTIL.log('mp3Recorder.onStop() tempFilePath:' + tempFilePath)
//       processFileUploadForAsr(tempFilePath, this);
//     })
//     // 加载头部
//     wx.request({
//       url: "https://jqr.infobigdata.com/applets/f52024d75d4348f38cdad3670d209c1e/init",
//       data: {},
//       header: {
//         'content-type': "application/json" //默认值
//       },
//       success: function(res) {
//         pageSelf.setData({
//           maintitle: res.data.maintitle,
//           littletitle: res.data.littletitle,
//           phoneswitch: res.data.phoneswitch,
//           phonenumber: res.data.phonenumber,
//           wheel_demo: res.data.wheel_demo
//         })
//         // console.log(appkey)
//       }
//     })
//     // 滚动到底部
//     let query = wx.createSelectorQuery().in(this)
//     query.select('.container_innerHeight').boundingClientRect((res) => {
//       this.setData({
//         scrollTop: res.height
//       });
//     }).exec()
//     //历史记录传小城程序id开始
//     // 获取小程序id开始
//     var user = wx.getStorageSync('user') || {};
//     var userInfo = wx.getStorageSync('userInfo') || {};
//     console.log(123)
//     wx.login({
//       success: function(res) {
//         if (res.code) {
//           wx.getUserInfo({
//             success: function(res) {
//               var objz = {};
//               objz.avatarUrl = res.userInfo.avatarUrl;
//               objz.nickName = res.userInfo.nickName;
//               wx.setStorageSync('userInfo', objz); //存储userInfo
//             }
//           });
//           const appkey = 'wx00c96ec6fcfd168f'
//           const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
//           var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo';
//           console.log(res)
//           wx.request({
//             url: l,
//             data: {
//               code: res.code
//             },
//             method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
//             // header: {}, // 设置请求的 header  
//             success: function(res) {
//               var obj = {};
//               obj.openid = res.data.openid;
//               obj.expires_in = Date.now() + res.data.expires_in;
//               console.log("打印openid开始")
//               console.log(obj.openid);
//               pageSelf.setData({
//                 openId: obj.openid
//               })
//               console.log("打印openid结束")
//               wx.setStorageSync('user', obj); //存储openid  
//               //history开始
//               wx.request({
//                 url: 'https://jqr.infobigdata.com/skillapplet/f52024d75d4348f38cdad3670d209c1e/wxskill',
//                 data: {
//                   issue: encodeURI("@历史记录"),
//                   openid: pageSelf.data.openId
//                 },
//                 header: {
//                   'content-type': 'application/json' //默认值
//                 },
//                 success: function(res) {
//                   console.log('判断是否有历史记录开始')
//                   console.log(res)
//                   console.log(res.data.data)
//                   console.log(typeof res.data.data)
//                   console.log(pageSelf.data.openId)
//                   console.log('判断是否有历史记录结束')
//                   console.log(pageSelf.data.openId)
//                   var result = JSON.parse(res.data.data);
//                   console.log(result.historytalk);
//                   console.log(result.historystat);
//                   if (result.historystat == 1) {
//                     pageSelf.setData({
//                       loadhistoryisshow: true
//                     })
//                   } else {
//                     pageSelf.setData({
//                       loadhistoryisshow: false
//                     })
//                   }
//                 }
//               })
//               //history结束
//             }
//           });
//         } else {
//           console.log('获取用户登录态失败！' + res.errMsg)
//         }
//       }
//     });
//     //获取小程序id结束
//     //历史记录穿小程序id结束
//   },
//   // onload方法结束  
//   /**
//  * 生命周期函数--监听页面显示
//  */
//   onShow: function () {
//     const pageSelf = this;
//     wx.getSetting({
//       success(res) {
//         if (!res.authSetting['scope.userInfo']) {
//           pageSelf.setData({
//             siginup:true
//           })
//         } else {
//           pageSelf.setData({
//             siginup:false
//           })
//         }
//       }
//     })
//   },
 
//   //点击跳转地图页面开始
//   // toMapPage() {
//   //   const pageSelf = this;
//   //   var jingdu = pageSelf.data.jing1
//   //   var weidu = pageSelf.data.wei1
//   //   var pagecan = 1;
//   //   //这一步是为了把模板语言转化成js语言
//   //   wx.navigateTo({
//   //     url: '/pages/mappage/mappage?jingdu=' + jingdu + '&weidu=' + weidu + '&pagecan=' + pagecan
//   //   })
//   // },
//   //点击跳转地图页面结束
//   // 转发开始
//   onShareAppMessage: function(ops) {
//     if (ops.from === 'button') {
//       // 来自页面内转发按钮
//       console.log(ops.target)
//     }
//     return {
//       title: '让机器像人类一样思考!',
//       path: `pages/littlea/littlea`,
//       success: function(res) {
//         // 转发成功
//         console.log("转发成功:" + JSON.stringify(res));
//         var shareTickets = res.shareTickets;
//         // if (shareTickets.length == 0) {
//         //   return false;
//         // }
//         // //可以获取群组信息
//         // wx.getShareInfo({
//         //   shareTicket: shareTickets[0],
//         //   success: function (res) {
//         //     console.log(res)
//         //   }
//         // })
//       },
//       fail: function(res) {
//         // 转发失败
//         console.log("转发失败:" + JSON.stringify(res));
//       }
//     }
//   },
//   // 转发结束
//   //获取小程序openid
//   onLaunch: function() {
//     const pageSelf = this
//     var user = wx.getStorageSync('user') || {};
//     var userInfo = wx.getStorageSync('userInfo') || {};
//     // if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
//     console.log(123)
//     wx.login({
//       success: function(res) {
//         if (res.code) {
//           wx.getUserInfo({
//             success: function(res) {
//               var objz = {};
//               objz.avatarUrl = res.userInfo.avatarUrl;
//               objz.nickName = res.userInfo.nickName;
//               wx.setStorageSync('userInfo', objz); //存储userInfo
//             }
//           });
//           const appkey = 'wx00c96ec6fcfd168f'
//           const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
//           var d = pageSelf.globalData; //这里存储了appid、secret、token串  
//           var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo';
//           console.log(res)
//           console.log("12222")
//           console.log(res.code)
//           console.log(l)
//           wx.request({
//             url: l,
//             data: {
//               code: res.code
//             },
//             method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
//             // header: {}, // 设置请求的 header  
//             success: function(res) {
//               var obj = {};
//               obj.openid = res.data.openid;
//               obj.expires_in = Date.now() + res.data.expires_in;
//               console.log("打印openid开始")
//               console.log(obj.openid);
//               pageSelf.setData({
//                 openId: obj.openid
//               })
//               console.log(pageSelf.data.openId)
//               console.log("打印openid结束")
//               wx.setStorageSync('user', obj); //存储openid  
//             }
//           });
//         } else {
//           console.log('获取用户登录态失败！' + res.errMsg)
//         }
//       }
//     });
//     // }
//   },
//   //美食酒店机票tab按钮:
//   ytbt_tab1: function() {
//     const selfPage = this;
//     selfPage.setData({
//       ytbt_icno_restaurant: false, //美食图标到闲聊图标
//       ytbt_icno_hotel: true,
//       ytbt_icno_plane: true,
//       ytbt_icno_train: true,
//       ytbt_icno_film: true,
//       ytbt_icno_weather: true,
//       ytbt_icno_chat: true,
//       ytbt_tip: "您可以说:附近有啥好吃的?",
//     })
//     console.log(selfPage.data.openId)
//   },
//   ytbt_tab2: function() {
//     const selfPage = this;
//     selfPage.setData({
//       ytbt_icno_restaurant: true, //美食图标到闲聊图标
//       ytbt_icno_hotel: false,
//       ytbt_icno_plane: true,
//       ytbt_icno_train: true,
//       ytbt_icno_film: true,
//       ytbt_icno_weather: true,
//       ytbt_icno_chat: true,
//       ytbt_tip: "您可以说:我要定制旅行",
//     })
//   },
//   ytbt_tab3: function() {
//     const selfPage = this;
//     selfPage.setData({
//       ytbt_icno_restaurant: true, //美食图标到闲聊图标
//       ytbt_icno_hotel: true,
//       ytbt_icno_plane: false,
//       ytbt_icno_train: true,
//       ytbt_icno_film: true,
//       ytbt_icno_weather: true,
//       ytbt_icno_chat: true,
//       ytbt_tip: "您可以说:我要去土耳其",
//     })
//   },
//   ytbt_tab4: function() {
//     const selfPage = this;
//     selfPage.setData({
//       ytbt_icno_restaurant: true, //美食图标到闲聊图标
//       ytbt_icno_hotel: true,
//       ytbt_icno_plane: true,
//       ytbt_icno_train: false,
//       ytbt_icno_film: true,
//       ytbt_icno_weather: true,
//       ytbt_icno_chat: true,
//       ytbt_tip: "您可以说:火车票或者我想去拉萨",
//     })
//   },
//   ytbt_tab5: function() {
//     const selfPage = this;
//     selfPage.setData({
//       ytbt_icno_restaurant: true, //美食图标到闲聊图标
//       ytbt_icno_hotel: true,
//       ytbt_icno_plane: true,
//       ytbt_icno_train: true,
//       ytbt_icno_film: false,
//       ytbt_icno_weather: true,
//       ytbt_icno_chat: true,
//       ytbt_tip: "您可以说:听音乐",
//     })
//   },
//   ytbt_tab6: function() {
//     const selfPage = this;
//     selfPage.setData({
//       ytbt_icno_restaurant: true, //美食图标到闲聊图标
//       ytbt_icno_hotel: true,
//       ytbt_icno_plane: true,
//       ytbt_icno_train: true,
//       ytbt_icno_film: true,
//       ytbt_icno_weather: false,
//       ytbt_icno_chat: true,
//       ytbt_tip: "您可以说:天气",
//     })
//   },
//   ytbt_tab7: function() {
//     const selfPage = this;
//     selfPage.setData({
//       ytbt_icno_restaurant: true, //美食图标到闲聊图标
//       ytbt_icno_hotel: true,
//       ytbt_icno_plane: true,
//       ytbt_icno_train: true,
//       ytbt_icno_film: true,
//       ytbt_icno_weather: true,
//       ytbt_icno_chat: false,
//       ytbt_tip: "您可以说:你是谁？",
//     })
//   },
//   // 点击关闭返回上一页面
//   navigator_back: function() {
//     wx.navigateBack()
//   },
//   //控制登录按钮开关
//   siginuptab: function() {
//     const selfPage = this;
//     selfPage.setData({
//       siginup: false
//     })
//   },
//   //头像
//   onGotUserInfo: function(res) {
//     wx.getUserInfo({
//       success: function(res) {
//         this.setData({
//           [avatarUrl]: JSON.parse(res.detail.rawData).avatarUrl
//         });
//       },
//       fail: function() {

//       }
//     })
//   },
//   // 确认键盘输入
//   submitMessage: function() {
//     sendmessage_pub(this);
//   },
//   // 文字框转语音输入
//   voicetowrite: function() {
//     const selfPage = this;
//     selfPage.setData({
//       voiceorwrite: false
//     })
//   },
//   writetovoice: function() {
//     const selfPage = this;
//     selfPage.setData({
//       voiceorwrite: true
//     })
//   },
//   // 存储input输入内容
//   catchMessage: function(e) {
//     const selfPage = this;
//     if (e.detail.value != "") {
//       selfPage.setData({
//         inputValue: e.detail.value
//       })
//     }
//   },
//   //点击联想的文字
//   thinktab: function(e) {
//     const selfPage = this;
//     selfPage.setData({
//       thinkValue: e.target.dataset.name
//     })
//     var thinkContent = this.data.thinkValue;
//     if (thinkContent != "") {
//       var obj = {
//         typeId: 0,
//         message: thinkContent
//       };
//       var dataarray = this.data.array;
//       dataarray.push(obj);
//       selfPage.setData({
//         array: dataarray,
//         inputValue: ""
//       });
//     }
//     //获取机器人返回的说话内容
//     console.log(thinkContent)
//     wx.request({
//       url: 'https://robot.moxiai.com/applets/f52024d75d4348f38cdad3670d209c1e/wx',
//       data: {
//         issue: thinkContent
//       },
//       header: {
//         'content-type': 'application/json' //默认值
//       },
//       success: function(res) {
//         console.log(res);
//         console.log(res.data);
//         console.log(res.data.data);
//         var obj = {
//           typeId: res.data.showType,
//           message: res.data.data
//         };
//         var dataarray = selfPage.data.array;
//         dataarray.push(obj);
//         // console.log(dataarray)
//         selfPage.setData({
//           array: dataarray,
//           textThinkIsShow: false
//         });
//         // 滚动到底部
//         let query = wx.createSelectorQuery().in(selfPage)
//         query.select('.container_innerHeight').boundingClientRect((res) => {
//           selfPage.setData({
//             scrollTop: res.height
//           });
//         }).exec()
//       }
//     })
//     // 滚动到底部
//     let query = wx.createSelectorQuery().in(this)
//     query.select('.container_innerHeight').boundingClientRect((res) => {
//       this.setData({
//         scrollTop: res.height
//       });
//     }).exec()
//   },
//   // 点击发送
//   sendMessage: function(e) {
//     sendmessage_pub(this);
//   },
//   // 点击加载历史记录
//   loadhistoryMessage: function() {
//     console.log(912)
//     const selfPage = this;
//     //历史记录传小城程序id开始
//     // 获取小程序id开始
//     var user = wx.getStorageSync('user') || {};
//     var userInfo = wx.getStorageSync('userInfo') || {};
//     console.log(123)
//     wx.login({
//       success: function(res) {
//         if (res.code) {
//           wx.getUserInfo({
//             success: function(res) {
//               var objz = {};
//               objz.avatarUrl = res.userInfo.avatarUrl;
//               objz.nickName = res.userInfo.nickName;
//               wx.setStorageSync('userInfo', objz); //存储userInfo
//             }
//           });
//           const appkey = 'wx00c96ec6fcfd168f'
//           const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
//           var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo';
//           console.log(res)
//           wx.request({
//             url: l,
//             data: {
//               code: res.code
//             },
//             method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
//             // header: {}, // 设置请求的 header  
//             success: function(res) {
//               var obj = {};
//               obj.openid = res.data.openid;
//               obj.expires_in = Date.now() + res.data.expires_in;
//               console.log("打印openid开始")
//               console.log(obj.openid);
//               selfPage.setData({
//                 openId: obj.openid
//               })
//               console.log("打印openid结束")
//               wx.setStorageSync('user', obj); //存储openid  
//               //按钮的history开始
//               wx.request({
//                 url: 'https://jqr.infobigdata.com/skillapplet/f52024d75d4348f38cdad3670d209c1e/wxskill',
//                 data: {
//                   issue: encodeURI("@历史记录"),
//                   openid: selfPage.data.openId
//                 },
//                 header: {
//                   'content-type': 'application/json' //默认值
//                 },
//                 success: function(res) {
//                   console.log(914)
//                   console.log(res)
//                   var result = JSON.parse(res.data.data);
//                   console.log(result.historytalk);
//                   if (result.historystat == 1) {
//                     for (var i = 0; i < result.historytalk.length; i++) {
//                       var objserver = {
//                         typeId: -3,
//                         message: result.historytalk[result.historytalk.length - 1 - i].server
//                       }
//                       var dataarray = selfPage.data.array;
//                       dataarray.unshift(objserver);
//                       var objperson = {
//                         typeId: 0,
//                         message: result.historytalk[result.historytalk.length - 1 - i].client
//                       }
//                       dataarray.unshift(objperson);
//                     }
//                     selfPage.setData({
//                       loadhistoryisshow: false
//                     })
//                   } else {
//                     selfPage.setData({
//                       loadhistoryisshow: true
//                     })
//                   }
//                   // console.log(dataarray)
//                   selfPage.setData({
//                     array: dataarray,
//                     textThinkIsShow: false
//                   });
//                   // 滚动到底部
//                   let query = wx.createSelectorQuery().in(selfPage)
//                   query.select('.container_innerHeight').boundingClientRect((res) => {
//                     selfPage.setData({
//                       scrollTop: res.height
//                     });
//                   }).exec()
//                 }
//               })
//               // 滚动到底部
//               let query = wx.createSelectorQuery().in(this)
//               query.select('.container_innerHeight').boundingClientRect((res) => {
//                 this.setData({
//                   scrollTop: res.height
//                 });
//               }).exec()
//               //按钮的history结束
//             }
//           });
//         } else {
//           console.log('获取用户登录态失败！' + res.errMsg)
//         }
//       }
//     });
//     //获取小程序id结束
//     //历史记录穿小程序id结束
//     // 滚动到底部
//     let query = wx.createSelectorQuery().in(this)
//     query.select('.container_innerHeight').boundingClientRect((res) => {
//       this.setData({
//         scrollTop: res.height
//       });
//     }).exec()
//   },
//   // 以下是调用新接口实现的录音，录出来的是 mp3
//   touchdown: function() {
//     // 判断是否开启录音功能开始
//     // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
//     // wx.startRecord()
//     wx.getSetting({
//       success(res) {
//         if (!res.authSetting['scope.record']) {
//           wx.authorize({
//             scope: 'scope.record',
//             success() {
//               // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
//               mp3Recorder.start(mp3RecoderOptions)
//             },
//             fail() {
//               // wx.startRecord()
//               //第二次授权开始
//               console.log("第一次录音授权失败");
//               wx.showModal({
//                 title: '提示',
//                 content: '您未授权录音，功能将无法使用',
//                 showCancel: true,
//                 confirmText: "授权",
//                 confirmColor: "#52a2d8",
//                 success: function(res) {
//                   if (res.confirm) {
//                     //确认则打开设置页面（重点）
//                     wx.openSetting({
//                       success: (res) => {
//                         console.log(res.authSetting);
//                         if (!res.authSetting['scope.record']) {
//                           //未设置录音授权
//                           console.log("未设置录音授权");
//                           wx.showModal({
//                             title: '提示',
//                             content: '您未授权录音，功能将无法使用',
//                             showCancel: false,
//                             success: function(res) {

//                             },
//                           })
//                         } else {
//                           //第二次才成功授权
//                           console.log("设置录音授权成功");
//                           // that.setData({
//                           //   status: 2,
//                           // })
//                           mp3Recorder.start(mp3RecoderOptions)
//                         }
//                       },
//                       fail: function() {
//                         console.log("授权设置录音失败");
//                       }
//                     })
//                   } else if (res.cancel) {
//                     console.log("cancel");
//                   }
//                 },
//                 fail: function() {
//                   console.log("openfail");
//                 }
//               })
//               // 第二次授权结束
//             }
//           })
//         }
//       }
//     })
//     // 判断是否开启录音功能结束
//     console.log("mp3Recorder.start with" + mp3RecoderOptions)
//     var _this = this;
//     // speaking(_this);
//     this.setData({
//       isSpeaking: true
//     })
//     if (ner != null) {
//       ner.stop();
//     }
//     mp3Recorder.start(mp3RecoderOptions);
//   },
//   touchup: function() {
//     // UTIL.log("mp3Recorder.stop")
//     console.log("mp3Recorder.stop")
//     this.setData({
//       isSpeaking: false,
//     })
//     mp3Recorder.stop();
//   },
//   //文字、语音切换
//   Singleclick: function() {
//     if (this.data.isChecked_btn) {
//       this.setData({
//         isChecked_btn: false
//       })
//     } else {
//       this.setData({
//         isChecked_btn: true
//       })
//     }
//   },
//   //打电话
//   tel: function() {
//     var phonenumber = this.data.phonenumber;
//     wx.makePhoneCall({
//       phoneNumber: phonenumber
//     })
//   }
// })
// //上传录音文件到接口，处理语音识别和语义，结果输出到界面
// function processFileUploadForAsr(filePath, _this) {
//   // const selfPage = this;
//   // 文件上传到服务器
//   wx.uploadFile({
//     url: 'https://ssl.infobigdata.com/weixin/upload',
//     filePath: filePath,
//     name: 'file',
//     formData: {
//       'user': 'test'
//     },
//     success: function(res) {
//       var resData = res.data;
//       if (resData == '') {};
//       var jsonData = JSON.parse(resData);
//       console.log(jsonData.dataInfo)
//       console.log("geigecabnsn参数00")
//       if (jsonData.code === '1') {
//         var objovice = {
//           typeId: 1,
//           strvoiceshow1: jsonData.dataInfo
//         }
//         var arrvoice = _this.data.array;
//         arrvoice.push(objovice);
//         _this.setData({
//           array: arrvoice
//         })
//         sendmessage_pub(_this, jsonData.dataInfo)
//       }
//     }
//   })
// }
// function getNliFromResult(res_data) {
//   var res_data_json = JSON.parse(res_data);
//   var res_data_result_json = JSON.parse(res_data_json.result);
//   return res_data_result_json.nli;
// }
// function getSttFromResult(res_data) {
//   var res_data_json = JSON.parse(res_data);
//   var res_data_result_json = JSON.parse(res_data_json.result);
//   return res_data_result_json.asr.result;
// }
// //搜索结果文字朗读
// function speckText(url) {
//   if (ner != null) {
//     ner.stop();
//   }
//   const innerAudioContext = wx.createInnerAudioContext()
//   ner = innerAudioContext
//   innerAudioContext.autoplay = true
//   // innerAudioContext.src = url
//   innerAudioContext.src = url
//   innerAudioContext.onPlay(() => {
//     console.log(url)
//     console.log('开始播放')
//   })
//   innerAudioContext.onError((res) => {

//     console.log(res.errMsg)
//     console.log(res.errCode)
//   })
//   innerAudioContext.onStop((res) => {
//     console.log("播放停止了")
//     if (voice != null) {
//       voice = null;
//     };
//   })
//   innerAudioContext.onEnded((res) => {
//     console.log("自然播放完毕")
//     if (voice != null) {
//       innerAudioContext.src = voice;
//       voice = null;
//     };
//     // 语音读完后删除语音开始
//     wx.request({
//       url: 'https://jqr.infobigdata.com/skillapplet/f52024d75d4348f38cdad3670d209c1e/wxgcvoice',
//       data: {
//         voiceurl: url
//       },
//       header: {
//         'content-type': 'application/json;charset=utf-8'
//       },
//       success: function(res) {
//         console.log("delete over")
//       }
//     })
//     // 语音读完后删除语音结束
//   })
//   // 设置与播放结束
//   // 滚动到底部
//   //获取小程序id结束(发送语音获取语音地址板块)
// }
// // 发送事件封装
// function sendmessage_pub(_this,strvoice) {
//   const selfPage = _this;
//   var inputContent = _this.data.inputValue;
//   if (inputContent != "") {
//     var obj = {
//       typeId: 0,
//       message: inputContent
//     };
//     var dataarray = _this.data.array;
//     dataarray.push(obj);
//     // console.log(dataarray)
//     selfPage.setData({
//       array: dataarray,
//       inputValue: ""
//     });
//   }
//   // 获取小程序id开始(发送事件板块)
//   var user = wx.getStorageSync('user') || {};
//   var userInfo = wx.getStorageSync('userInfo') || {};
//   console.log(123)
//   wx.login({
//     success: function(res) {
//       if (res.code) {
//         wx.getUserInfo({
//           success: function(res) {
//             var objz = {};
//             objz.avatarUrl = res.userInfo.avatarUrl;
//             objz.nickName = res.userInfo.nickName;
//             wx.setStorageSync('userInfo', objz); //存储userInfo
//           }
//         });
//         const appkey = 'wx00c96ec6fcfd168f'
//         const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
//         var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo'
//         // var l = 'http://192.168.1.111:8080/appletApi/getUserInfo'
//         console.log(res)
//         wx.request({
//           url: l,
//           data: {
//             code: res.code
//           },
//           method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
//           // header: {}, // 设置请求的 header  
//           success: function(res) {
//             var obj = {};
//             obj.openid = res.data.openid;
//             obj.expires_in = Date.now() + res.data.expires_in;
//             console.log("打印openid开始")
//             console.log(obj.openid);
//             selfPage.setData({
//               openId: obj.openid
//             })
//             console.log("打印openid结束")
//             wx.setStorageSync('user', obj); //存储openid  
//             //获取百度的美食列表信息并处理城字符串开始
//             console.log("探索小红花搞一搞开始2")
//             // 美食列表开始
//             //百度搜索附近美食开始
//             // 新建百度地图对象 
//             // if (res.data.showType == 5) {
//             var BMap = new bmap.BMapWX({
//               ak: 'zG0qcmqsXdaWPhYxg5KHD67Q3m1ArhGV'
//             });
//             var fail = function(data) {
//               console.log(data)
//             };
//             var success = function(data) {
//               wxMarkerData = data.wxMarkerData;
//               console.log("探索data开始2")
//               console.log(data)
//               console.log(data.originalData.results)
//               liflagarr = data.originalData.results
//               liflagstr = JSON.stringify(data.originalData.results)
//               console.log(liflagstr)
//               selfPage.setData({
//                 liflagstr: liflagstr,
//                 liflagarr: liflagarr
//               })
//               console.log("探索data结束2")
//             }
//             // 发起POI检索请求 
//             BMap.search({
//               "query": '美食',
//               fail: fail,
//               success: success,
//               iconPath: '../../pics/marker_red.png',
//               iconTapPath: '../../pics/marker_red.png'
//             });
//             console.log("探索小红花搞一搞结束2")
//             // 美食列表结束
//             //获取百度美食列表的数据并处理成字符串
//             //点击发送事件开始
            
//             var inputContentStr;
//             if (!strvoice) {
//               inputContentStr = encodeURI(inputContent)
//             } else {
//               inputContentStr = strvoice
//             }
//             wx.request({
//               url: 'https://jqr.infobigdata.com/skillapplet/f52024d75d4348f38cdad3670d209c1e/wxskill',
//               //url: 'http://192.168.1.111:8080/skillapplet/f52024d75d4348f38cdad3670d209c1e/wxskill',
//               data: {
//                 issue: inputContentStr,
//                 openid: selfPage.data.openId,
//                 foodli:selfPage.data.liflagstr
//               },
//               header: {
//                 'content-type': 'application/json' //默认值
//               },
//               success: function(res) {
//                 console.log("探索小红花搞一搞开始")
//                 console.log(res)
//                 // console.log(res.data.source)
//                 // console.log(JSON.parse(res.data.source))
//                 if(res.data.showType == 6) {
//                   selfPage.setData({
//                     pagestwoarr:JSON.parse(res.data.source),
//                     wordtwostr: res.data.data
//                   })
//                 }
//                 if (res.data.showType == 7) {
//                   selfPage.setData({
//                     jing1: JSON.parse(res.data.source).lat,
//                     wei1: JSON.parse(res.data.source).lng
//                   })
//                   //点击跳转地图页面开始
//                   var jingdu = selfPage.data.jing1
//                   var weidu = selfPage.data.wei1
//                   var pagecan = 1;
//                     wx.navigateTo({
//                       url: '/pages/mappage/mappage?jingdu=' + jingdu + '&weidu=' + weidu + '&pagecan=' + pagecan
//                     })
//                 }
//                 if(res.data.showType == 8) {
//                   var str = res.data.source;
//                   var arr = str.split(',')
//                   var phonenumber1 = arr[0];
//                     console.log("dadianhua打电话")
//                     console.log(phonenumber1)
//                     wx.makePhoneCall({
//                       phoneNumber: phonenumber1
//                     })
//                 }
//                 var obj = {
//                   typeId: res.data.showType,
//                   skillType: res.data.skillType,
//                   message: res.data.data,
//                   pages: selfPage.data.liflagarr,
//                   pagestwos: selfPage.data.pagestwoarr,
//                   strvoiceshow: strvoice
//                   // wordtwo: selfPage.data.wordtwostr
//                 };
//                 var dataarray = selfPage.data.array;
//                 dataarray.push(obj);
//                 selfPage.setData({
//                   array: dataarray,
//                   textThinkIsShow: false
//                 });
//                 // 机器人说话朗读
//                 speckText(res.data.voice)
//                 console.log("探索小红花搞一搞结束")
//                 // 美食列表结束
//                 // 滚动到底部
//                 let query = wx.createSelectorQuery().in(selfPage)
//                 query.select('.container_innerHeight').boundingClientRect((res) => {
//                   selfPage.setData({
//                     scrollTop: res.height
//                   });
//                 }).exec()
//               }
//             })
//             //点击发送事件结束
//           }
//         });
//       } else {
//         console.log('获取用户登录态失败！' + res.errMsg)
//       }
//     }
//   });
//   //获取小程序id结束(发送事件板块)
//   // 滚动到底部
//   let query = wx.createSelectorQuery().in(_this)
//   query.select('.container_innerHeight').boundingClientRect((res) => {
//     _this.setData({
//       scrollTop: res.height
//     });
//   }).exec()
// }
// //获取用户id
// function getId() {
//   /**
//    * 获取用户信息
//    */
//   // 获取小程序id开始
//   var user = wx.getStorageSync('user') || {};
//   var userInfo = wx.getStorageSync('userInfo') || {};
//   console.log(123)
//   wx.login({
//     success: function(res) {
//       if (res.code) {
//         wx.getUserInfo({
//           success: function(res) {
//             var objz = {};
//             objz.avatarUrl = res.userInfo.avatarUrl;
//             objz.nickName = res.userInfo.nickName;
//             wx.setStorageSync('userInfo', objz); //存储userInfo
//           }
//         });
//         const appkey = 'wx00c96ec6fcfd168f'
//         const appsecret = '7b6210dad9e1cf9f3ca937c8bc126703'
//         var l = 'https://jqr.infobigdata.com/appletApi/getUserInfo'
//         console.log(res)
//         wx.request({
//           url: l,
//           data: {
//             code: res.code
//           },
//           method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
//           // header: {}, // 设置请求的 header  
//           success: function(res) {
//             var obj = {};
//             obj.openid = res.data.openid;
//             obj.expires_in = Date.now() + res.data.expires_in;
//             console.log("打印openid开始")
//             console.log(obj.openid);
//             pageSelf.setData({
//               openId: obj.openid
//             })
//             console.log("打印openid结束")
//             wx.setStorageSync('user', obj); //存储openid  
//           }
//         });
//       } else {
//         console.log('获取用户登录态失败！' + res.errMsg)
//       }
//     }
//   });
//   //获取小程序id结束
// }
//获取应用实例
var app = getApp()
Page({
  data: {
    isshake: true,
  },
  onload: function () {


  },
  // 页面渲染完成 
  onReady: function () {

  }
})
