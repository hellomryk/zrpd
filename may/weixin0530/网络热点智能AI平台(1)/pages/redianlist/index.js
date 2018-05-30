Page({
  data: {
    "researchactive":false,
    "jiantoushow":true,
    array:[]
  },
  bindReSearch: function() {
    console.log(this.data.researchactive)
    if (this.data.researchactive) {
        this.setData({
          "researchactive": true
        })
    } 
    else {
        this.setData({
          "researchactive": true
        })
    }
  },
  bindReList:function(e) {
    var id= e.currentTarget.id;
    var list = this.data.array;
    for(var i = 0; i < list.length; i ++) {
        if(list[i].id == id) {
            list[i].open = !list[i].open;
        } else {
          list[i].open = false;
        }
    }
    this.setData({
      array:list
    });
  },
  // 热点追踪请求数据
 onLoad: function () {
   var reSearch = this;
   wx.request({
     url:"http://catch.infobigdata.com//applet/getReal",
     data: {
       str:'{"current_page":1,"page_size":10,"date_name":"'+encodeURIComponent('半年内')+'"}',
       rnd:Math.random()
     },
     method:"POST",
     success: function (res) {
        if(res.data.code == 200) {
          var arr = []
          for (var i = 0; i < JSON.parse(res.data.result).data.length;i ++) {
              var obj = {};
              obj.id = JSON.parse(res.data.result).data[i].id;
              obj.message = JSON.parse(res.data.result).data[i].keyword;
              obj.open = false;
              arr.push(obj)
          }
          console.log(arr)
          reSearch.setData({
            array:arr
          })
        } else {
          wx.showToast({
            title: '暂时没有你想要的数据',
            iconic:none,
            duration:2000
          })
        }
     }
   })
 }
});
