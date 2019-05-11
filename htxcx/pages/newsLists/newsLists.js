var publics = require('../../public/public.js');
Page({
  data:{},
  onLoad:function(){
    var that = this;
    wx.request({
      url: publics.ttpss().httpst + '/wx/sysMessage/list',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        // userId: options.userId,
        // id: options.orderId
      },
      success: function (res) {
        console.log(res)
        var concentList = res.data.data.sysMessageList;
        that.setData({
          concentList
        })

      },
      fail: function (e) {
        wx.showToast({
          title: '网络断开，稍后重试',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  newsDetails:function(e){
    console.log(e)
    var newsId = e.currentTarget.dataset.id
    wx:wx.navigateTo({
      url: '../newsDetails/newsDetails?newsId=' + newsId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})