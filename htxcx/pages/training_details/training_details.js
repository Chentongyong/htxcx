var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: {},
    myrich: '',
    title: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    console.log(options.sid)
    console.log(options.sum)
    if (options.sum == '扶持') { //品牌扶持
      wx: wx.request({
        url: publics.ttpss().httpst + '/wx/brand/detail',
        data: {
          "id": options.sid,
          // "userId": ''
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          var regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", "gmi"); //匹配所有带style 的<img src=''/>标签
          res.data.data.brand.detail = res.data.data.brand.detail.replace(regex1, "$2 style=\"\"$3"); //给没有带style的<img src='' />添加 style
          var regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", "gmi"); //
          that.setData({
            datas: res.data.data.brand,
            title: res.data.data.brand.name,
            myrich: res.data.data.brand.detail.replace(regex2, "$2display:block;width:100%;height:auto;$3")
          })
          console.log(res.data.data.brand)
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    if (options.sum == '服务案例') { //培训资料详情
      wx: wx.request({
        url: publics.ttpss().httpst + '/wx/enginguide/detail',
        data: {
          "id": options.sid,
          // "userId": ''
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          var regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", "gmi"); //匹配所有带style 的<img src=''/>标签
          res.data.data.enginGuide.detail = res.data.data.enginGuide.detail.replace(regex1, "$2 style=\"\"$3"); //给没有带style的<img src='' />添加 style
          var regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", "gmi"); //
          that.setData({
            datas: res.data.data.enginGuide,
            title: res.data.data.enginGuide.title,
            myrich: res.data.data.enginGuide.detail.replace(regex2, "$2display:block;width:100%;height:auto;$3")
          })
          console.log(res.data.data.enginGuide)
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    if (options.sum == '标书') { //标书制作
      wx: wx.request({
        url: publics.ttpss().httpst + '/wx/bidmake/detail',
        data: {
          "id": options.sid,
          // "userId": ''
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          var regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", "gmi"); //匹配所有带style 的<img src=''/>标签
          res.data.data.bidMake.detail = res.data.data.bidMake.detail.replace(regex1, "$2 style=\"\"$3"); //给没有带style的<img src='' />添加 style
          var regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", "gmi"); //
          that.setData({
            datas: res.data.data.bidMake,
            title: res.data.data.bidMake.title,
            myrich: res.data.data.bidMake.detail.replace(regex2, "$2display:block;width:100%;height:auto;$3")
          })
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    }
    if (options.sum == '资质') { //标书制作
      wx: wx.request({
        url: publics.ttpss().httpst + '/wx/qualificationhonor/detail',
        data: {
          "id": options.sid,
          // "userId": ''
        },
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          var regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", "gmi"); //匹配所有带style 的<img src=''/>标签
          res.data.data.qualificationHonor.detail = res.data.data.qualificationHonor.detail.replace(regex1, "$2 style=\"\"$3"); //给没有带style的<img src='' />添加 style
          var regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", "gmi"); //
          that.setData({
            datas: res.data.data.qualificationHonor,
            title: res.data.data.qualificationHonor.title,
            myrich: res.data.data.qualificationHonor.detail.replace(regex2, "$2display:block;width:100%;height:auto;$3")
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },

  phoneCall: function(e) { //电话咨询
    publics.phones(e)
  },
  phoneCall2: function(e) { //联系客服
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