// pages/xqing/index.js
//获取应用实例
const app = getApp();

var _this = null,id=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  id:"",
  address: [
      {
          "id": 11,
          "content": "崔永元炮轰范冰冰 影视圈“炸了！！！”",
          "time": "三小时前",
          "url": "新浪财经"
      },
      {
          "id": 12,
          "content": "崔永元炮轰范冰冰 影视圈“炸了！！！”",
          "time": "三小时前",
          "url": "新浪财经"
      },
      {
          "id": 13,
          "content": "崔永元炮轰范冰冰 影视圈“炸了！！！”",
          "time": "三小时前",
          "url": "新浪财经"
      },
      {
          "id": 12,
          "content": "崔永元炮轰范冰冰 影视圈“炸了！！！”",
          "time": "三小时前",
          "url": "新浪财经"
      },
      {
          "id": 13,
          "content": "崔永元炮轰范冰冰 影视圈“炸了！！！”",
          "time": "三小时前",
          "url": "新浪财经"
      },
      {
          "id": 12,
          "content": "崔永元炮轰范冰冰 影视圈“炸了！！！”",
          "time": "三小时前",
          "url": "新浪财经"
      },
      {
          "id": 13,
          "content": "崔永元炮轰范冰冰 影视圈“炸了！！！”",
          "time": "三小时前",
          "url": "新浪财经"
      }
  ],
  color:true
  },
tab:function(){
    _this.setData({
        color: true
    })
},
    tabone: function () {
        _this.setData({
            color: false
        })
    },
    remover: function () {
        wx.showModal({
            content: '确定要删除主题吗？',
            confirmColor:'#008000',
            confirmText: '删除',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      _this = this;
      wx.setNavigationBarTitle({
          title: '',
      })  //抬头导航设置
      id = options.id;
      _this .setData({
        id:id
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