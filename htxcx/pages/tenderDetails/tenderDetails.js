Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCollection:false,
    src:'../../images/collection.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options)
    that.setData({
      userId: options.userId,
      orderId: options.orderId
    })
    if (options.type == 0){//获取招标详情
    console.log(111)
      wx.request({
        url: getApp().data.serviceUrl + '/wx/bid/detail',
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        data: {
          // userId: options.userId,
          id: options.orderId
        },
        success: function (res) {
          console.log(res)
          var concentDes = res.data.data.bid;
          var relativeData = res.data.data.bidList;
          that.setData({
            concentDes,
            relativeData
          })
        
        },
        fail: function (e) {
          wx.showToast({
            title: '网络断开，稍后重试',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
    else if (options.type == 1) {//获取工程抢单详情

    }
  },
  collect:function(e){
    var that = this;
    var userId = this.data.userId;
    var orderId = this.data.orderId;
    var isCollection = this.data.isCollection;
    if (isCollection == false){
      this.setData({
        src: '../../images/collection-fill.png'
      })
      wx.request({
        url: getApp().data.serviceUrl + '/wx/collect/addordelete',
        method: "POST",
        header: {
          'content-type': 'application/json'
        },
        data: {
          // userId: options.userId,
          type: 0,
          valueId: orderId
        },
        success: function (res) {
          console.log(res)
          that.setData({
            isCollection:true
          })
          wx: wx.showToast({
            title: '收藏成功',
            mask: true,
          })

        },
        fail: function (e) {
          wx.showToast({
            title: '网络断开，稍后重试',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }else{
      wx: wx.showToast({
        title: '已取消收藏',
        mask: true,
      })
      that.setData({
        src: '../../images/collection.png',
        isCollection:false
      })
    }
    
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