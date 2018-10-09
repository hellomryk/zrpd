// pages/symptomlist/symptomlist.js
var _this=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: true,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '地图',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas']
      }
    ],
    windowHeight: '',//
    ispopup_bottom:false,
    ispopup_num:0,
    ispopup_arr:[],
    windowHeightChange:100,
    array:[]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.array;
    console.log(e)
    console.log(id)
    console.log(list)
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        // list[i].open = !list[i].open
        list[i].open = true
      } else {
        list[i].open = false
      }
    }
    this.setData({
      array: list
    });
  },
  kindToggleSon: function(e) {
      var id = e.currentTarget.id;
    console.log("kaishi")
    console.log(e)
    console.log(e.currentTarget.id)
    var str = e.currentTarget.id;
    var arr = str.split("_")
    console.log(arr)
    // console.log(e.currentTarget.id.split("_")[0])
    // console.log(this.data.array)
    console.log(arr[0]-1)
    var array = this.data.array; 
    var ispopup_arr = this.data.ispopup_arr;
    var list = array[arr[0]-1].smallClassification;
    console.log(list)
    console.log("jiehsu")
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].pid == id) {
        if (list[i].skillopen == false) {
          list[i].skillopen = !list[i].skillopen
          var ispopup_obj = {}
          ispopup_obj.selectdesize = list[i].skillname
          ispopup_arr.push(ispopup_obj)
        } else {
          list[i].skillopen = !list[i].skillopen;
          for (var j = 0; j < ispopup_arr.length;j++) {
            if (ispopup_arr[j].selectdesize == list[i].skillname) {
              ispopup_arr.splice(j,1)
              console.log(1)
            }
          }
        }

      } else {
        // list[i].skillopen = false
      }
    }
    console.log("son")
    console.log(array)
    console.log(ispopup_arr)
    this.setData({
      array: array,
      ispopup_arr: ispopup_arr
    });
    var popupnum = this.data.ispopup_arr.length 
    if (popupnum == 0) {
      this.setData({
        ispopup_bottom:false,
        ispopup_num: popupnum,
        windowHeightChange:0,
      })
    } else {
      this.setData({
        ispopup_bottom:true,
        ispopup_num: popupnum,
        windowHeightChange:349,
      })
    }
  },
  kindToggleBottom: function(e) {
    var id = e.currentTarget.id;
    console.log("kaishi")
    console.log(e)
    var array = this.data.array;
    var ispopup_arr = this.data.ispopup_arr;
    for(var i = 0; i < array.length; i++) {
      for (var j = 0; j < array[i].smallClassification.length; j ++) {
        if (id == array[i].smallClassification[j].skillname) {
          array[i].smallClassification[j].skillopen = !array[i].smallClassification[j].skillopen
        }
      }
    }
    console.log(ispopup_arr.length)
    for (var i = 0; i < ispopup_arr.length; i ++) {
      if (ispopup_arr[i].selectdesize == id) {
        ispopup_arr.splice(i,1)
      }
    }
    this.setData({
      array: array,
      ispopup_arr: ispopup_arr
    });
    var popupnum = this.data.ispopup_arr.length
    if (popupnum == 0) {
      this.setData({
        ispopup_bottom: false,
        ispopup_num: popupnum,
        windowHeightChange:0,
      })
    } else {
      this.setData({
        ispopup_bottom: true,
        ispopup_num: popupnum,
        windowHeightChange:349,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _this=this;
    const selfPage = this;
    //计算屏幕高度
    wx.getSystemInfo({
      success: function (res) {
        let clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR;
        console.log(calc)
        selfPage.setData({
          windowHeight: calc
        })
      }
    })
    // 获取小程序id开始
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    console.log(123)
    wx.login({
      success: function (res) {
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
          var l = 'https://chronic.infobigdata.com/appletApi/getUserInfo'
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
                openId: obj.openid
              })
              console.log("打印openid结束")
              wx.setStorageSync('user', obj); //存储openid 
              //发送输入信息开始
              wx.request({
                url: 'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/doctorqs',
                data: {
                  openid: obj.openid,
                  issue: encodeURI("通过症状列表选择")
                },
                method: 'GET',
                success: function (data) {
                  console.log(data)
                  console.log(JSON.parse(data.data.data))
                  selfPage.setData({
                    array: JSON.parse(data.data.data)
                  })
                  // console.log(data.data.prompt.split('['))
                  // console.log(JSON.parse("{'key':122}"))

                  //滚动到底部

                }
              })
              // 发送输入信息结束
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  //获取小程序id结束
  },
  wancheng() {
  
    const selfPage = this;
    console.log(selfPage.data.ispopup_arr)
    console.log(JSON.stringify(selfPage.data.ispopup_arr))
    var arr = []
    for (var i = 0; i < selfPage.data.ispopup_arr; i ++) {
      arr.push(selfPage.data.ispopup_arr[i].selectdesize)
    }
    console.log(arr)

    // 获取小程序id开始
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    console.log(123)
    wx.login({
      success: function (res) {
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
          var l = 'https://chronic.infobigdata.com/appletApi/getUserInfo'
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
                openId: obj.openid
              })
              console.log("打印openid结束")
              wx.setStorageSync('user', obj); //存储openid 
              console.log(123344444)
              console.log(_this.data.ispopup_arr)
              //zhenghuawrite
              var w_ar = '';//选中数据发送储存
              for (var s = 0; s < _this.data.ispopup_arr.length;s++){
                w_ar+=_this.data.ispopup_arr[s].selectdesize+','
              }
             
              w_ar = w_ar.substring(0, w_ar.length-1);
               console.log(w_ar)
              console.log(123344444)
              //zhenghuawrite
              //发送输入信息开始
              wx.request({
                url: 'https://chronic.infobigdata.com/doctorapplet/f52024d75d4348f38cdad3670d209c1e/doctorqs',
                data: {
                  openid: obj.openid,
                  issue: encodeURI(w_ar),
                  clazzstep:"3"
                },
                method: 'GET',
                success: function (data) {
                 
                  // console.log(data.data.prompt.split('['))
                  // console.log(JSON.parse("{'key':122}"))

                  //滚动到底部

                }
              })
              // 发送输入信息结束
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  //获取小程序id结束
  },
  //选择确认按钮
  confirmbtn() {
    

  
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