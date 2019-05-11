// pages/newsDetails/newsDetails.js
Page({
  data:{},
  onLoad:function(options){
    var that =this;
    wx.request({
      url: getApp().data.serviceUrl + '/wx/sysMessage/detail',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        // userId: options.userId,
        id: options.newsId
      },
      success: function (res) {
        console.log(res)
        var concentList = res.data.data;
        that.setData({
          date: concentList.addTime,
          content: concentList.content
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
    console.log(options)
  }
})