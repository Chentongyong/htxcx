var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { img: '../../images/bszy2.png', title: '标书制作'},
      { img: '../../images/bszy4.png', title: '合同范本'},
      { img: '../../images/bszy1.png', title: '工程报价'},
      { img: '../../images/bszy3.png', title: '服务流程' }
      ],
    listBox: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.showLoading({
      title: '正在加载数据',
    })
    wx:wx.request({
      url: publics.ttpss().httpst +'/wx/bidmake/list',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        res.data.data.bidMakeList.forEach((item,index,arr) =>{
          arr[index].addTime = arr[index].addTime.replace(/([^\s]+)\s.*/, "$1")
        })
        that.setData({
          listBox: res.data.data.bidMakeList
        })
        setTimeout(function () {
          wx.hideLoading();
          return false;
        }, 1000)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  details: function (e) {
   let sum = e.currentTarget.dataset.text;
    wx.navigateTo({
      url: '../document_details/document_details?sum=' + sum,
    })
  },
  xqClick: function (e) {
    wx: wx.navigateTo({
      url: '../training_details/training_details?sum=' + '标书&sid=' + e.currentTarget.dataset.id
    })
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