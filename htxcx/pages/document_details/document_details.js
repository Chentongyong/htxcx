var publics = require('../../public/public.js');
let page = 2;
let limit = 8;
let list = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sum: '',
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    bsTitle: '',
    htTitle: '',
    gcTitlr: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    page = 2;
    list = [];
    let that = this;
    var str = options.sum;
    that.setData({
      sum: options.sum
    })
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/bidmake/index',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        switch (str) {
          case str = '标书制作':
            that.setData({
              show1: true,
              show2: false,
              show3: false,
              show4: false,
              bsTitle: res.data.data.bidTomake.content
            })
            break;
          case str = '合同范本':
            var s = [];
            res.data.data.contractList.forEach((item, index, arr) => {
              list.push(arr[index])
            })
            that.setData({
              show1: false,
              show2: true,
              show3: false,
              show4: false,
              htTitle: list
            })
            break;
          case str = '工程报价':
            that.setData({
              show1: false,
              show2: false,
              show3: true,
              show4: false,
              gcTitlr: res.data.data.quotation.content
            })
            break;
          case str = '服务流程':
            that.setData({
              show1: false,
              show2: false,
              show3: false,
              show4: true
            })
            break;
        }
        wx.setNavigationBarTitle({
          title: str
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    let that = this;
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/bidmake/contractlist',
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
          res.data.data.contractList.forEach((item, index, arr) => {
            list.push(arr[index])
          })
          page = page + 1;
          that.setData({
            htTitle: list
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  previewImage:(e) =>{
    let url = e.currentTarget.dataset.url;
    let imgList = [];
    imgList.push(url)
    wx.previewImage({
      current: url, 
      urls: imgList
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})