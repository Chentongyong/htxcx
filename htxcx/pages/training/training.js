var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  onClick:function(e){
    let sum = e.currentTarget.dataset.text;
    let sid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../clean/clean?sum='+sum+'&sid='+sid,
    })
  },
  onShow: function () {
    let that = this;
    wx.showLoading({
      title: '正在加载数据',
    })
    wx:wx.request({
      url: publics.ttpss().httpst +'/wx/train/categorylist',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({
          list: res.data.data
        })
        setTimeout(function () {
          wx.hideLoading();
          return false;
        }, 1000)
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