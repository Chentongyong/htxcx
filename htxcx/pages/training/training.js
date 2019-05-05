Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { img: '../../images/rdzx.png', types: '工业清洗' },
      { img: '../../images/rdzx.png', types: '烟油清洗' },
      { img: '../../images/rdzx.png', types: '中央空调' },
      { img: '../../images/rdzx.png', types: '外墙清洗' },
      { img: '../../images/rdzx.png', types: '石材护理' },
      { img: '../../images/rdzx.png', types: '商业保洁' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  onClick:function(e){
    let sum = e.currentTarget.dataset.text;
    wx.navigateTo({
      url: '../clean/clean?sum='+sum,
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