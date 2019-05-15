var publics = require('../../public/public.js');
var page = 1;
var limit = 10;
let sums = [];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listBox: [],
    sum: '',
    pages: '',
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: options.sum
    })
    this.setData({
      sum: options.sum
    })
  },
  onShow: function() {
    page = 0;
    sums = [];
    console.log(this.data.sum)
    this.onReachBottom()
  },
  xqClick: function(e) { //跳转详情
    wx: wx.navigateTo({
      url: '../activi_details/activi_details?sum=' + this.data.sum + '&sid=' + e.currentTarget.dataset.id
    })
  },
  onReachBottom: function() {
    let that = this;
    let sum = this.data.sum;
    let data = {
      "page": page,
      "limit": limit
    }
    wx.showLoading({
      title: '玩命加载中',
    })
    if (sum == '活动风采') {
      wx: wx.request({
        url: publics.ttpss().httpst +'/wx/activity/list',
        data: data,
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          if (res.data.data.totalPages >page) {
            page = page + 1;
            res.data.data.activityList.forEach((item, index, arr) => {
              sums.push(arr[index])
            })
            that.setData({
              pages: res.data.data.totalPages,
              listBox: sums
            })
          } else {
            res.data.data.activityList.forEach((item, index, arr) => {
              sums.push(arr[index])
            })
            that.setData({
              show: true
            })
          }
          wx.hideLoading();
        },
        fail: function(res) {
          wx.hideLoading();
        },
      })
    }
    if (sum == '热点资讯') {
      wx: wx.request({
        url: publics.ttpss().httpst +'/wx/news/list',
        data: data,
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          if (page <= res.data.data.totalPages) {
            page = page + 1;
            res.data.data.newsList.forEach((item, index, arr) => {
              sums.push(arr[index])
            })
            that.setData({
              pages: res.data.data.totalPages,
              listBox: sums
            })
          } else {
            that.setData({
              show: true
            })
          }
          wx.hideLoading();
        },
        fail: function(res) {
          wx.hideLoading();
        },
      })
    }

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})