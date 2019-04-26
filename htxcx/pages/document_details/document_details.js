Page({

  /**
   * 页面的初始数据
   */
  data: {
    s:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ['标书制作', '合同标本', '工程报价', '服务流程']
    var str = options.sum;
    switch (str) {
      case str ='标书制作':
        this.setData({
          s:0
        })
        break;
      case str = '合同标本':
        this.setData({
          s: 1
        })
        break;
      case str = '工程报价':
        this.setData({
          s: 2
        })
        break;
      case str = '服务流程':
        this.setData({
          s: 3
        })
        break;
    }
    console.log(this.data.s)
    wx.setNavigationBarTitle({
      title: str
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