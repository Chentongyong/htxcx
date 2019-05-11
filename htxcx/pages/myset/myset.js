var tempFilePaths = [];
var that
var list = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    zbVal: "普通", //招标类型选择值
    msVal: "", //描述输入值,
    // types: ['普通', '银钻', '金钻'],
    sex: ['男', '女'],
    clickIndex: 0,
    region: ['广东省', '广州市'],
    customItem: '全部',
    isShow: true,
    inputShowed: true,
    photoBox: 'photoBox',
    multiIndex: [0, 0],
  },
  // 上传头像
  upImage:function(e){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log(res)
        var tempPic = res.tempFilePaths;
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          pic: tempPic
        })
      }
    })
  },
  btClick: function (e) {
    var that = this;
    that.setData({
      btVal: e.detail.value,
      isShow: false
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
  // 性别选择
  sexClick: function (e) {
    let that = this;
    that.setData({
      clickIndex: e.currentTarget.dataset.index,
      zbVal: e.currentTarget.dataset.text,
      isShow: false
    })
  },
  loginOut:function(e){
    var that = this;
    that.setData({
      loginOut:true
    })
  },
  // 取消退出登录
  cancel:function(){
    var that = this;
    that.setData({
      loginOut: false
    })
  },
  // 照片上传方法
  // chooseimage: function () {
  //   var that = this;
  //   wx.chooseImage({
  //     count: 1,
  //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  //     success: function (res) {
  //       console.log(res)
  //       var tempPic = res.tempFilePaths;
  //       tempFilePaths.push(tempPic);
  //       if (tempFilePaths.length == 1) {
  //         that.setData({
  //           photoBox: 'photoBox1',
  //           pic: tempFilePaths
  //         })
  //         setTimeout(function () {
  //           // 隐藏加载框
  //           // wx.hideLoading();
  //         }, 1000)
  //         return false;
  //       } else {
  //         that.setData({
  //           pic: tempFilePaths
  //         })
  //         setTimeout(function () {
  //           // 隐藏加载框
  //           // wx.hideLoading();
  //         }, 1000)
  //       }
  //       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
  //       that.setData({
  //         pic: tempFilePaths
  //       })
  //     }
  //   })
  // },
  zsClick: function (e) {
    let that = this;
    that.setData({
      sh: e.currentTarget.dataset.index,
      zbVal: e.currentTarget.dataset.text,
      isShow: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
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