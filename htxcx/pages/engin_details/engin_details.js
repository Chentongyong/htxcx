var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx:wx.request({
      url: publics.ttpss().httpst + '/wx/engin/read',
      data: {
        "id": options.sid
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data.data)
        var regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", "gmi");
        res.data.data.detail = res.data.data.detail.replace(regex1, "$2 style=\"\"$3");
        var regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", "gmi");
        res.data.data.addTime = res.data.data.addTime.replace(/([^\s]+)\s.*/, "$1")
        that.setData({
          datas: res.data.data,
          myrich: res.data.data.detail.replace(regex2, "$2display:block;width:100%;height:auto;$3")
        })
      },
      fail: function(res) {},
      complete: function(res) {},
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
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})