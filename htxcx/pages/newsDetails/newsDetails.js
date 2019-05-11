var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx:wx.request({
      url: publics.ttpss().httpst + '/wx/sysMessage/detail',
      data: {
        "id": options.newsId
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        res.data.data.addTime = res.data.data.addTime.replace(/([^\s]+)\s.*/, "$1")
        this.setData({
          datas: res.data.data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
