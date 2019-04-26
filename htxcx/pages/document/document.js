Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['标书制作','合同标本','工程报价','服务流程'],
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
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  details: function (e) {
   let sum = e.currentTarget.dataset.text;
    wx.navigateTo({
      url: '../document_details/document_details?sum=' + sum,
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