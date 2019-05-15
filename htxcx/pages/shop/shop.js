// pages/mine/mine.js
const app = getApp();
const publics = require('../../public/public.js');
let list = [];
let page = 1;
let limit = 15;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listEj:[],
    listSp:[],
    tabbar: {},
    shopId:'',
    ind:0,
    qh:0
  },
  qhClick:function(e){
    list = [];
    page = 1;
    let that = this;
    if (e.currentTarget.dataset.text==='商品'){
      that.setData({
        qh:0,
        listSp:[]
      })
    }
    if (e.currentTarget.dataset.text==='设备租凭'){
      that.setData({
        qh: 1,
        listSp: []
      })
    }
    that.shopType()
  },
  details:function (e){
    wx.navigateTo({
      url: '../shop_details/shop_details?sid=' + e.currentTarget.dataset.id,
    })
  },
  xzClick:function(e){
    list=[];
    page=1;
    let that = this;
    that.setData({
      ind: e.currentTarget.dataset.index,
      shopId: e.currentTarget.dataset.id
    })
    that.datas();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
    this.shopType()
  },
  onShow: function () {

  },
  shopType:function(){
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/devicecategory/list',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        this.setData({
          listEj: res.data.data.list,
          shopId: res.data.data.list[0].id
        })
        this.datas()
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  datas:function(){
    let that = this;
    wx:wx.request({
      url: publics.ttpss().httpst + '/wx/goods/list',
      data: {
        "deviceCategoryId": that.data.shopId,
        "page": page,
        "limit": limit
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) =>{
        if (res.data.data.totalPages > page) {
          res.data.data.deviceList.forEach((item,index,arr)=>{
            list.push(arr[index])
          })
          this.setData({
            listSp: list
          })
        }else{
          res.data.data.deviceList.forEach((item, index, arr) => {
            list.push(arr[index])
          })
          this.setData({
            show: true,
            listSp: list
          })
        }
        console.log(res.data.data.deviceList)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.datas()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})