var publics = require('../../public/public.js');
let sum = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listBox: [],
    dataList: [],
    sums: 0,
    ind: 0,
    sid: 1
  },
  onLoad: function(){
    wx:wx.request({
      url: publics.ttpss().httpst + '/wx/engineer/categorylist',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) =>{
        this.setData({
          listBox:res.data.data
        })
        console.log(res.data.data.length)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onShow: function() {
    sum = [];
    const that = this;
    that.recom()
  },
  qhClick: function(e) {
    let that = this;
    sum = [];
    that.setData({
      ind: e.currentTarget.dataset.index,
      sid: e.currentTarget.dataset.id
    })
  },
  recom: function() {
    const that = this;
    wx: wx.request({
      url: publics.ttpss().httpst +'/wx/engineer/list',
      data: {
        "engineerCategoryId": that.data.sid
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        res.data.data.items.forEach((item, index, arr) => {//分类
          // arr[index].name = arr[index].name.substr(0, 2);
          sum.push(arr[index])
        })
        res.data.data.items.forEach((item, index, arr) => {//按需查询数据
          arr[index].addTime = arr[index].addTime.replace(/([^\s]+)\s.*/, "$1")//切割日期时间
          if (arr[index].gender == 1) {
            arr[index].gender = '男'
          }
          if (arr[index].gender == 2) {
            arr[index].gender = '女'
          }
        })
        that.setData({
          sid: sum[0].id,
          dataList: sum
        })
      },
      fail: function(res) {},
    })
  },
  details: (e) => { //跳转详情
    var sum = e.currentTarget.dataset.index;
    // console.log(e.currentTarget.dataset.sid)
    wx.navigateTo({
      url: '../recom_details/recom_details?sid=' + e.currentTarget.dataset.id,
    })
  },
  onReachBottom: function(){
    console.log(123)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})