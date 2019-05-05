Page({

  /**
   * 页面的初始数据
   */
  data: {
    listBox: [{
        title: '空调资质',
        urlImg: '../../images/kt.png'
      },
      {
        title: '生物防治',
        urlImg: '../../images/zy.png'
      },
      {
        title: '保洁资质',
        urlImg: '../../images/bj.png'
      },
      {
        title: '工业资质',
        urlImg: '../../images/gy.png'
      },
      {
        title: '外墙资质',
        urlImg: '../../images/wq.png'
      },
      {
        title: '油烟资质',
        urlImg: '../../images/yy.png'
      }
    ],
    lists:[
      { img: '../../images/zgzs.png', title: '建筑施工证书'},
      { img: '../../images/zgzs.png', title: '建筑施工证书' },
      { img: '../../images/zgzs.png', title: '建筑施工证书' },
      { img: '../../images/zgzs.png', title: '建筑施工证书' },
      { img: '../../images/zgzs.png', title: '建筑施工证书' },
      { img: '../../images/zgzs.png', title: '建筑施工证书' },
      { img: '../../images/zgzs.png', title: '建筑施工证书' },
      { img: '../../images/zgzs.png', title: '建筑施工证书' },
    ],
    ind:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  qhClick:function(e){
     let that = this;
     that.setData({
       ind: e.currentTarget.dataset.index
     })
  },
  djClick: function () {
    wx: wx.navigateTo({
      url: '../cert_details/cert_details'
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