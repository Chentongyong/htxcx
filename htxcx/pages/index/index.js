//index.js
//获取应用实例
const app = getApp()

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
    tabbar: {},
    movies: ['','',''],
    listBox:[
      { imgUrl: '../../images/rdzx.png', title: '开学后遗症，幼儿园小男孩错把椅子', ms:'近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',sj:'09-27'},
      { imgUrl: '../../images/rdzx.png', title: '开学后遗症，幼儿园小男孩错把椅子', ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着', sj: '09-27' },
      { imgUrl: '../../images/rdzx.png', title: '开学后遗症，幼儿园小男孩错把椅子', ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着', sj: '09-27' },
      { imgUrl: '../../images/rdzx.png', title: '开学后遗症，幼儿园小男孩错把椅子', ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着一个小男孩背着“书包”想着', sj: '09-27' }
    ]

  },

  onLoad: function() {
    var that = this;
    app.editTabbar(); //引用底部导航
    wx.setStorageSync('gzmd', {
      'userName': that.data.userName,
      'userImg': that.data.userImg,
      'member': that.data.member,
      'openid': that.data.openid,
      'userUid': that.data.userUid
    })

  },
  tab1Click: function() {
    wx: wx.navigateTo({
      url: '/packageTab1/pages/cat/cat'
    })
  },
  tab2Click: function() {
    wx: wx.navigateTo({
      url: '/packageTab2/pages/apple/apple'
    })
  }
})