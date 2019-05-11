var publics = require('../../public/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qualifications: [],
    honor: [],
    listBox: [],
    imgUrl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx: wx.request({
      url: publics.ttpss().httpst + '/wx/qualificationhonor/index',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data.data)
        this.setData({
          imgUrl: res.data.data.picUrl,
          qualifications: res.data.data.honorList,
          honor: res.data.data.qualificationList,
          listBox: res.data.data.qualificationHonorList
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  zzClick: function() {
    wx.navigateTo({
      url: '../certificate/certificate'
    })
  },
  zyDetails:(e)=>{
    let url = e.currentTarget.dataset.url;
    let imgList = [];
    imgList.push(url)
    wx.previewImage({
      current: url,
      urls: imgList
    })
  },
  ryClick: function() {
    wx: wx.navigateTo({
      url: '../honor_book/honor_book'
    })
  },
  xqClick: function(e) {
    wx: wx.navigateTo({
      url: '../training_details/training_details?sid=' + e.currentTarget.dataset.id+'&sum='+'资质'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})