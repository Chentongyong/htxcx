Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList: ['中央空调', '工业', '油烟','其他'],
    msgList: [{
        url: "url",
        title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代多地首套房贷利率上浮 热点城市渐迎零折扣时代"
      },
      {
        url: "url",
        title: "交了20多年的国内漫游费将取消 你能省多少话费？"
      },
      {
        url: "url",
        title: "北大教工合唱团出国演出遇尴尬:被要求给他人伴唱"
      }
    ],
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
    ],
    lx:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  clicks: function (e){
    var that = this;
    var s = e.currentTarget.dataset.id;
    that.setData({
      lx:s
    })
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