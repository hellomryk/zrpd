// var page = undefined;

// var UTIL = require('../../utils/util.js');
// var Bmapwx = require('../../utils/bmapwx.js');
// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../utils/bmapwx.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {}
  },
  // makertap: function (e) {
  //   var that = this;
  //   var id = e.markerId;
  //   that.showSearchInfo(wxMarkerData, id);
  //   that.changeMarkerColor(wxMarkerData, id);
  // },
  onLoad: function () {
    //百度搜索附近美食开始
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'zG0qcmqsXdaWPhYxg5KHD67Q3m1ArhGV'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      console.log("探索data开始")
      console.log(data)
      console.log("探索data结束")
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    // 发起POI检索请求 
    BMap.search({
      "query": '美食',
      fail: fail,
      success: success,
      iconPath: '../../pics/marker_red.png',
      iconTapPath: '../../pics/marker_red.png'
    });
    //百度搜索附近美食开始
  },
  // showSearchInfo: function (data, i) {
  //   var that = this;
  //   that.setData({
  //     placeData: {
  //       title: '名称：' + data[i].title + '\n',
  //       address: '地址：' + data[i].address + '\n',
  //       telephone: '电话：' + data[i].telephone
  //     }
  //   });
  // },
  // changeMarkerColor: function (data, i) {
  //   var that = this;
  //   var markers = [];
  //   for (var j = 0; j < data.length; j++) {
  //     if (j == i) {
  //       // 此处需要在相应路径放置图片文件 
  //       data[j].iconPath = "../../pics/marker_yellow.png";
  //     } else {
  //       // 此处需要在相应路径放置图片文件 
  //       data[j].iconPath = "../../pics/marker_red.png";
  //     }
  //     markers[j](data[j]);
  //   }
  //   that.setData({
  //     markers: markers
  //   });
  // }
})
// Page({
//   onLoad: function () {
//     page = this;

//     wx.getSystemInfo({
//       success: function (res) {
//         UTIL.log('system info:' + JSON.stringify(res))
//       }
//     })

//   },
//   bindbt: function () {
//     var timer = setInterval(this.addDoomm, 1000)
//   },
//   data: {
//     doommData: []
//   },

//   addDoomm : function() {
//     if (doommList.length < 5) {
//       doommList.push(new Doomm("弹幕测试程序", Math.ceil(Math.random() * 40 + 50), Math.ceil(Math.random() * 10 + 10), getRandomColor()));
//       this.setData({
//         doommData: doommList
//       })
//     }
//   }
// })

// var doommList = [];
// var i = 0;
// class Doomm {
//   constructor(text, top, time, color) {
//     this.text = text + i;
//     this.top = top;
//     this.time = time;
//     this.color = color;
//     this.display = true;
//     let that = this;
//     this.id = i++;
//     setTimeout(function () {
//       doommList.splice(doommList.indexOf(that), 1);
//       page.setData({
//         doommData: doommList
//       })
//     }, this.time * 1000)
//   }
// }
// function getRandomColor() {
//   let rgb = []
//   for (let i = 0; i < 3; ++i) {
//     let color = Math.floor(Math.random() * 256).toString(16)
//     color = color.length == 1 ? '0' + color : color
//     rgb.push(color)
//   }
//   return '#' + rgb.join('')
// }