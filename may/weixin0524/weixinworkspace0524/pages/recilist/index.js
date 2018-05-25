//获取应用实例
const app = getApp();

Page({
  data:{
    'tittleopen1':true,
    'tittleopen2': true,
    array:[{
      id:0,
      message:"扬州台州",
      biaoqian1: "新闻",
      biaoqian2: "新闻",
      biaoqian3: "财经新闻",
      biaoqian4: "新闻",
      updatetime:"8小时前"
    }, {
      id: 1,
      message: "扬州台州",
      biaoqian1: "新闻",
      biaoqian2: "新闻",
      biaoqian3: "财经新闻",
      biaoqian4: "新闻",
      updatetime: "8小时前"
      }, {
        id: 2,
        message: "扬州台州",
        biaoqian1: "新闻",
        biaoqian2: "新闻",
        biaoqian3: "财经新闻",
        biaoqian4: "新闻",
        updatetime: "8小时前"
    }, {
      id: 3,
      message: "扬州台州",
      biaoqian1: "新闻",
      biaoqian2: "新闻",
      biaoqian3: "财经新闻",
      biaoqian4: "新闻",
      updatetime: "8小时前"
      }, {
        id: 4,
        message: "扬州台州",
        biaoqian1: "新闻",
        biaoqian2: "新闻",
        biaoqian3: "财经新闻",
        biaoqian4: "新闻",
        updatetime: "8小时前"
    }, {
      id: 5,
      message: "扬州台州",
      biaoqian1: "新闻",
      biaoqian2: "新闻",
      biaoqian3: "财经新闻",
      biaoqian4: "新闻",
      updatetime: "8小时前"
      }, {
        id: 6,
        message: "扬州台州",
        biaoqian1: "新闻",
        biaoqian2: "新闻",
        biaoqian3: "财经新闻",
        biaoqian4: "新闻",
        updatetime: "8小时前"
      }]
  },
  recixiala1: function () {
    console.log(this.data.researchactive)
    if (this.data.tittleopen1) {
      this.setData({
        "tittleopen1":false
      })
    }else {
      this.setData({
        "tittleopen1": true
      })
    }
  },
  recixiala2: function () {
    console.log(this.data.researchactive)
    if (this.data.tittleopen2) {
      this.setData({
        "tittleopen2": false
      })
    } else {
      this.setData({
        "tittleopen2": true
      })
    }
  }
  // bindReCiList: function (e) {
  //   var id = e.currentTarget.id;
  //   var list = this.data.array;
  //   console.log(id)
  //   console.log(list)
  //   console.log(list[0].id)
  //   for (var i = 0; i < list.length; i++) {
  //     if (list[i].id == id) {
  //       list[i].open = !list[i].open;
  //     } else {
  //       list[i].open = false;
  //     }
  //   }
  //   this.setData({
  //     array: list
  //   });
  // }
});