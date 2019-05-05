Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    btVals: true,//标题
    gcVals: true,//工程
    dqVals: true,//地区
    jeVals: true,//金额
    msVal: true,//描述
    btVal: "",//标题输入值
    gcVal: "",//工程输入值
    dqVal: "" ,//地区输入值
    jeVal: "",//金额输入值
    zbVal: "普通",//招标类型选择值
    msVal: "",//描述输入值,
    types:['普通','银钻','金钻'],
    sh:0,
    isShow:true,
    inputShowed:true
  },
  btClick: function(e) {
    var that = this;
    that.setData({
      btVal: e.detail.value,
      isShow:false
    })
    if (that.data.btVal != '') {
      that.setData({
        inputShowed: false
      })
    } else {
      that.setData({
        inputShowed: true
      })
    }
  },
  zsClick:function(e){
    let that = this;
    that.setData({
      sh: e.currentTarget.dataset.index,
      zbVal: e.currentTarget.dataset.text,
      isShow:false
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