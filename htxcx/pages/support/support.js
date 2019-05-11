var publics = require('../../public/public.js');
let lists = [];
let limit = 10;
let page = 1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listD: [],
    list: [],
    ind: 0,
    sid: '',
    show: false,
    types:'扶持'
  },
  onShow: function() {
    lists = [];
    page = 1;
    let that = this;
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/brand/categorylist',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({
          listD: res.data.data,
          sid: res.data.data[0].id
        })
        that.datas(res.data.data[0].id)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  qhClick: function(e) {
    lists = [];
    page = 1;
    let that = this;
    that.setData({
      ind: e.currentTarget.dataset.index,
      sid: e.currentTarget.dataset.id
    })
    that.datas(that.data.sid)
  },
  qxClick: function(e) {
    let that = this;
    // let id = e.currentTarget.dataset.id;
    wx: wx.navigateTo({
      url: '../training_details/training_details?sid=' + e.currentTarget.dataset.id +'&sum='+that.data.types
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    let that = this;
    that.datas(that.data.sid);
  },
  datas: function(sid) {
    let that = this;
    wx.showLoading({
      title: '玩命加载中',
    })
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/brand/list',
      data: {
        "brandCategoryId": sid,
        "page": page,
        "limit": limit
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if (res.data.data.totalPages >= page) {
          page = page + 1;
          res.data.data.brandList.forEach((item, index, arr) => {
            lists.push(arr[index]);
            arr[index].addTime = arr[index].addTime.replace(/([^\s]+)\s.*/, "$1")//切割日期时间;
          })
          that.setData({
            list: lists
          })
        } else {
          that.setData({
            show: true
          })
        }
        if (res.data.data.totalPages == 0) {
          that.setData({
            show: false
          })
        }
        wx.hideLoading();
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