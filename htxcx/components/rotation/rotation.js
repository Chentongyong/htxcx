var publics = require('../../public/public.js');
Component({
  properties: { //接收传值，是字符串类型
    qf: String
  },
  data: {
    movies: []
  },
  attached: function () {
    // console.log(res.data.data.bannerList)
    let that = this;
    // console.log(that.properties.qf)//判断是哪个页面的轮播图，首页为0、工程指导为1、标书制作为2
    if (that.properties.qf==0){
      wx.request({
        url: publics.ttpss().httpst + '/wx/home/index',
        data: {},
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          let sum = [];
          let sy = res.data.data.bannerList;
          sy.forEach((item, index, arr) => {
            sum.push(arr[index].url)
          })
          that.setData({
            movies: sum
          })
        }
      })
    }
    if (that.properties.qf == 1) {
      wx: wx.request({
        url: publics.ttpss().httpst +'/wx/enginguide/index',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          let sum = [];
          res.data.data.slideshowList.forEach((item, index, arr) => {
            sum.push(arr[index].url)
          })
          that.setData({
            movies: sum
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
    if (that.properties.qf == 2){
      wx: wx.request({
        url: publics.ttpss().httpst + '/wx/bidmake/index',
        data: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          // console.log(res.data.data.slideshowList)
          let sum = [];
          res.data.data.slideshowList.forEach((item, index, arr) => {
            sum.push(arr[index].url)
          })
          that.setData({
            movies: sum
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  moved: function () {
  },
  detached: function () {
  },
  methods: {

  }
})