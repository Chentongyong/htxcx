//index.js
//获取应用实例
const app = getApp()
var publics = require('../../public/public.js');
Page({
  data: {
    classList: [{
        'img': "../../images/ind_zbxx.png",
        'txt': '招标信息'
      },
      {
        'img': "../../images/ind_bs.png",
        'txt': '标书制作'
      },
      {
        'img': "../../images/ind_zzry.png",
        'txt': '资质荣誉'
      },
      {
        'img': "../../images/ind_gczd.png",
        'txt': '工程指导'
      },
      {
        'img': "../../images/ind_gcqd.png",
        'txt': '工程抢单'
      },
      {
        'img': "../../images/ind_pxzl.png",
        'txt': '培训资料'
      },
      {
        'img': "../../images/ind_gghz.png",
        'txt': '广告合作'
      },
      {
        'img': "../../images/ind_ppfc.png",
        'txt': '品牌扶持'
      }
    ],
    msgList: [{
        url: "url",
        title: "多地首套房贷利率上浮 热点城市渐迎零折扣时代多地首套房贷利率上浮 热点城市渐迎零折扣时代"
      },
      {
        url: "url",
        title: "交了20多年的国内漫游费将取消 你能省多少话费？"
      },
      {
        url: "url",
        title: "北大教工合唱团出国演出遇尴尬:被要求给他人伴唱"
      }
    ],
    movies: ['', '', ''],
    listBox: [{
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着一个小男孩背着“书包”想着',
        sj: '09-27'
      }
    ],
    tabbar: {},
    hr: true,
    sn: 0, //判断跳转
  },
  onLoad: function() {
    var that = this;
    app.editTabbar(); //引用底部导航

  },
  hrxg: function(e) { //点击切换选中模块（活动风采、热点资讯）
    var that = this;
    var s = e.currentTarget.dataset.index;
    if (s == '0') {
      that.setData({
        hr: true,
        sn: e.currentTarget.dataset.text
      })
    }
    if (s == '1') {
      that.setData({
        hr: false,
        sn: e.currentTarget.dataset.text
      })
    }
  },
  tab1Click: function() { //跳转分包一
    wx: wx.navigateTo({
      url: '/packageTab1/pages/cat/cat'
    })
  },
  tab2Click: function() { //跳转分包二
    wx: wx.navigateTo({
      url: '/packageTab2/pages/apple/apple'
    })
  },
  flClixk: function(e) {//跳转招标、标书、资质、工程、培训、广告、品牌
    let sum = e.currentTarget.dataset.text;
    switch (sum) {
      case sum = '招标信息':
        console.log('招标信息')
        wx: wx.navigateTo({
          url: publics.ttpss().zb
        })
        break;
      case sum = '标书制作':
        wx: wx.navigateTo({
          url: publics.ttpss().bs
        })
        break;
      case sum = '资质荣誉':
        wx: wx.navigateTo({
          url: publics.ttpss().zz
        })
        break;
      case sum = '工程指导':
        wx: wx.navigateTo({
          url: publics.ttpss().gc
        })
        break;
      case sum = '工程抢单':
        wx: wx.navigateTo({
          url: publics.ttpss().gcq
        })
        break;
      case sum = '培训资料':
        wx: wx.navigateTo({
          url: publics.ttpss().px
        })
        break;
      case sum = '广告合作':
        wx: wx.navigateTo({
          url: publics.ttpss().gg
        })
        break;
      case sum = '品牌扶持':
        wx: wx.navigateTo({
          url: publics.ttpss().pp
        })
        break;
    }

  },
  xtClick: function(){//跳转系统消息
    wx.navigateTo({
      url: '../newsLists/newsLists'
    })
  },
  mapClick: function(){//跳转城市定位
    wx.navigateTo({
      url: '../city/city',
    })
  },
  ssClick: function () {//跳转搜索
    wx: wx.navigateTo({
      url: '../search/search',
    })
  },
  yzlbClick: function() { //跳转优质服务列表
    wx: wx.navigateTo({
      url: '../service/service',
    })
  },
  yzxqClick: function() { //跳转优质服务详情
    wx: wx.navigateTo({
      url: '../service_details/service_details',
    })
  },
  gclbClick: function() { //工程推荐列表
    wx: wx.navigateTo({
      url: '../engineering/engineering'
    })
  },
  gcxqClick: function() { //工程推荐详情
    wx: wx.navigateTo({
      url: '../engin_details/engin_details'
    })
  },
  hrlbClick: function(e) { //活动风采、热点资讯列表
    var that = this;
    wx: wx.navigateTo({
      url: '../activities/activities?sum=' + that.data.sn
    })
  },
  hrxqClick: function() { //活动风采、热点资讯详情
    wx: wx.navigateTo({
      url: '../activi_details/activi_details'
    })
  }
})