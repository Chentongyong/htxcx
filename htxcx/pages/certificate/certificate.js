var publics = require('../../public/public.js');
let page = 1;
let limit = 10;
let list = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listBox: [],
    lists: [],
    ind: 0,
    sid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    page = 1;
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/qualificationhonor/category',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        this.setData({
          listBox: res.data.data,
          sid: res.data.data[0].id
        })
        this.datas()
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  qhClick: function(e) {
    list = [];
    page = 1;
    let that = this;
    that.setData({
      ind: e.currentTarget.dataset.index,
      sid: e.currentTarget.dataset.id
    })
    this.datas()
  },
  // djClick: function () {
  //   wx: wx.navigateTo({
  //     url: '../cert_details/cert_details'
  //   })
  // },
  zyDetails: (e) => {
    let url = e.currentTarget.dataset.url;
    let imgList = [];
    imgList.push(url)
    wx.previewImage({
      current: url,
      urls: imgList
    })
  },

  onReachBottom: function() {
    this.datas()
  },
  datas: function() {
    let that = this;
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/qualificationhonor/qualificationlist',
      data: {
        "page": page,
        "limit": limit,
        "qualificationCategoryId": this.data.sid
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data.data.qualificationList)
        if (res.data.data.totalPages >= page) {
          res.data.data.qualificationList.forEach((item, index, arr) => {
            list.push(arr[index])
          })
          that.setData({
            lists: list
          })
          page = page + 1
          console.log(that.data.lists)
        }else{
          that.setData({
            lists: list
          })
        }
        console.log(list)
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