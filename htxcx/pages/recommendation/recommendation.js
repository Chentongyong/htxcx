Page({

  /**
   * 页面的初始数据
   */
  data: {
    listBox: [{
        title: '空调',
        urlImg: '../../images/kt.png'
      },
      {
        title: '工业',
        urlImg: '../../images/gy.png'
      },
      {
        title: '油烟',
        urlImg: '../../images/yy.png'
      },
      {
        title: '其他',
        urlImg: '../../images/qts.png'
      }
    ],
    dataList: [{
        imgs: '../../images/gcs.png',
        title: '张三',
        gender: '男',
        types: '空调清洗工程师',
        gs: '广东宏泰节能环保工程有限',
        time: '2019-08-07'
      },
      {
        imgs: '../../images/gcs.png',
        title: '张三',
        gender: '男',
        types: '空调清洗工程师广东宏泰节能环保工程有限广东宏泰节能环保工程有限',
        gs: '广东宏泰节能环保工程有限广东宏泰节能环保工程有限广东宏泰节能环保工程有限',
        time: '2019-08-07'
      },
      {
        imgs: '../../images/gcs.png',
        title: '张三',
        gender: '男',
        types: '空调清洗工程师',
        gs: '广东宏泰节能环保工程有限',
        time: '2019-08-07'
      },
      {
        imgs: '../../images/gcs.png',
        title: '张三',
        gender: '男',
        types: '空调清洗工程师',
        gs: '广东宏泰节能环保工程有限',
        time: '2019-08-07'
      }
    ],
    sums:0,
    ind:0
  },
  qhClick:function(e){
    let that = this;
    that.setData({
      ind:e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.idClick()
  },

  details: (e)=> {//跳转详情
    var sum = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../recom_details/recom_details?sum='+sum,
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