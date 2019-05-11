var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList: [],
    msgList: [],
    listBox: [],
    lists:[],
    lx: 0,
    sid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    that.guidance();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  onClick: function() {
    wx: wx.navigateTo({
      url: '../recommendation/recommendation'
    })
  },
  onDetails: function(e) {
    wx: wx.navigateTo({
      url: '../recom_details/recom_details?sid=' + e.currentTarget.dataset.id
    })
  },
  xqClick: function(e) {//跳转详情
    let sum = '服务案例';
    wx: wx.navigateTo({
      url: '../training_details/training_details?sum=' + sum + '&sid=' + e.currentTarget.dataset.id
    })
  },
  phoneCall: function(e) { //电话咨询
    publics.phones(e)
  },
  phoneCall2: function(e) { //联系客服
    publics.phones(e)
  },
  guidance: function() { //加载数据
    let that = this;
    wx: wx.request({
      url: publics.ttpss().httpst +'/wx/enginguide/index',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data.data)
        that.setData({
          classList: res.data.data.categoryList,
          lists: res.data.data.engineers,
          sid: res.data.data.categoryList[0].id,
          msgList: res.data.data.announcementList
        })
        that.listFu()
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  clicks: function(e) {
    var that = this;
    that.setData({
      lx: e.currentTarget.dataset.index,
      sid: e.currentTarget.dataset.id
    })
    that.listFu()
  },
  listFu: function(){
    var that = this;
    wx: wx.request({
      url: publics.ttpss().httpst +'/wx/enginguide/list',
      data: {
        "enginCategoryId": that.data.sid
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        res.data.data.enginGuideList.forEach((item, index, arr) => {
          arr[index].addTime = arr[index].addTime.replace(/([^\s]+)\s.*/, "$1")//切割日期时间
        })
        that.setData({
          listBox: res.data.data.enginGuideList
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})