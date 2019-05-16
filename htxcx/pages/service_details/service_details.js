var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:{},
    listBox: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx:wx.request({
      url: publics.ttpss().httpst + '/wx/service/detail',
      data: {
        'id': options.sid
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        this.setData({
          datas: res.data.data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })

    wx:wx.request({//案例
      url: publics.ttpss().httpst + '/wx/service/caselist',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        res.data.data.enginCaseList.forEach((item,index,arr)=>{
          arr[index].addTime = arr[index].addTime.replace(/([^\s]+)\s.*/, "$1")
        })
        this.setData({
          listBox: res.data.data.enginCaseList
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  xqClick: function (e) {
    wx: wx.navigateTo({
      url: '../training_details/training_details?sum=' + '服务商&sid=' + e.currentTarget.dataset.id
    })
  },

  phoneCall: function (e) {//电话咨询
    publics.phones(e)
  },
  phoneCall2: function (e) {//联系客服
    publics.phones(e)
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})