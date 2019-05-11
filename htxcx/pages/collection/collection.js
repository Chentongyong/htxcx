// pages/demo/filter.js
var _self;
Page({
  data: {
    tenderlists:'tender-lists'
  },
  
  onLoad:function(options){
    console.log(options)
    this.setData({
      type: options.type
    })
    if (options.type == 1){
      wx.setNavigationBarTitle({
        title: '我的发布'
      })
    } else if (options.type == 2){
      wx.setNavigationBarTitle({
        title: '我的抢单'
      })
    } else if (options.type == 3){
      wx.setNavigationBarTitle({
        title: '我的浏览'
      })
    } else if (options.type == 4){
      wx.setNavigationBarTitle({
        title: '我的收藏'
      })
    }
  },
  // 跳转详情
  grabSheetDes: function (e) {
    wx: wx.showModal({
      title: '系统提示',
      content: '您需要消耗1金币或者10积分才能查看该信息',
      showCancel: true,
      cancelText: '金币',
      confirmText: '积分',
      cancelColor: '#2994E6',
      confirmColor: '#808080',
      success: function (res) {
        if (res.confirm) {
          // wx: wx.navigateTo({
          //   url: '../login/login',
          //   success: function(res) {},
          //   fail: function(res) {},
          //   complete: function(res) {},
          // })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
 
})