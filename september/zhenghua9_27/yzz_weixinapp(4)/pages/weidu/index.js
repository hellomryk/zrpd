// pages/weidu/index.js
var _this=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      open:false,
      name:"慢性扁桃体炎",
      list: [
          {
              id: '1',
              name: '医保疾病',
              open: true,
              pages: '终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下'
          }
          ,
          {
              id: '2',
              name: '易感人群',
              open: false,
              pages: '终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下'
          }
          ,
          {
              id: '3',
              name: '患病比例',
              open: false,
              pages: '终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下'
          }
          ,
          {
              id: '4',
              name: '传染方式',
              open: false,
              pages: '终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下'
          }
          ,
          {
              id: '5',
              name: '常用检查',
              open: false,
              pages: '终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下'
          }
          ,
          {
              id: '6',
              name: '症状表现',
              open: false,
              pages: '终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下'
          }
          ,
          {
              id: '7',
              name: '并发疾病',
              open: false,
              pages: '终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下'
          }
          ,
          {
              id: '8',
              name: '就诊科室',
              open: false,
              pages: '终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下'
          }
          ,
          {
              id: '9',
              name: '就诊科室',
              open: false,
              pages: '终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下'
          }
          ,
          {
              id: '10',
              name: '就诊科室',
              open: false,
              pages: '终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下'
          }
          ,
          {
              id: '11',
              name: '就诊科室',
              open: false,
              pages: '终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下'
          }
      ]

  },

    kindToggle: function (e) {
        var id = e.currentTarget.id, list = _this.data.list;
        // console.log(e)
        // console.log(id)
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        _this.setData({
            list: list
        });
    },
    anniu:function(){
        if (_this.data.open){
            _this.setData({
                open: false
            });
          
        }else{
            _this.setData({
                open: true
            });
        }
       
    },
    anniutop:function(){
        console.log(3333333333)
        if (_this.data.open) {
            _this.setData({
                open: false
            });

        } else {
            _this.setData({
                open: true
            });
        }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        console.log(options.id)
      _this = this;
      _this.setData({
          name: options.id
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