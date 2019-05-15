var publics = require('../../public/public.js');
let page = 1;
let limit = 10;
let list = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [],
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    list = [];
    page = 1;
    this.datas()
  },
  onClick: function(e) {
    wx: wx.navigateTo({
      url: '../engin_details/engin_details?sid=' + e.currentTarget.dataset.id
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.datas()
  },
  datas: function() {
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/engin/list',
      data: {
        "page": page,
        "limit": limit
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data.data)
        if (res.data.data.totalPages > page) {
          page = page + 1;
          res.data.data.enginList.forEach((item, index, arr) => {
            arr[index].addTime = arr[index].addTime.replace(/([^\s]+)\s.*/, "$1");
            list.push(arr[index]);
          })
          this.setData({
            lists: list
          })
        } else {
          res.data.data.enginList.forEach((item, index, arr) => {
            arr[index].addTime = arr[index].addTime.replace(/([^\s]+)\s.*/, "$1");
            list.push(arr[index]);
          })
          this.setData({
            show: true,
            lists: list
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})