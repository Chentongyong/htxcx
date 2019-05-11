// pages/demo/filter.js
var _self;
Page({
  data: {
    tenderlists:'tender-lists',
    shopping: true,
    // 订单类型
    orderType:['普通工程','银钻工程','金钻工程'],
    orderIndex:0,
    tenderType:['招标信息','工程抢单'],
    tenderIndex:0
  },
  
  onLoad:function(options){
    console.log(options)
    this.setData({
      type: options.type,

    })
    if (options.type == 1){
      wx.setNavigationBarTitle({
        title: '我的发布'
      })
    } else if (options.type == 2){
      wx.setNavigationBarTitle({
        title: '我的抢单'
      })
    } else if (options.type == 3){
      wx.setNavigationBarTitle({
        title: '我的浏览'
      })
    } else if (options.type == 4){
      wx.request({
        url: getApp().data.serviceUrl + '/wx/collect/list',
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        data: {
          // userId 从缓存中获取
          // userId: options.userId,
          type: 0,
          limit:10,
          page:1
        },
        success: function (res) {
          console.log(res)
         

        },
        fail: function (e) {
          wx.showToast({
            title: '网络断开，稍后重试',
            icon: 'none',
            duration: 2000
          })
        }
      })
      wx.setNavigationBarTitle({
        title: '我的收藏'
      })
    }
  },
  // 订单类型
  orderType:function(e){
    console.log(e)
    var orderIndex = e.currentTarget.dataset.index;
    // orderIndex == 0普通工程
    // orderIndex == 1 银钻工程
    // orderIndex == 2 金钻工程
    this.setData({
      orderIndex: orderIndex
    })
  },
  tenderType:function(e){
    console.log(e)
    var tenderIndex = e.currentTarget.dataset.index;
    // orderIndex == 0普通工程
    // orderIndex == 1 银钻工程
    // orderIndex == 2 金钻工程
    this.setData({
      tenderIndex: tenderIndex
    })
  },
  // 购买记录
  shopping:function(){
    this.setData({
      history: false,
      shopping: true
    })
  },
  // 历史记录
  history:function(){
    this.setData({
      history:true,
      shopping:false
    })
    wx.request({
      url: getApp().data.serviceUrl + '/wx/footprint/list',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        // userId 从缓存中获取
        // userId: options.userId,
        page:1,
        limit:10,
      },
      success: function (res) {
        console.log(res)

      },
      fail: function (e) {
        wx.showToast({
          title: '网络断开，稍后重试',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  // 跳转详情
  grabSheetDes: function (e) {
    var type = this.data.type;
    if (type == 4)
   wx:wx.navigateTo({
     url: '../tenderDetails/tenderDetails',
     success: function(res) {},
     fail: function(res) {},
     complete: function(res) {},
   })
  },
 
})