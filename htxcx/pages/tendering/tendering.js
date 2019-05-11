// pages/demo/filter.js
var _self;
var tender_sum = [];
Page({
  data: {
    //被展示的菜单
    showingIndex: 0,
    //第一个选项相关
    orderIndex: 0,
    orderList: [],
    //第二个选项相关
    cateIndex: 0,
    //价格排序
    priceOrder: 1,
    selection: true,
    // currentIndex:0,
    // 普通，银钻。金钻
    ordinary: false,
    silver: false,
    gold: false,
    // 筛选条件
    userId: '',
    page: 1,
    engin_category_id: '',
    // 下标默认
    currentPIndex: 100,
    currentCIndex: 100,
    currentIndex: 100,
    bid_level: '',
    price: '',
    province: '',
    title:'',
    city: '',
    area: '',
    limit: 10,
    region: ['区域', '区域', '区域'],
    customItem: '全部',
  },
  onLoad: function() {
    var that = this;
    that.setData({
      userId: '',
      page: 1,
      engin_category_id: '',
      bid_level: '',
      price: '',
      province: '',
      city: '',
      area: '',
      limit: 10,
    })
    this.getList();
    // setTimeout(function () {
    //   that.regionFun(that.data.regionList[0].id)
    // }, 1000)
    // this.regionFun(1)
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
          var sHeight = 2 * (windowHeight - res.height - 58);
          _self.setData({
            filterHeight: sHeight
          });
        }).exec();
      }
    });
  },
  changeOrder: function(e) {
    tender_sum = [];
    console.log(e)
    var enginCategoryId = e.currentTarget.dataset.concent.id
    var tapIndex = e.target.dataset.itemid;
    console.log(tapIndex)
    this.setData({
      orderIndex: tapIndex
    });
    this.setData({
      showingIndex: 0,
      engin_category_id: enginCategoryId,
      orderIndex: tapIndex,
      cover: false
    });
    this.getList();
  },
  // 综合排序
  showOptions1: function() {
    // if (this.data.showingIndex != 0) {
    //   this.setData({
    //     showingIndex: 0
    //   });
    //   return;
    // }
    var that = this;
    this.setData({
      showingIndex: 1,
      selection: true,
      ordinary: that.data.ordinary,
      silver: that.data.silver,
      cover: true,
      gold: that.data.gold,
      screen: false
    });
  },
  // 普通招标
  showOptions2: function() {
    // if (this.data.showingIndex != 0) {
    //   this.setData({
    //     showingIndex: 0
    //   });
    //   return;
    // }
    tender_sum = [];
    var that = this;
    this.setData({
      showingIndex: 2,
      ordinary: true,
      selection: that.data.selection,
      silver: false,
      gold: false,
      screen: false,
      bid_level: 0,
      cover: false
    });
    this.getList();
  },
  // 银砖招标
  showOptions3: function() {
    // if (this.data.showingIndex != 0) {
    //   this.setData({
    //     showingIndex: 0
    //   });
    //   return;
    // }
    tender_sum = [];
    var that = this;
    this.setData({
      showingIndex: 2,
      ordinary: false,
      selection: that.data.selection,
      silver: true,
      gold: false,
      screen: false,
      bid_level: 1,
    });
    this.getList();
  },
  // 金砖招标
  showOptions4: function() {
    // if (this.data.showingIndex != 0) {
    //   this.setData({
    //     showingIndex: 0
    //   });
    //   return;
    // }
    tender_sum = [];
    var that = this;
    this.setData({
      showingIndex: 2,
      ordinary: false,
      selection: that.data.selection,
      silver: false,
      gold: true,
      screen: false,
      bid_level: 2,
    });
    this.getList();
  },
  showOptions99: function() {
    // if (this.data.showingIndex != 0) {
    //   this.setData({
    //     showingIndex: 0
    //   });
    //   return;
    // }
    tender_sum = [];
    var that = this;
    this.setData({
      showingIndex: 99,
      ordinary: that.data.ordinary,
      selection: that.data.selection,
      silver: that.data.silver,
      gold: that.data.gold,
      // screen:true
    });
  },
  selectMoney: function(e) {
    console.log(e)
    var index = e.currentTarget.dataset.index;
    var priceId = e.currentTarget.dataset.id
    this.setData({
      currentIndex: index,
      price: priceId
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

  //提交条件
  formsubmit: function(e) {
    var that = this;
    console.log(e)
    tender_sum = [];
    // wx.showModal({
    //   title: '请观察控制台',
    //   content: '条件以表单形式提交 ^_^'
    // });
    _self.setData({
      showingIndex: 0
    });
    that.getList();
  },
  //重置表单
  formReset: function() {
    tender_sum = [];
    _self.setData({
      showingIndex: 0,
      price: '',
      province: '',
      city: '',
      area: '',
      currentPIndex:100,
      currentCIndex: 100,
      currentIndex: 100
    });
    this.getList();
  },
  // 地区调用
  regionFun: function(regionId) {
    var that = this;
    wx.request({
      url: getApp().data.serviceUrl + '/wx/region/list',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      data: {
        pid: regionId
      },
      success: function(res) {
        console.log(res)
        that.setData({
          cityData: res.data.data
        })

      },
      fail: function(e) {
        wx.showToast({
          title: '网络断开，稍后重试',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  //条件更新后执行统一函数（如重新读取数据等）
  getList: function() {
    var that = this;
    var tenderObj = {
      "page": that.data.page,
      "userId": that.data.userId,
      "limit": that.data.limit,
      "bid": {
        "enginCategoryId": that.data.engin_category_id,
        "bidLevel": that.data.bid_level,
        "price": that.data.price,
        "province": that.data.province,
        "city": that.data.city,
        "area": that.data.area,
        "title": that.data.title,
      },
    }
    // 请求数据
    wx.request({
      url: getApp().data.serviceUrl + '/wx/bid/list',
      method: "POST",
      header: {
        'content-type': 'application/json'
      },
      data: tenderObj,
      success: function(res) {
        console.log(res)
        console.log(res.data.data.bidList)
        console.log(res.data.data)
        console.log(tenderObj)
        var total = res.data.data.totalPages;
        if (total == 0) {
          that.setData({
            hasMore: false
          })
        }
        var enginCategoryList = res.data.data.enginCategoryList;
        var enginCategoryArray = [{
          id: '',
          name: '综合'
        }];
        for (var i = 0; i < enginCategoryList.length; i++) {
          // console.log(enginCategoryList[i])
          enginCategoryArray.push(enginCategoryList[i])
        }
        console.log(enginCategoryArray)
        var bidList = res.data.data.bidList;
        for (var i = 0; i < bidList.length; i++) {
          if (bidList[i].bidLevel == 0) {
            bidList[i]['bidType'] = '普通招标'
          } else if (bidList[i].bidLevel == 1) {
            bidList[i]['bidType'] = '银钻招标'
          } else if (bidList[i].bidLevel == 2) {
            bidList[i]['bidType'] = '金钻招标'
          }
          tender_sum.push(bidList[i])
        }
        console.log(enginCategoryArray)
        var regionList = res.data.data.regionList;
        // 获取金额
        var priceList = res.data.data.priceList;
        var priceArray = [];
        for (var key in priceList) {
          var priceObj = {};
          priceObj['id'] = key;
          priceObj['title'] = priceList[key];
          priceArray.push(priceObj)
        }
        console.log(priceArray)
        that.setData({
          orderList: enginCategoryArray,
          bidList: tender_sum,
          regionList: regionList,
          priceArray,
          total
        })
        that.regionFun(regionList[0].id)
      },
      fail: function(e) {
        wx.showToast({
          title: '网络断开，稍后重试',
          icon: 'none',
          duration: 2000
        })
      }
    })
    console.log('条件更新后执行统一函数（如重新读取数据等）');
  },
  searchValue:function(e){
    console.log(e)
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 搜索
  searchResult:function(){
    tender_sum = [];
    var that = this;
    var inputValue = this.data.inputValue;
    this.setData({
      title: inputValue
    })
    that.getList();
  },
  // 区域事件
  clickTap: function(e) {
    console.log(e)
    var that = this;
    var currentIndex = e.currentTarget.dataset.index;
    var provinceId = e.currentTarget.dataset.provice.id;
    this.setData({
      currentPIndex: currentIndex,
      province: provinceId
    })
    that.regionFun(provinceId)
  },
  // 获取市
  cityTap: function(e) {
    console.log(e)
    var that = this;
    var currentIndex = e.currentTarget.dataset.index;
    var cityId = e.currentTarget.dataset.city.id;
    this.setData({
      currentCIndex: currentIndex,
      city: cityId
    })
    // that.regionFun(provinceId)
  },
  // 触底加载
  onReachBottom: function() {
    var that = this;
    console.log(111)
    var page = that.data.page + 1;
    console.log(page)
    console.log(that.data.total)
    if (page > that.data.total) {
      that.setData({
        hasMore: false,
      })
      return false;
    } else {
      // 页数+1
      this.setData({
        page
      })
      // 请求数据
      that.getList();
    }
  },
  xqClick: function(e) {
    console.log(e)
    var orderId = e.currentTarget.dataset.order.id
    var userId = e.currentTarget.dataset.order.userId
    wx: wx.navigateTo({
      url: '../tenderDetails/tenderDetails?type=' + 0 + '&orderId=' + orderId + '&userId=' + userId
    })
  },


})