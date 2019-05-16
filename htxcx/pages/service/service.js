const publics = require('../../public/public.js');
let list = [];
let page = 1;
let limit = 10;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    list = [];
    page = 1;
    this.datas()
  },
  onClick: function(e) {
    wx: wx.navigateTo({
      url: '../service_details/service_details?sid='+ e.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  datas: function() {
    console.log(page)
    console.log(limit)
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/service/list',
      data: {
        "page": page,
        "limit": limit
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) =>{
        console.log(res.data.data.userList)
        if(res.data.data.totalPages>=page){
          page = page + 1;
          res.data.data.userList.forEach((item,index,arr)=>{
            arr[index].addTime = arr[index].addTime.replace(/([^\s]+)\s.*/, "$1");
            list.push(arr[index]);
          })
          this.setData({
            lists: list
          })
        }else{
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onReachBottom: function() {
    this.datas()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})