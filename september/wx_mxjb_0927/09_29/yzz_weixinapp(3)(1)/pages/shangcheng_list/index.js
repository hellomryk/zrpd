// pages/shangcheng_list/index.js
var _this = null, url ='http://192.168.1.107:8081';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bottom:true,
      orderBy_top:'',
      topId:173,
      list: [
          { checked: true, id: "111", label: "全部产品", value: 0 },
          { checked: false, id: "112", label: "艾灸与热敷", value: 1 },
          { checked: false, id: "113", label: "苗乡三七", value: 2 },
          { checked: false, id: "114", label: "胃肠调理", value: 3 },
          { checked: false, id: "115", label: "贵宾服务卡", value: 4 },
          { checked: false, id: "116", label: "三高调节", value: 5 },
          ],
      list1: [
          { checked: true, id: "111", label: "综合排序", value: 0 },
          { checked: false, id: "112", label: "按销量", value: 1 },
          { checked: false, id: "113", label: "按价格", value: 2 }
      ],
      listbox: [
          { id: "111", xianjia: 398, yuanjia: 408, baoyou: true, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url:"/pics/shangpin.jpg"},
          { id: "112", xianjia: 398, yuanjia: 408, baoyou: true, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url: "/pics/shangpin.jpg" },
          { id: "113", xianjia: 398, yuanjia: 408, baoyou: false, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url: "/pics/shangpin.jpg"},
          { id: "114", xianjia: 398, yuanjia: 408, baoyou: true, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url: "/pics/shangpin.jpg"},
         
      ],
  },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = _this.data.list;
        console.log(id)
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].categoryId == id) {
                list[i].checked = !list[i].checked
            }
            else {
                list[i].checked = false
            }
        }
        console.log(list)
        _this.setData({
            list: list,
            topId:id
        });
         if(id == 211314) {
           wx.request({
             url: url + '/freeter-api/good/getGoodSearchAll',
             data: {
               orderBy:'sale'
             },
             dataType: 'get',
             success: function (res) {
               console.log(res)
               console.log(JSON.parse(res.data))
               console.log(JSON.parse(res.data).data.good)
               console.log(JSON.parse(res.data).data.good[0])
               var arrayGoodList = [];
               for (var i = 0; i < JSON.parse(res.data).data.good.length; i++) {
                 var obj = {
                   xianjia: JSON.parse(res.data).data.good[i].showPrice,
                   yuanjia: JSON.parse(res.data).data.good[i].showDiscountPrice,
                   name: JSON.parse(res.data).data.good[i].goodName,
                   ps: JSON.parse(res.data).data.good[i].introduce,
                   url: JSON.parse(res.data).data.good[i].picImg,
                   baoyou: true,
                   id: JSON.parse(res.data).data.good[i].goodId
                 }
                 arrayGoodList.push(obj)
               }
               _this.setData({
                 topId:173,
                 listbox: arrayGoodList
               })
             }
           })
        } else {
           wx.request({
             url: url + '/freeter-api/good/getGoodSearchAll',
             data: {
               categoryId: _this.data.topId
             },
             dataType: 'get',
             success: function (res) {
               console.log(res)
               console.log(JSON.parse(res.data))
               console.log(JSON.parse(res.data).data.good)
               console.log(JSON.parse(res.data).data.good[0])
               var arrayGoodList = [];
               for (var i = 0; i < JSON.parse(res.data).data.good.length; i++) {
                 var obj = {
                   xianjia: JSON.parse(res.data).data.good[i].showPrice,
                   yuanjia: JSON.parse(res.data).data.good[i].showDiscountPrice,
                   name: JSON.parse(res.data).data.good[i].goodName,
                   ps: JSON.parse(res.data).data.good[i].introduce,
                   url: JSON.parse(res.data).data.good[i].picImg,
                   baoyou: true,
                   id: JSON.parse(res.data).data.good[i].goodId
                 }
                 arrayGoodList.push(obj)
               }
               _this.setData({
                 listbox: arrayGoodList
               })
             }
           })
        }
        
    },
    kindToggle1: function (e) {
        var id = e.currentTarget.id, list = _this.data.list1;
        console.log(e)
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].checked = !list[i].checked
            }
            else {
                list[i].checked = false
            }
        }
        if(id == 111) {
          _this.setData({
            orderBy_top:'sale'
          })
        } else if( id == 112) {
          _this.setData({
            orderBy_top: 'sale'
          })
        } else {
          _this.setData({
            orderBy_top: 'price'
          })
        }
        console.log(list)
        _this.setData({
            list1: list
        });
      console.log(_this.data.topId)
      console.log(_this.data.orderBy_top)
      wx.request({
        url: url + '/freeter-api/good/getGoodSearchAll',
        data: {
          categoryId: _this.data.topId,
          orderBy: _this.data.orderBy_top
        },
        dataType: 'get',
        success: function (res) {
          console.log(res)
          console.log(JSON.parse(res.data))
          console.log(JSON.parse(res.data).data.good)
          console.log(JSON.parse(res.data).data.good[0])
          var arrayGoodList = [];
          for (var i = 0; i < JSON.parse(res.data).data.good.length; i++) {
            var obj = {
              xianjia: JSON.parse(res.data).data.good[i].showPrice,
              yuanjia: JSON.parse(res.data).data.good[i].showDiscountPrice,
              name: JSON.parse(res.data).data.good[i].goodName,
              ps: JSON.parse(res.data).data.good[i].introduce,
              url: JSON.parse(res.data).data.good[i].picImg,
              baoyou: true,
              id: JSON.parse(res.data).data.good[i].goodId
            }
            arrayGoodList.push(obj)
          }
          _this.setData({
            listbox: arrayGoodList
          })
        }
      })
    },
  toDetailPage(e) {
    const id = e.currentTarget.id;
    wx.navigateTo({
      url:'/pages/shopingps/index?id='+id
    })
  },
    loadMore: function () { // 触底加载更多
    console.log(2222222222222)
        let len = _this.data.listbox.length,
            lastItem = _this.data.listbox;
        _this.setData({
            bottom: false
        });

        lastItem.push({ id: "111", xianjia: 398, yuanjia: 408, baoyou: true, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url:"/pics/shangpin.jpg"})
        lastItem.push({ id: "111", xianjia: 398, yuanjia: 408, baoyou: true, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url: "/pics/shangpin.jpg" })
        lastItem.push({ id: "111", xianjia: 398, yuanjia: 408, baoyou: true, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url: "/pics/shangpin.jpg" })
        lastItem.push({ id: "111", xianjia: 398, yuanjia: 408, baoyou: true, name: "远红外线温灸炉（1个...", ps: "台湾红外温灸炉 祛湿排毒润容颜", url: "/pics/shangpin.jpg" })
            _this.setData({
                listbox: lastItem
            })
        _this.setData({
            bottom: true
        });
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
         _this=this;

    // 查分类
      wx.request({
        url: url +'/freeter-api/category/search',
          data: {
              type:2
          },
          header: {
              'content-type': 'application/json' // 默认值
          },
        //   method: "POST",
          success: function (res) {
            console.log(res.data)
              console.log(res.data.data)
              res.data.data.unshift({ categoryId: 211314, name: "全部商品", pageDescription: null, pageKeyword: null, pageTitle: null, parentId: 0, remarks: null, showInHot: 0, showInNav: 0, showInTop: 0, sort: 0, status: 1, type: 1 })
              for (let s = 0; s < res.data.data.length;s++){
                  if(s==0){
                      res.data.data[s].checked=true;
                      res.data.data[s].value = s;
                  }else{
                      res.data.data[s].checked = false;
                      res.data.data[s].value = s;
                  }
              }
              console.log(res.data.data)
              _this.setData({
                  list: res.data.data
              });
          }
      })

     // 查商品
    wx.request({
      url: url + '/freeter-api/good/getGoodSearchAll',
      data: {
        orderBy: 'sale'
      },
      dataType: 'get',
      success: function (res) {
        console.log(res)
        console.log(JSON.parse(res.data))
        console.log(JSON.parse(res.data).data.good)
        console.log(JSON.parse(res.data).data.good[0])
        var arrayGoodList = [];
        for (var i = 0; i < JSON.parse(res.data).data.good.length; i++) {
          var obj = {
            xianjia: JSON.parse(res.data).data.good[i].showPrice,
            yuanjia: JSON.parse(res.data).data.good[i].showDiscountPrice,
            name: JSON.parse(res.data).data.good[i].goodName,
            ps: JSON.parse(res.data).data.good[i].introduce,
            url: JSON.parse(res.data).data.good[i].picImg,
            baoyou: true,
            id: JSON.parse(res.data).data.good[i].goodId
          }
          arrayGoodList.push(obj)
        }
        _this.setData({
          topId: 173,
          listbox: arrayGoodList
        })
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