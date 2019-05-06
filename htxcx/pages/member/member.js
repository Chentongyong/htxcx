Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    ptList: [{
        img: '../../images/mem_pt.png',
        imgBj: '../../images/pt_bj.png',
        xz:'../../images/men_xz.png',
        title: '普通升级银钻',
        monthly: '398',
        quarter: '1098',
        year: '3998',
        colors: '#fea44b'

      },
      {
        img: '../../images/mem_jz.png',
        imgBj: '../../images/yz_bj.png',
        xz: '../../images/men_xz2.png',
        title: '普通升级金钻',
        monthly: '598',
        quarter: '1698',
        year: '5998',
        colors: '#F87979'
      }
    ],
    yzList: [{
      img: '../../images/mem_yz.png',
      imgBj: '../../images/jz_bj.png',
      xz: '../../images/men_xz3.png',
      title: '银钻升级金钻',
      monthly: '398',
      quarter: '1098',
      year: '3998',
      colors: '#FCD467'
    }],
    jzList: [{
      img: '../../images/mem_yz.png',
      imgBj: '../../images/jz_bj.png',
      xz: '../../images/men_xz3.png',
      title: '续费',
      monthly: '498',
      quarter: '1398',
      year: '5398',
      colors: '#FCD467'
    }],
    level: '金钻', //判断当前状态
    but: '升级', //判断当前状态
    xzje: '',
    spie: 4,
    texts:''
  },
  onclick: function(e) {//选择套餐
    var that = this;
    let sum = e.currentTarget.dataset.index;
    let texts = e.currentTarget.dataset.text;
    let ids = e.currentTarget.dataset.id;
    switch (ids) {
      case ids = '0':
        that.setData({
          spie: 0
        })
        break;
      case ids = '1':
        that.setData({
          spie: 1
        })
        break;
      case ids = '2':
        that.setData({
          spie: 2
        })
        break;
    }
    that.setData({
      xzje: sum,
      texts: texts
    })
    // console.log(e.currentTarget.dataset.index)
  },
  changeswiper: function(e) { //轮播组件左右滑动
    let that = this;
    that.setData({
      spie: 4
    })
  },
  onLoad: function (options){
    let that = this;
    that.setData({
      level:options.grade
    })
    let num = that.data.level;
    switch (num) {//默认显示
      case num = '普通':
        that.setData({
          list: that.data.ptList,
          xzje: 398
        })
        break;
      case num = '银钻':
        that.setData({
          list: that.data.yzList,
          xzje: 398
        })
        break;
      case num = '金钻':
        that.setData({
          list: that.data.jzList,
          xzje: 498
        })
        break;
    }
  },
  onShow: function() {

  },
  smClixk:function(){//会员说明
    wx:wx.navigateTo({
      url: '../mem_sm/mem_sm'
    })
  },
  czClick:function(){
    let that = this;
    console.log(this.data.xzje)
    console.log(this.data.texts)
    wx:wx.navigateTo({
      url: '../mem_recharge/mem_recharge?je=' + this.data.xzje+'&texts='+this.data.texts
    })
  }
})