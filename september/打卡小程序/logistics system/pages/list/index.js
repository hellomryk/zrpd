//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    array: [{
        imgurl: '/images/list_xinxi.png',
        title:'信息通知',
        text:'您的联系人正在使用系统，快去看看吧。',
        time:"9:30",
        num:'3'
      }, {
            imgurl: '/images/list_img.png',
            title: '王振华',
            text: '你的信息已提交',
            time: "3月16号",
            num: '3'
        }, {
            imgurl: '/images/list_img.png',
            title: '王振华',
            text: '你的信息已提交',
            time: "3月16号",
            num: '3'
        }, {
            imgurl: '/images/list_img.png',
            title: '王振华',
            text: '你的信息已提交',
            time: "3月16号",
            num: '3'
        }, {
            imgurl: '/images/list_img.png',
            title: '王振华',
            text: '你的信息已提交',
            time: "3月16号",
            num: '3'
        }, {
            imgurl: '/images/list_img.png',
            title: '王振华',
            text: '你的信息已提交',
            time: "3月16号",
            num: '3'
        }, {
            imgurl: '/images/list_img.png',
            title: '王振华',
            text: '你的信息已提交',
            time: "3月16号",
            num: '3'
        },  {
            imgurl: '/images/list_img.png',
            title: '王振华',
            text: '你的信息已提交',
            time: "3月16号",
            num: '3'
        },  {
            imgurl: '/images/list_img.png',
            title: '王振华',
            text: '你的信息已提交',
            time: "3月16号",
            num: '3'
        },  {
            imgurl: '/images/list_img.png',
            title: '王振华',
            text: '你的信息已提交',
            time: "3月16号",
            num: '3'
        },  {
            imgurl: '/images/list_img.png',
            title: '王振华',
            text: '你的信息已提交',
            time: "3月16号",
            num: '3'
        },  {
            imgurl: '/images/list_img.png',
            title: '王振华',
            text: '你的信息已提交',
            time: "3月16号",
            num: '3'
        },]

  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {

 
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
