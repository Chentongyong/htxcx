var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listBox: [{
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着一个小男孩背着“书包”想着',
        sj: '09-27'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  xqClick: function () {
    wx: wx.navigateTo({
      url: '../training_details/training_details'
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})