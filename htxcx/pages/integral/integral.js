Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit: ['全部', '获得','使用'],
    lists:[
      { title: '注册', rqs: '2019-12-05', time: '10:21', jfs: '+100', jjs : 0 },
      { title: '邀请好友', rqs: '2019-12-05', time: '10:21', jfs: '+100', jjs: 0 },
      { title: '查看消息', rqs: '2019-12-05', time: '10:21', jfs: '-100', jjs: 1 },
      { title: '发布消息', rqs: '2019-12-05', time: '10:21', jfs: '+100', jjs: 0 }
    ],
    ind:0,
    s:0,
    jfgz:false
  },
  onClick:function(e){
    let that = this;
    that.setData({
      ind: e.currentTarget.dataset.index
    })
  },
  xsycClick:function(){
    this.setData({
      jfgz: !this.data.jfgz
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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