var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:{},
    myrich: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    console.log(options)
    if (options.sum == '活动风采') {//活动风采详情
      wx.showLoading({
        title: '正在加载数据',
      })
      wx: wx.request({
        url: publics.ttpss().httpst + '/wx/activity/detail',
        data: {
          "id": options.sid
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          var regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", "gmi");
          res.data.data.detail = res.data.data.detail.replace(regex1, "$2 style=\"\"$3");
          var regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", "gmi");
          res.data.data.addTime = res.data.data.addTime.replace(/([^\s]+)\s.*/, "$1")
          that.setData({
            datas:res.data.data,
            myrich: res.data.data.detail.replace(regex2, "$2display:block;width:100%;height:auto;$3")
          })
          setTimeout(function () {
            wx.hideLoading();
            return false;
          }, 1000)
        },
        fail: function(res) {},
      })
    }
    if (options.sum == '热点资讯') {//热点资讯详情
    console.log(111)
      wx.showLoading({
        title: '正在加载数据',
      })
      wx: wx.request({
        url: publics.ttpss().httpst +'/wx/news/detail',
        data: {
          "id": options.sid
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          var regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", "gmi");
          res.data.data.detail = res.data.data.detail.replace(regex1, "$2 style=\"\"$3");
          var regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", "gmi");

          res.data.data.addTime = res.data.data.addTime.replace(/([^\s]+)\s.*/, "$1")
          that.setData({
            datas: res.data.data,
            myrich: res.data.data.detail.replace(regex2, "$2display:block;width:100%;height:auto;$3"),
          })
          console.log(res)
          setTimeout(function () {
            wx.hideLoading();
            return false;
          }, 1000)
        },
        fail: function(res) {},
      })
    }
    if (options.sum == '清洗') { //培训资料详情
    console.log(123)
      wx.showLoading({
        title: '正在加载数据',
      })
      wx: wx.request({
        url: publics.ttpss().httpst + '/wx/train/detail',
        data: {
          "id": options.sid,
          // "userId": ''
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          var regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", "gmi");//匹配所有带style 的<img src=''/>标签
          res.data.data.detail = res.data.data.detail.replace(regex1, "$2 style=\"\"$3");//给没有带style的<img src='' />添加 style
          var regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", "gmi");//
          res.data.data.detail = res.data.data.detail.replace(/<p>/gi, "<div>")
          res.data.data.addTime = res.data.data.addTime.replace(/([^\s]+)\s.*/, "$1")
          that.setData({
            datas: res.data.data,
            myrich: res.data.data.detail.replace(regex2, "$2display:block;width:100%;height:600rpx;$3")
          })
          setTimeout(function () {
            wx.hideLoading();
            return false;
          }, 1000)
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})