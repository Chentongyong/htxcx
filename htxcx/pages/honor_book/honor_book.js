const publics = require('../../public/public.js');
let list = [];
let page = 1;
let limit = 7;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.datas()
  },
  djClick: function() {
    wx: wx.navigateTo({
      url: '../cert_details/cert_details'
    })
  },
  datas: function () {
    let that = this;
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/qualificationhonor/honorlist',
      data: {
        "page": page,
        "limit": limit
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if (res.data.data.totalPages >= page) {
          res.data.data.honorList.forEach((item, index, arr) => {
            list.push(arr[index])
          })
          that.setData({
            lists: list
          })
          page = page + 1
          console.log(that.data.lists)
        } else {
          that.setData({
            lists: list
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  zyDetails: (e) => {//点击放大图片
    let url = e.currentTarget.dataset.url;
    let imgList = [];
    imgList.push(url)
    wx.previewImage({
      current: url,
      urls: imgList
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.datas()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})