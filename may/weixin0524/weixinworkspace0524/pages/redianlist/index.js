Page({
  data: {
    "researchactive":false,
    "jiantoushow":true,
    array:[{
      id:0,
      message:'人工智能影响就业吗?',
      open:false
    },{
      id:1,
      message:'人工智能发展行动计划',
      open: false
    },{
      id:2,
      message:'人工智能发展前景',
      open: false
    }, {
      id:3,
      message: '人工智能影响就业吗?',
      open: false
    }, {
      id:4,
      message: '人工智能发展行动计划',
      open: false
    }, {
      id:5,
      message: '人工智能影响就业吗?',
      open: false
    }, {
      id:6,
      message: '人工智能发展行动计划',
      open: false
    }, {
      id: 7,
      message: '人工智能发展行动计划',
      open: false
    }, {
      id: 8,
      message: '人工智能发展行动计划',
      open: false
    }, {
      id: 9,
      message: '人工智能发展行动计划',
      open: false
    }]
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
    console.log(id)
    console.log(list)
    console.log(list[0].id)
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
  }
  // kindToggle: function (e) {
  //   var id = e.currentTarget.id, list = this.data.list;
  //   for (var i = 0, len = list.length; i < len; ++i) {
  //     if (list[i].id == id) {
  //       if (list[i].url) {
  //         wx.navigateTo({
  //           url: 'pages/' + list[i].url
  //         })
  //         return
  //       }
  //       list[i].open = !list[i].open
  //     } else {
  //       list[i].open = false
  //     }
  //   }
  //   this.setData({
  //     list: list
  //   });
  // }


});