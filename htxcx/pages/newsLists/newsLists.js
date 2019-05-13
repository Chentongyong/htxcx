var publics = require('../../public/public.js');
let page = 1;
let limit = 10;
Page({
  data: {},
  onLoad: function() {
    page = 1;
    this.datas()
  },
  newsDetails: function(e) {
    var newsId = e.currentTarget.dataset.id
    wx: wx.navigateTo({
      url: '../newsDetails/newsDetails?newsId=' + newsId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onReachBottom:function(){
    this.datas()
  },
  datas:function(){
    var that = this;
    wx.showLoading({
      title: '正在加载数据',
    })
    wx.request({
      url: publics.ttpss().httpst + '//wx/sysMessage/list',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        //"userId": options.userId,
        "page": page,
        "limit": limit
      },
      success: function (res) {
        if (res.data.data.totalPages >= page) {
          page = page + 1;
          res.data.data.sysMessageList.forEach((item, index, arr) => {
            arr[index].addTime = arr[index].addTime.replace(/([^\s]+)\s.*/, "$1")
          })
          that.setData({
            concentList: res.data.data.sysMessageList
          })
        }
        setTimeout(function () {
          wx.hideLoading();
          return false;
        }, 1000)
      },
      fail: function (e) {
        wx.showToast({
          title: '网络断开，稍后重试',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})