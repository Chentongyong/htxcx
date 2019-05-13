//app.js
var ququ = {};
App({
  data: {
    serviceUrl: "http://192.168.1.193:8082",
    // serviceUrl: "http://localhost:8080/domesticService",
    // userInfo: null,
    appId: 'wx2a4142399f3065d4',
    openid: '',
  },
  onLaunch: function() {
    //隐藏系统tabbar
    wx.hideTabBar({
      fail: function() {
        setTimeout(function() { // 做了个延时重试一次，作为保底。
          wx.hideTabBar()
        }, 500)
      }
    });
    //获取设备信息
    this.getSystemInfo();

    // 登录
    wx.login({
      success: function (res) {
        console.log(res)
        if (res.code) {
          //发起网络请求
          wx.request({
            url: getApp().data.serviceUrl + '/wx/wechatUser/getOpenid',
            method: "GET",
            header: {
              'content-type': 'application/json'
            },
            data: {
              js_code: res.code,
              appId: getApp().data.appId
            },
            success: function (res) {
              // var openId = res.mapList.openid
              console.log(res)
              try {
                wx.setStorageSync('openid', res.data.mapList.openid);
                wx.setStorageSync('spSession', res.data.mapList.spSession);
              } catch (e) {
                //console.log("set error");
              }
            }
          });
        } else {
          //console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function() {
    var sum = [];
    // wx.request({
    //   url: 'https://wwwgezimd.com/Store/cityaction!main.action', //仅为示例，并非真实的接口地址
    //   data: {
    //     'store.city': '广州市'
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function(res) {
    //     if (res.data.length != undefined) {
    //       let sum = [];
    //       for (let i = 0; i < res.data.length; i++) {
    //         sum.push(res.data[i].text)
    //       }
    //       ququ['qys'] = sum;
    //       wx.setStorageSync('gzmd', ququ)
    //     }
    //   },
    //   fail: function() {

    //   }
    // })
    var ss = {
     
    }
  },
  hidetabbar1() {
    wx.hideTabBar({
      fail: function() {
        setTimeout(function() { // 做了个延时重试一次，作为保底。
          wx.hideTabBar()
        }, 500)
      }
    });
  },
  getSystemInfo: function() {
    let t = this;
    wx.getSystemInfo({
      success: function(res) {
        t.globalData.systemInfo = res;
      }
    });
  },
  editTabbar: function() {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    systemInfo: null, //客户端设备信息
    userInfo: null,
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#808080",
      "selectedColor": "#2994E6",
      "list": [{
          "pagePath": "/pages/index/index",
          "iconPath": "../images/index.png",
          "selectedIconPath": "../images/index-selected.png",
          "text": "首页"
        },
        {
          "pagePath": "/pages/customer/customer",
          "iconPath": "../images/customer.png",
          "selectedIconPath": "icon/icon_home_HL.png",
          "text": "客服"
        },
        {
          "pagePath": "/pages/delivery/delivery",
          "iconPath": "../images/delivery.png",
          "isSpecial": true,
          "text": "信息发布"
        },
        {
          "pagePath": "/pages/shop/shop",
          "iconPath": "../images/shop.png",
          "selectedIconPath": "../images/shop-selected.png",
          "text": "商城"
        },
        {
          "pagePath": "/pages/mine/mine",
          "iconPath": "../images/mine.png",
          "selectedIconPath": "../images/mine-selected.png",
          "text": "我的"
        },
      ], 
      position: "bottom"
    },
  }
})