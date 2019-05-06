Page({

  /**
   * 页面的初始数据
   */
  data: {
    s: 0 //控制发布类型
  },
  onClick: function(e){
    let text = e.currentTarget.dataset.text;
    if (text =='招标信息'){
      wx: wx.navigateTo({
        url: '../tenderRelease/tenderRelease'
      })
    }
    if (text == '工程抢单'){
      wx: wx.navigateTo({
        url: '../projectRelease/projectRelease'
      })
    }
    if (text == '工程师'){
      wx: wx.navigateTo({
        url: '../engineerRelease/engineerRelease'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})