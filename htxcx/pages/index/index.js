//index.js
//获取应用实例
const app = getApp()
let page = 1;
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
    msgList: [],
    tabbar: {},
    hr: true,
    sn: 0, //判断跳转
    movies1: [],//优质服务
    movies2: [],//工程推荐
    listBox: [],
    listBox1: [], //活动风采
    listBox2: [], //热点资讯
    tabbar: {},
    hr: true,
    sn: '活动风采', //判断跳转
  },

  onLoad: function() {
    var that = this;
    app.editTabbar(); //引用底部导航
  },
  onShow: function() {
    let that = this;
    wx.request({
      url: publics.ttpss().httpst + '/wx/home/index',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        let list1 = [];
        let list2 = [];
        // let sum = [];
        var yzfws = res.data.data.facilitatorList.length;
        var gctjs = res.data.data.enginList.length;
        var totalPage1 = yzfws % 3 != 0 ? parseInt(yzfws / 3) + 1 : yzfws / 3; //计算优质服务商模块
        var totalPage2 = gctjs % 3 != 0 ? parseInt(gctjs / 3) + 1 : gctjs / 3; //计算工程推荐模块

        that.qu(list1, totalPage1, res.data.data.facilitatorList)
        that.qu(list2, totalPage2, res.data.data.enginList)

        let sy = res.data.data.bannerList;
        // sy.forEach((item, index, arr) => {
        //   sum.push(arr[index].url)
        // })
        that.setData({
          movies1: list1,
          movies2: list2,
          listBox: res.data.data.activityList,
          listBox1: res.data.data.activityList,
          listBox2: res.data.data.newsList,
          msgList: res.data.data.announcementList

        })
        console.log(res)
      }
    })
  },
  qu: function(list2, sum, e) { //服务商、工程推荐
    let that = this;
    for (let i = 0; i < sum; i++) {
      let yzfw = {
        movList: []
      };
      list2.push(yzfw)
    }
    for (let j = 0; j < e.length; j++) {
      if (j < 3) {
        list2[0].movList.push(e[j])
      }
      if (j >= 3 && j < 6) {
        list2[1].movList.push(e[j])
      }
      if (j >= 6 && j < 9) {
        list2[2].movList.push(e[j])
      }
      if (j >= 9 && j < 12) {
        list2[3].movList.push(e[j])
      }
    }
  },
  hrxg: function(e) { //点击切换选中模块（活动风采、热点资讯）
    var that = this;
    var s = e.currentTarget.dataset.index;
    if (s == '0') {
      that.setData({
        hr: true,
        sn: e.currentTarget.dataset.text,
        listBox: that.data.listBox1
      })
    }
    if (s == '1') {
      that.setData({
        hr: false,
        sn: e.currentTarget.dataset.text,
        listBox: that.data.listBox2
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
  flClixk: function(e) { //跳转招标、标书、资质、工程、培训、广告、品牌
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
  xtClick: function() { //跳转系统消息
    wx.navigateTo({
      url: '../newsLists/newsLists'
    })
  },
  mapClick: function() { //跳转城市定位
    wx.navigateTo({
      url: '../city/city',
    })
  },
  ssClick: function() { //跳转搜索
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
  hrxqClick: function(e) { //活动风采、热点资讯详情
    var that = this;
    wx: wx.navigateTo({
      url: '../activi_details/activi_details?sum=' + that.data.sn + '&sid=' + e.currentTarget.dataset.id
    })
  }
})