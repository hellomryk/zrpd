// pages/shopingps/index.js
var _this = null, url = 'http://192.168.1.107:8081';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id: 0,//商品id
      array: [],//说明书
      goods_list: [],//商品图片
      indicatorDots: false,
      vertical: false,
      autoplay: false,
      circular: false,
      interval: 2000,
      duration: 500,
      previousMargin: 0,
      nextMargin: 0,
      index:0,
      animation: '',
      minPrice:'--',//现价
      maxPrice: '--',//原价
      goodName: '--',//商品名称
      introduce: '--',//商品简介
      specName: '',//规格单位
      specValue: '',//规格数量
      specName1: '',//规格单位
      specValue1: '',//规格数量
      count: 0,//购物车数量
      cont: 0,//销售量

  },
    swiperChange: function (e) {
        // console.log(123);
        // console.log(e);
        _this.setData({
            index: e.detail.current   //获取当前轮播图片的下标
        })
    },
    touchOnGoods:function(){
        _this.setData({
            count: _this.data.count+1
        })
        wx.showToast({
            title: '添加成功！',
            icon: 'none',
            duration: 600
        })
        // _this.setData({
        //     hide_good_box: false
        // })
        // //展示
        // _this.animation.translateY(350).step({ duration: 400 }); 

        // _this.setData({
        //     //输出动画
        //     animation: _this.animation.export()
        // })
        // _this.setData({
        //     hide_good_box: true
        // })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      _this=this;
      _this.setData({
          id: options.id
      })
      // 查详情
      wx.request({
          url: url + '/freeter-api/good/getGoodDetailAll',
          data: {
              goodId: options.id
          },
          header: {
              'content-type': 'application/json' // 默认值
          },
          //   method: "POST",
          success: function (res) {
            //   console.log(res.data)
              var random = Math.floor(Math.random() * 1000);    
              _this.setData({
                  goods_list: res.data.data.image,
                  minPrice: res.data.data.minPrice,
                  maxPrice: res.data.data.maxPrice,
                  introduce: res.data.data.good.introduce,
                  goodName: res.data.data.good.goodName,
                  cont: random
              })
          }
      })

      // 查规格
      wx.request({
          url: url + '/freeter-api/goodspecvalue/getSpecNameValueListByGoodId',
          data: {
              goodId: options.id
          },
          header: {
              'content-type': 'application/json' // 默认值
          },
          //   method: "POST",
          success: function (res) {
            //   console.log(res.data.data)
              _this.setData({
                  specName: res.data.data[0].specName,
                  specValue: res.data.data[0].mapList[0].specValue,
                  specName1: res.data.data[1].specName,
                  specValue1: res.data.data[1].mapList[0].specValue
              })
          }
      })

      // 查说明书
      wx.request({
          url: url + '/freeter-api/goodparameter/Model',
          data: {
              goodId: options.id
          },
          header: {
              'content-type': 'application/json' // 默认值
          },
          //   method: "POST",
          success: function (res) {
            //   console.log(res.data)
              _this.setData({
                  array: res.data.data
              })
          }
      })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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