var publics = require('../../public/public.js');
let list = [];
let page = 0;
let limit = 10;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sid: '',
    listBox:[],
    show: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var sum = options.sum;
    wx.setNavigationBarTitle({
      title: options.sum
    })
    this.setData({
      sid: options.sid
    })
  },

  onShow: function() {
    let that = this;
    list = [];
    this.onReachBottom()
  },
  onReachBottom: function() {
    let that = this;
    wx.showLoading({
      title: '玩命加载中',
    })
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/train/list',
      data: {
        "page": page,
        "limit": limit,
        "trainCategoryId": that.data.sid
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if (res.data.data.totalPages > page) {
          page = page + 1;
          res.data.data.trainMaterialsList.forEach((item, index, arr) => {
            list.push(arr[index])
          })
          that.setData({
            listBox: list
          })
        } else {
          that.setData({
            show: true
          })
        }
        if (res.data.data.totalPages ==0) {
          that.setData({
            show: false
          })
        }
        wx.hideLoading();
      },
      fail: function(res) {
        wx.hideLoading();
      },
      complete: function(res) {},
    })
  },
  onClick:function(e){
    wx:wx.navigateTo({
      url: '../activi_details/activi_details?sum=' +'清洗&sid='+e.currentTarget.dataset.id,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})