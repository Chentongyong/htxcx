var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips:'',
    history: [],
    popular: [],
    list:[],//搜索信息
    inpVal:'',
    indexes:false
  },
  onLoad: function() {
    this.search()
  },
  search: function() {
    let that = this;
    wx.request({
      url: publics.ttpss().httpst +'/wx/search/index',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        let sum1 = [];
        let sum2 = [];
        // console.log(res.data.data.historyKeywordList)//历史记录
        // console.log(res.data.data.hotKeywordList)//热门搜索
        let history = res.data.data.historyKeywordList;
        let popular = res.data.data.hotKeywordList;
        that.loop(sum1,popular)
        that.loop(sum2,history)
        that.setData({
          popular:sum1,
          history:sum2,
          tips: res.data.data.defaultKeyword.keyword
        })
      }
    })
  },
  loop: function (sum1,popular) {//循环数组
    popular.forEach((item, index, arr) => {
      sum1.push(arr[index])
    })
  },
  onClick:function(e){//历史记录、热门点击搜索
    let name = e.currentTarget.dataset.name;
    this.setData({
      inpVal: name
    })
    this.sea(name)
    if (this.data.inpVal == false) {
      this.setData({
        indexes: false
      })
    } else {
      this.setData({
        indexes: true
      })
    }
  },
  onInp:function(e){//input输入关键字事件
    this.setData({
      inpVal:e.detail.value,
      list:[]
    })
    if (this.data.inpVal == false) {
      this.setData({
        indexes: false
      })
    } else {
      this.setData({
        indexes: true
      })
    }
    this.sea(e.detail.value)
  },
  determine:function(){
    let that = this;
    let name = that.data.inpVal;
    if(name!=''){
      this.sea(name)
    }
  },
  sea:function(name){
    let that = this;
    let sums = [];
    wx.request({
      url: publics.ttpss().httpst +'/wx/search/search',
      data: {
        "keyword": name
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        res.data.data.bidList.forEach((item, index, arr) => {
          sums.push(arr[index])
        })
        res.data.data.enginGrabList.forEach((item, index, arr) => {
          sums.push(arr[index])
        })
        that.setData({
          list:sums
        })
      }
    })
  },
  delete:function(){
    wx:wx.request({
      url: publics.ttpss().httpst +'/wx/search/clearhistory',
      data: {
        "userId":''
      },
      header: {},
      method: 'post',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  xqClick: function(e){
    let that = this;
    let code = e.currentTarget.dataset.name;
    if (code == 1){//跳转招标信息详情页
      
    }
    if (code == 2) {//跳转工程抢单详情页

    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})