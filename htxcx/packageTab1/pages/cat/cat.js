Page({

  /**
   * 页面的初始数据
   */
  data: {
    st: ['aaa', '555', 'sss'],
    sts: [{ id: '1', name: 'AnMa', age: '20' }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },
  tab2Click: function () {
    wx: wx.navigateTo({
      url: '/packageTab2/pages/apple/apple'
    })
  },
  // showPickerDate(e) {
  //   this.setData({ showPicker: true })
  //   // 调用子组件中methods的onshow方法
  //   this.selectComponent('#picker-date').onshow()
  // },
  toggleToast(e) {
    console.log(e.detail.pickerShow)
  }
})