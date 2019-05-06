var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: {
      imgs: '../../images/gcs.png',
      title: '张三',
      gender: '男',
      types: '空调清洗工程师',
      map: '广东省广州市',
      gsmap: '广东宏泰节能环保工程 有限公司',
      yl: '我是来自宣威的杨，毕业于昆明高级技工学校机电一体化专业。我热爱我的家乡，因为从小我受到了宣威火腿这一品牌效应的影响，有了自己的人生认知。我觉得做人也得树立自己的品牌这样才会有自己的人生市场。在学校我选择了机电一体化这个专业，在学的过程中我深深的了解了这个专业作为女生，在这个专业我看到了作为应该女生在这方面的发展的局限性。但是，我不怕，我热爱这个专业，我坚信我可以做好。这个专业对于我来说更有挑战性，他人可以做的事我同样可以，我认为只是方式问题。 通过这几年的在校学习，我刻苦研读了“维修电工”“电子技术”等专业课程，并熟练掌握了其技术操作，特别是多种常用电动机控制线路安装，室内配线及其PLC编程等。我知道我的技术在有一定欠缺，我的经验不足，我的学历不够。但是，我还年轻。'
    },
    sum: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      sum: options.sum
    })
  },
   
  phoneCall: function (e) {//电话咨询
    publics.phones(e)
  },
  phoneCall2: function (e) {//联系客服
    publics.phones(e)
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