// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#808080",
        "selectedColor": "#2994E6",
        "list": [
          {
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
        ]
      },
      position: "bottom"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model == "iPhone X" ? true : false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // customer:function(e){
    //   console.log(e)
    //   var index = e.currentTarget.dataset.index;
    //   if (index == 1){

    //   }
    // }
  }
})
