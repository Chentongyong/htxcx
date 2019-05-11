// pages/demo/filter.js
var _self;
Page({
  data: {
    //被展示的菜单
    showingIndex: 0,
    //第一个选项相关
    orderIndex: 0,
    orderList: ['综合', '中央空调', '工业设备', '油烟机'],
    //第二个选项相关
    cateIndex: 0,
    cateList: ['汽车', '新闻', '热点', '电影'],
    //价格排序
    priceOrder: 1,
    //筛选条件
    where1Tips: [{
        name: "条件 - 1",
        value: 1,
        checked: true
      },
      {
        name: "条件 - 2",
        value: 2
      },
      {
        name: "条件 - 3",
        value: 3
      },
      {
        name: "条件 - 4",
        value: 4
      },
      {
        name: "条件 - 5",
        value: 5
      }
    ],
    where2Tips: [{
        name: "条件 - 1",
        value: 1
      },
      {
        name: "条件 - 2",
        value: 2,
        checked: true
      },
      {
        name: "条件 - 3",
        value: 3
      },
      {
        name: "条件 - 4",
        value: 4
      },
      {
        name: "条件 - 5",
        value: 5
      }
    ],
    region: ['区域', '区域', '区域'],
    customItem: '全部',
  },
  xqClick:function(){
    wx:wx.navigateTo({
      url: '../tenderDetails/tenderDetails?s='+0
    })
  },
  changeOrder: function(e) {
    var tapIndex = e.target.dataset.itemid;
    this.setData({
      orderIndex: tapIndex
    });
    this.setData({
      showingIndex: 0
    });
    this.getList();
  },
  showOptions1: function() {
    if (this.data.showingIndex != 0) {
      this.setData({
        showingIndex: 0
      });
      return;
    }
    this.setData({
      showingIndex: 1
    });
  },
  showOptions2: function() {
    if (this.data.showingIndex != 0) {
      this.setData({
        showingIndex: 0
      });
      return;
    }
    this.setData({
      showingIndex: 2
    });
  },
  showOptions99: function() {
    if (this.data.showingIndex != 0) {
      this.setData({
        showingIndex: 0
      });
      return;
    }
    this.setData({
      showingIndex: 99
    });
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
  onReady: function() {
    _self = this;
    wx.getSystemInfo({
      success: function(res) {
        var windowHeight = res.windowHeight;
        //获取头部标题高度
        wx.createSelectorQuery().select('#grace-filter-header').fields({
          size: true,
        }, function(res) {
          //计算得出滚动区域的高度
          var sHeight = (windowHeight - res.height);
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