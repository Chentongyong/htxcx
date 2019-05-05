// pages/mine/mine.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listEj:['电器设备','清洗设备','设备配件','防护用品'],
    listSp:[
      { imgUrl:'../../images/scsp.png',title:'高压清洗'},
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' },
      { imgUrl: '../../images/scsp.png', title: '高压清洗' }
    ],
    tabbar: {},
    ind:0,
    qh:0
  },
  qhClick:function(e){
    let that = this;
    if (e.currentTarget.dataset.text==='商品'){
      that.setData({
        qh:0
      })
    }
    if (e.currentTarget.dataset.text==='设备租凭'){
      that.setData({
        qh: 1
      })
    }
  },
  details:function (){
    wx.navigateTo({
      url: '../shop_details/shop_details',
    })
  },
  xzClick:function(e){
    let that = this;
    that.setData({
      ind: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
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