// pages/rankings/index.js
//引用Echarts插件
import * as echarts from '../../ec-canvas/echarts';
let chart = null;
//获取应用实例

const app = getApp();
var pageSelf=null;

Page({

    data: {
        listData: []
    },
    onLoad: function () {
        pageSelf = this;
        wx.request({
            url: "https://bulie.infobigdata.com/",
            // data: {

            // },
            header: {
                'content-type': 'application/json' //默认值
            },
            method: "POST",
            success: function (res) {
                if (res.data.result){
                    console.log(res.data)
                    pageSelf.setData({
                        listData: res.data.result,
                    });

                }
                
            }

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