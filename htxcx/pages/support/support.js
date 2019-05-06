Page({

  /**
   * 页面的初始数据
   */
  data: {
    listD:[
      { imgs: '../../images/mmsj.png', title: '门面设计' },
      { imgs: '../../images/cpsc.png', title: '产品手册' },
      { imgs: '../../images/yytg.png', title: '营运推广' }
    ],
    list: [{
        img: '../../images/cpts.png',
        title: '店铺门面设计店铺门面设计店铺门面设计',
      ms: '店面设计是店面给人的整体感觉，能够 体现店面的档次和个性。体现店面的档次和个性。',
        itme: '2019-03-27'
      },
      {
        img: '../../images/cpts.png',
        title: '店铺门面设计',
        ms: '店面设计是店面给人的整体感觉，能够 体现店面的档次和个性。体现店面的档次和个性。',
        itme: '2019-03-27'
      },
      {
        img: '../../images/cpts.png',
        title: '店铺门面设计',
        ms: '店面设计是店面给人的整体感觉，能够 体现店面的档次和个性。体现店面的档次和个性。',
        itme: '2019-03-27'
      },
      {
        img: '../../images/cpts.png',
        title: '店铺门面设计',
        ms: '店面设计是店面给人的整体感觉，能够 体现店面的档次和个性。体现店面的档次和个性。',
        itme: '2019-03-27'
      }, {
        img: '../../images/cpts.png',
        title: '店铺门面设计',
        ms: '店面设计是店面给人的整体感觉，能够 体现店面的档次和个性。体现店面的档次和个性。',
        itme: '2019-03-27'
      },
      {
        img: '../../images/cpts.png',
        title: '店铺门面设计',
        ms: '店面设计是店面给人的整体感觉，能够 体现店面的档次和个性。体现店面的档次和个性。',
        itme: '2019-03-27'
      },
      {
        img: '../../images/cpts.png',
        title: '店铺门面设计',
        ms: '店面设计是店面给人的整体感觉，能够 体现店面的档次和个性。体现店面的档次和个性。',
        itme: '2019-03-27'
      },
      {
        img: '../../images/cpts.png',
        title: '店铺门面设计',
        ms: '店面设计是店面给人的整体感觉，能够 体现店面的档次和个性。体现店面的档次和个性。',
        itme: '2019-03-27'
      }
    ],
    ind:0
  },
  
  qhClick:function(e){
    let that = this;
    that.setData({
      ind: e.currentTarget.dataset.index
    })
    console.log(that.data.ind)
  },
  qxClick:function(){
    wx:wx.navigateTo({
      url: '../training_details/training_details'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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