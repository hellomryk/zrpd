//获取应用实例
var app = getApp()
Page({
  data:{
    isshake:true,
  },
  onload:function() {
    // shake开始
    // setInterval(function () {
    //   if (circleCount % 2 == 0) {
    //     this.setData({
    //       isshake: true
    //     })
    //   } else {
    //     this.setData({
    //       isshake: false
    //     })
    //   }
    //   circleCount++;
    //   if (circleCount == 2000) {
    //     circleCount = 0;
    //   }
    // }.bind(this), 2000);
    // shake结束

  },
  // 页面渲染完成 
  onReady: function () {
    var circleCount = 0;
    setInterval(function () {
      if (circleCount % 2 == 0) {
        this.setData({
           isshake:true
        })
      } else {
        this.setData({
          isshake:false
        })
      }
      circleCount++;
      if (circleCount == 2000) {
        circleCount = 0;
      }
    }.bind(this), 2000);
    // shake结束
  }
})

// Page({
//   onReady: function () {
//     this.animation = wx.createAnimation()
//   },
//   rotate: function () {
//     this.animation.rotate(Math.random() * 720 - 360).step()
//     this.setData({ animation: this.animation.export() })
//   },
//   scale: function () {
//     this.animation.scale(Math.random() * 2).step()
//     this.setData({ animation: this.animation.export() })
//   },
//   translate: function () {
//     this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
//     this.setData({ animation: this.animation.export() })
//   },
//   skew: function () {
//     this.animation.skew(Math.random() * 90, Math.random() * 90).step()
//     this.setData({ animation: this.animation.export() })
//   },
//   rotateAndScale: function () {
//     this.animation.rotate(Math.random() * 720 - 360)
//       .scale(Math.random() * 2)
//       .step()
//     this.setData({ animation: this.animation.export() })
//   },
//   rotateThenScale: function () {
//     this.animation.rotate(Math.random() * 720 - 360).step()
//       .scale(Math.random() * 2).step()
//     this.setData({ animation: this.animation.export() })
//   },
//   all: function () {
//     this.animation.rotate(Math.random() * 720 - 360)
//       .scale(Math.random() * 2)
//       .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
//       .skew(Math.random() * 90, Math.random() * 90)
//       .step()
//     this.setData({ animation: this.animation.export() })
//   },
//   allInQueue: function () {
//     this.animation.rotate(Math.random() * 720 - 360).step()
//       .scale(Math.random() * 2).step()
//       .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
//       .skew(Math.random() * 90, Math.random() * 90).step()
//     this.setData({ animation: this.animation.export() })
//   },
//   reset: function () {
//     this.animation.rotate(0, 0)
//       .scale(1)
//       .translate(0, 0)
//       .skew(0, 0)
//       .step({ duration: 0 })
//     this.setData({ animation: this.animation.export() })
//   }
// })

