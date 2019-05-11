// pages/demo/filter.js
var _self;
Page({
  data: {
    //被展示的菜单
    showingIndex: 0,
    //第一个选项相关
    orderIndex: 0,
    orderList: ['综合', '中央空调', '工业设备', '油烟机'],
    currentIndex: 0,
    selection: true,
    //第二个选项相关
    cateIndex: 0,
    cateList: ['汽车', '新闻', '热点', '电影'],
    //价格排序
    priceOrder: 1,
   
    region: ['区域', '区域', '区域'],
    customItem: '全部',
  },
  changeOrder: function (e) {
    var tapIndex = e.target.dataset.itemid;
    this.setData({
      orderIndex: tapIndex
    });
    this.setData({
      showingIndex: 0,
      cover: false
    });
    this.getList();
  },
  // 综合排序
  showOptions1: function () {
    // if (this.data.showingIndex != 0) {
    //   this.setData({
    //     showingIndex: 0
    //   });
    //   return;
    // }
    this.setData({
      showingIndex: 1,
      selection: true,
      ordinary: false,
      silver: false,
      cover: true,
      gold: false,
      screen: false
    });
  },
  // 普通招标
  showOptions2: function () {
    // if (this.data.showingIndex != 0) {
    //   this.setData({
    //     showingIndex: 0
    //   });
    //   return;
    // }
    this.setData({
      showingIndex: 2,
      ordinary: true,
      selection: false,
      silver: false,
      gold: false,
      screen: false
    });
  },
  // 银砖招标
  showOptions3: function () {
    // if (this.data.showingIndex != 0) {
    //   this.setData({
    //     showingIndex: 0
    //   });
    //   return;
    // }
    this.setData({
      showingIndex: 2,
      ordinary: false,
      selection: false,
      silver: true,
      gold: false,
      screen: false
    });
  },
  // 金砖招标
  showOptions4: function () {
    // if (this.data.showingIndex != 0) {
    //   this.setData({
    //     showingIndex: 0
    //   });
    //   return;
    // }
    this.setData({
      showingIndex: 2,
      ordinary: false,
      selection: false,
      silver: false,
      gold: true,
      screen: false
    });
  },
  showOptions99: function () {
    // if (this.data.showingIndex != 0) {
    //   this.setData({
    //     showingIndex: 0
    //   });
    //   return;
    // }
    this.setData({
      showingIndex: 99,
      ordinary: false,
      selection: false,
      silver: false,
      gold: false,
      screen: true
    });
  },
  selectMoney: function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex: index
    })
  },
  changeCate: function(e) {
    var tapIndex = e.target.dataset.itemid;
    this.setData({
      cateIndex: tapIndex
    });
    this.setData({
      showingIndex: 0
    });
    this.getList();
  },
  //价格排序
  changePriceOrder: function() {
    if (this.data.priceOrder == 1) {
      this.setData({
        priceOrder: 2
      });
    } else {
      this.setData({
        priceOrder: 1
      });
    }
    wx.showModal({
      title: '价格排序已经切换',
      content: '对应的值保存在 priceOrder 变量中 ^_^'
    });
    this.getList();
  },
  onReady: function () {
    _self = this;
    wx.getSystemInfo({
      success: function (res) {
        var windowHeight = res.windowHeight;
        //获取头部标题高度
        wx.createSelectorQuery().select('#grace-filter-header').fields({
          size: true,
        }, function (res) {
          //计算得出滚动区域的高度
          var sHeight = 2 * (windowHeight - res.height - 58);
          _self.setData({
            filterHeight: sHeight
          });
        }).exec();
      }
    });
  },
  //提交条件
  formsubmit: function(e) {
    console.log(e)
    wx.showModal({
      title: '请观察控制台',
      content: '条件以表单形式提交 ^_^'
    });
    _self.setData({
      showingIndex: 0
    });
    this.getList();
  },
  //重置表单
  formReset: function() {
    for (var i = 0; i < _self.data.where1Tips.length; i++) {
      _self.data.where1Tips[i].checked = false;
    }
    _self.setData({
      where1Tips: _self.data.where1Tips
    });
    for (var i = 0; i < _self.data.where2Tips.length; i++) {
      _self.data.where2Tips[i].checked = false;
    }
    _self.setData({
      where2Tips: _self.data.where2Tips
    });
    _self.setData({
      showingIndex: 0
    });
    this.getList();
  },
  //筛选页面js
  changeFunc: function(e) {
    var checkVal = e.detail.value;
    for (var i = 0; i < this.data.where1Tips.length; i++) {
      if (checkVal.indexOf(this.data.where1Tips[i].value + '') != -1) {
        this.data.where1Tips[i].checked = true;
      } else {
        this.data.where1Tips[i].checked = false;
      }
    }
    this.setData({
      where1Tips: this.data.where1Tips
    });
  },
  changeFunc2: function(e) {
    var checkVal = e.detail.value;
    for (var i = 0; i < this.data.where2Tips.length; i++) {
      if (checkVal.indexOf(this.data.where2Tips[i].value + '') != -1) {
        this.data.where2Tips[i].checked = true;
      } else {
        this.data.where2Tips[i].checked = false;
      }
    }
    this.setData({
      where2Tips: this.data.where2Tips
    });
  },
  //条件更新后执行统一函数（如重新读取数据等）
  getList: function() {

    console.log('条件更新后执行统一函数（如重新读取数据等）');
  },
  // 跳转详情
  grabSheetDes: function(e) {
    wx: wx.showModal({
      title: '系统提示',
      content: '您需要消耗1金币或者10积分才能查看该信息',
      showCancel: true,
      cancelText: '金币',
      confirmText: '积分',
      cancelColor:'#2994E6',
      confirmColor:'#808080',
      success: function(res) {
        if (res.confirm) {
          // wx: wx.navigateTo({
          //   url: '../login/login',
          //   success: function(res) {},
          //   fail: function(res) {},
          //   complete: function(res) {},
          // })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // wx: wx.navigateTo({//跳转详情
    //   url: '../tenderDetails/tenderDetails?type=' + 1
    // })
  },
  // 地区
  // 区域事件
  bindRegionChange: function(e) {
    var that = this
    var regionArray = e.detail.value;
    var province;
    var city;
    var area;
    var levelType = that.data.levelType
    console.log(regionArray)
    if (regionArray[0] == '全部') {
      province = '';
      city = '';
      area = '';
    } else if (regionArray[0] != '全部' && regionArray[1] == '全部') {
      province = regionArray[0];
      city = '';
      area = '';
    } else if (regionArray[0] != '全部' && regionArray[1] != '全部' && regionArray[2] == '全部') {
      province = regionArray[0];
      city = regionArray[1];
      area = '';
    } else {
      province = regionArray[0];
      city = regionArray[1];
      area = regionArray[2];
    }
    console.log(province)

    // console.log('picker发送选择改变，携带值为', e.detail.value)
    //创建动画
    var nowShow = e.detail.value; //获取当前option显示的状态
    var animation = wx.createAnimation({
      timingFunction: "ease"
    })
    this.animation = animation;
    if (nowShow) {
      animation.rotate(0).step();
      this.setData({
        animationData: animation.export()
      })
    } else {
      animation.rotate(180).step();
      this.setData({
        animationData: animation.export()
      })
    }
    this.setData({
      selectShow: !nowShow,
      region: e.detail.value
    })
  },
})