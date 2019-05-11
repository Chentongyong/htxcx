var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: {},
    sum: null,
    sid: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      // sum: options.sum,
      sid: options.sid
    })
    let that = this;
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/engineer/detail',
      data: {
        "id": that.data.sid,
        // "userId":''
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        if (res.data.data.gender == 1) {
          res.data.data.gender = '男'
        }
        if (res.data.data.gender == 2) {
          res.data.data.gender = '女'
        }
        
        that.setData({
          datas: res.data.data
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onShow: function() {

  },

  phoneCall: function(e) { //电话咨询
    publics.phones(e)
  },
  phoneCall2: function(e) { //联系客服
    publics.phones(e)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})