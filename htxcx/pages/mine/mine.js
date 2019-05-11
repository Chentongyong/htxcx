// pages/mine/mine.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //tabbar
    tabbar: {},
    grade:'普通'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    app.editTabbar();
  },
  login: function () {//跳转登陆
    wx: wx.navigateTo({
      url: '../login/login'
    })
  },
  integral: function () {//跳转积分
    wx: wx.navigateTo({
      url: '../integral/integral'
    })
  },
  myset: function(){//跳转设置
    wx: wx.navigateTo({
      url: '../myset/myset'
    })
  },
  recharge: function () {//跳转充值金币
    wx: wx.navigateTo({
      url: '../recharge/recharge'
    })
  },
  memClick:function(){//跳转会员
    let that = this;
    wx:wx.navigateTo({
      url: '../member/member?grade=' + that.data.grade
    })
  },
  myrelease: function(e) {
    wx: wx.navigateTo({
      url: '../collection/collection?type=' + 1,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  myproject: function(e) {
    wx: wx.navigateTo({
      url: '../collection/collection?type=' + 2,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  mybrowse: function(e) {
    wx: wx.navigateTo({
      url: '../collection/collection?type=' + 3,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  mycollection: function(e) {
    wx: wx.navigateTo({
      url: '../collection/collection?type=' + 4,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  feedback: function(e) {
    wx: wx.navigateTo({
      url: '../feedback/feedback',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})