//获取应用实例
const app = getApp();
var arr=null;

Page({
  data:{
    tittleopen1:true,
    tittleopen2: true,
         array:[],
  },
  recixiala1: function () {
    // console.log(this.data.researchactive)
    if (this.data.tittleopen1) {
      this.setData({
        "tittleopen1":false,
        "tittleopen2": true
      })
    }else {
      this.setData({
        "tittleopen1": true,
        "tittleopen2": true
      })
    }
  },
  recixiala2: function () {
    // console.log(this.data.researchactive)
    if (this.data.tittleopen2) {
      this.setData({
        "tittleopen2": false,
        "tittleopen1": true
      })
    } else {
      this.setData({
        "tittleopen2": true,
        "tittleopen1": true
      })
    }
  },
  // 热词追踪请求数据
  onLoad: function() {
    var pageSelf = this;
    wx.showLoading({
      title:"加载中"
    });
      wx.request({
        url:"http://catch.infobigdata.com/applet/getTrace",
        data: {
          str:'{"current_page":1,"page_size":10,"date_name":"'+ encodeURIComponent('半年内')+'"}',
          rnd:Math.random()
        },
        // header: {
        //   'content-type':'application/json' //默认值
        // },
        method:"POST",
        success: function (res) {
          wx.hideLoading();
          if(res.data.code == 200) {
            var arr = [];
            for (var i = 0; i < JSON.parse(res.data.result).data.length;i ++) {
              var obj = {};
              obj.id = JSON.parse(res.data.result).data[i].id;
              obj.message = JSON.parse(res.data.result).data[i].hotName;
              obj.updateDate = JSON.parse(res.data.result).data[i].updateTime;
              obj.arrayBiao = JSON.parse(res.data.result).data[i].typeNameArray;
              obj.hotImg = JSON.parse(res.data.result).data[i].hotImg;
              obj.Tong = JSON.parse(res.data.result).data[i]; 
              arr.push(obj)
            }
            console.log(arr)
             pageSelf.setData({
               array :arr,
            })
          } else {
            wx.showToast({
              title:'暂时没有你想要的数据!',
              icon:'none',
              duration:2000
            })
          }
        }
      })
  },
  // 点击时间筛选
  timeList1:function() {
    var pageSelf = this;
      wx.request({
        url:"http://catch.infobigdata.com/applet/getTrace",
        data: {
          str: '{"current_page":1,"page_size":10,"date_name":"'+ encodeURIComponent('一天内')+'"}',
          rnd:Math.random()
        },
        method:"POST",
        success: function(res) {
          if(res.data.code == 200) {
            var arr = [];
            console.log(res.data)
            for(var i = 0; i < JSON.parse(res.data.result).data.length; i ++) {
              var obj = {};
              obj.id = JSON.parse(res.data.result).data[i].id;
              obj.message = JSON.parse(res.data.result).data[i].hotName;
              obj.updateDate = JSON.parse(res.data.result).data[i].updateTime;
              obj.arrayBiao = JSON.parse(res.data.result).data[i].typeNameArray;
              obj.hotImg = JSON.parse(res.data.result).data[i].hotImg;
              arr.push(obj)
            }
          pageSelf.setData({
            array:arr,
            "tittleopen1": true,
            "tittleopen2": true
          })
          } else {
            wx.showToast({
              title: '没有你想要的内容',
              iconic:'none',
              duration:2000
            })
          }
        }
      })
  },
   timeList2: function () {
     var pageSelf = this;
     wx.request({
       url: "http://catch.infobigdata.com/applet/getTrace",
       data: {
         str: '{"current_page":1,"page_size":11,"date_name":"' + encodeURIComponent('一个月内') + '"}',
         rnd: Math.random()
       },
       // header: {
       //   'content-type':'application/json' //默认值
       // },
       method: "POST",
       success: function (res) {
         if (res.data.code == 200) {
           var arr = [];
           for (var i = 0; i < JSON.parse(res.data.result).data.length; i++) {
             var obj = {};
             obj.id = JSON.parse(res.data.result).data[i].id;
             obj.message = JSON.parse(res.data.result).data[i].hotName;
             obj.updateDate = JSON.parse(res.data.result).data[i].updateTime;
             obj.arrayBiao = JSON.parse(res.data.result).data[i].typeNameArray;
             obj.hotImg = JSON.parse(res.data.result).data[i].hotImg;
             arr.push(obj)
           }
           console.log(arr)
           pageSelf.setData({
             array: arr,
             "tittleopen1": true,
             "tittleopen2": true
           })
           // console.log(arr)
         } else {
           wx.showToast({
             title: '暂时没有你想要的数据!',
             icon: 'none',
             duration: 2000
           })
         }
       }
     })
  },
  timeList3:function() {
    var pageSelf = this;
    wx.request({
      url:"http://catch.infobigdata.com/applet/getTrace",
        data:{
          str:'{"current_page":1,"page_size":10,"date_name":"'+ encodeURIComponent('一个月')+'"}',
          rnd:Math.random()
        },
        method:"POST",
        success:function(res) {
            if(res.data.code == 200) {
              var arr = [];
              for(var i = 0;i < JSON.parse(res.data.result).data.length; i ++) {
                  var obj = {};
                  obj.id = JSON.parse(res.data.result).data[i].id;
                  obj.message = JSON.parse(res.data.result).data[i].hotName;
                  obj.updateDate = JSON.parse(res.data.result).data[i].updateTime;
                  obj.arrayBiao = JSON.parse(res.data.result).data[i].typeNameArray;
                  obj.hotImg = JSON.parse(res.data.result).data[i].hotImg;
                  arr.push(obj)
              }
              pageSelf.setData({
                  array:arr,
                  "tittleopen1": true,
                  "tittleopen2": true
              })
            } else {
              wx.showToast({
                  title:'暂时没有你想要的内容',
                  iconic:"none",
                  duration:2000
              })
            }
        }
    })
  },
  timeList4:function() {
    var pageSelf = this;
    wx.request({
      url:'http://catch.infobigdata.com/applet/getTrace',
      data:{
        str:'{"current_page":1,"page_size":10,"date_name":"'+ encodeURIComponent('一个月')+'"}',
        rnd:Math.random()
      },
      method: "POST",
      success:function(res) {
          if(res.data.code == 200) {
            var arr = [];
            for(var i = 0; i <JSON.parse(res.data.result).data.length; i ++) {
              var obj = {};
              obj.id = JSON.parse(res.data.result).data[i].id;
              obj.message = JSON.parse(res.data.result).data[i].hotName;
              obj.updateDate = JSON.parse(res.data.result).data[i].updateTime;
              obj.arrayBiao = JSON.parse(res.data.result).data[i].typeNameArray;
              obj.hotImg = JSON.parse(res.data.result).data[i].hotImg;
              arr.push(obj);
            }
            pageSelf.setData({
               array:arr,
               "tittleopen1": true,
               "tittleopen2": true
            })
          } else {
            wx.showToast({
                title:'暂时没有你想要的东西',
                iconic:"none",
                duration:2000
            })
          }
      }
    })
  },
  timeList5:function(){
    var pageSelf = this;
    wx.request({
      url:"http://catch.infobigdata.com/applet/getTrace",
      data:{
        str:'{"current_page":1,"page_size":10,"date_name":"'+ encodeURIComponent('一个月内')+'"}',
        rnd:Math.random()
      },
      method:"POST",
      success:function(res) {
        if(res.data.code == 200) {
          var arr = [];
          for(var i = 0; i < JSON.parse(res.data.result).data.length; i ++) {
            var obj = {};
            obj.id = JSON.parse(res.data.result).data[i].id;
            obj.message = JSON.parse(res.data.result).data[i].hotName;
            obj.updateDate = JSON.parse(res.data.result).data[i].updateTime;
            obj.arrayBiao = JSON.parse(res.data.result).data[i].typeNameArray;
            obj.hotImg = JSON.parse(res.data.result).data[i].hotImg;
            arr.push(obj);
          }
          pageSelf.setData({
             array:arr,
             "tittleopen1": true,
             "tittleopen2": true
          })
        } else {
          wx.showToast({
            title:'暂时没有你想要的东西',
            iconic:'none',
            duration:2000
          })
        }
      }
    })
  },
  timeList6:function() {
    var pageSelf = this;
    wx.request({
      url:'http://catch.infobigdata.com/applet/getTrace',
      data:{
        str:'{"current_page":1,"page_size":10,"date_name":"'+ encodeURIComponent('一个月')+'"}',
        rnd:Math.random()
      },
      method:"POST",
      success:function(res) {
          if(res.data.code == 200) {
            var arr = [];
            for(var i = 0; i < JSON.parse(res.data.result).data.length; i ++) {
                var obj = {};
                obj.id = JSON.parse(res.data.result).data[i].id;
                obj.message = JSON.parse(res.data.result).data[i].hotName;
                obj.updateDate = JSON.parse(res.data.result).data[i].updateTime;
                obj.arrayBiao = JSON.parse(res.data.result).data[i].typeNameArray;
                obj.hotImg = JSON.parse(res.data.result).data[i].hotImg;
                arr.push(obj);
              }
          pageSelf.setData({
            array:arr,
            "tittleopen1": true,
            "tittleopen2": true
          })
          } else {
            wx.showToast({
              title:'暂时没有你想要的东西',
              iconic:'none',
              duration:2000
            })
          }
      }
    })
  },
  timeList7:function() {
    var pageSelf = this;
    wx.request({
      url:'http://catch.infobigdata.com/applet/getTrace',
      data:{
        str:'{"current_page":1,"page_size":10,"date_name":"'+ encodeURIComponent('一个月')+'"}',
        rnd:Math.random()
      },
      method:'POST',
      success:function(res) {
        if(res.data.code == 200) {
          var arr = [];
          for(var i = 0; i < JSON.parse(res.data.result).data.length; i ++) {
            var obj = {};
            obj.id = JSON.parse(res.data.result).data[i].id;
            obj.message = JSON.parse(res.data.result).data[i].hotName;
            obj.updateDate = JSON.parse(res.data.result).data[i].updateTime;
            obj.arrayBiao = JSON.parse(res.data.result).data[i].typeNameArray;
            obj.hotImg = JSON.parse(res.data.result).data[i].hotImg;
            arr.push(obj);
          }
          pageSelf.setData({
            array:arr,
            "tittleopen1": true,
            "tittleopen2": true 
          })
        } else {
          wx.showToast({
            title: '暂时没有你想要的内容',
            iconic:'none',
            duration:2000
          })
        }
      }
    })
  },
  timeList8:function() {
    var pageSelf = this;
    wx.request({
      url:'http://catch.infobigdata.com/applet/getTrace',
        data:{
          str:'{"current_page":1,"page_size":10,"date_name":"'+encodeURIComponent('一个月')+'"}',
          rnd:Math.random()
        },
        method:"POST",
        success:function(res) {
          if(res.data.code == 200) {
            var arr = [];
            for(var i =0;i < JSON.parse(res.data.result).data.length; i ++) {
              var obj = {};
              obj.id = JSON.parse(res.data.result).data[i].id;
              obj.message = JSON.parse(res.data.result).data[i].hotName;
              obj.updateDate = JSON.parse(res.data.result).data[i].updateTime;
              obj.arrayBiao = JSON.parse(res.data.result).data[i].typeNameArray;
              obj.hotImg = JSON.parse(res.data.result).data[i].hotImg;
              arr.push(obj);
            }
            pageSelf.setData({
                array:arr,
                "tittleopen1": true,
                "tittleopen2": true 
            })
          } else {
            wx.showToast({
              title: '暂时没有你想要的内容',
              iconic:'none',
              duration:2000
            })
          }
        }
    })
  },
  timeList9: function () {
    var pageSelf = this;
    wx.request({
      url: 'http://catch.infobigdata.com/applet/getTrace',
      data: {
        str: '{"current_page":1,"page_size":10,"date_name":"' + encodeURIComponent('一个月') + '"}',
        rnd: Math.random()
      },
      method: "POST",
      success: function (res) {
        if (res.data.code == 200) {
          var arr = [];
          for (var i = 0; i < JSON.parse(res.data.result).data.length; i++) {
            var obj = {};
            obj.id = JSON.parse(res.data.result).data[i].id;
            obj.message = JSON.parse(res.data.result).data[i].hotName;
            obj.updateDate = JSON.parse(res.data.result).data[i].updateTime;
            obj.arrayBiao = JSON.parse(res.data.result).data[i].typeNameArray;
            obj.hotImg = JSON.parse(res.data.result).data[i].hotImg;
            arr.push(obj);
          }
          pageSelf.setData({
            array: arr,
            "tittleopen1": true,
            "tittleopen2": true
          })
        } else {
          wx.showToast({
            title: '暂时没有你想要的内容',
            iconic: 'none',
            duration: 2000
          })
        }
      }
    })
  }
})

