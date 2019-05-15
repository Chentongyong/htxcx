var publics = require('../../public/public.js');
Page({
      data: {
        dataBox: {},
        roller:[]
      },
        phoneCall: function(e) { //电话咨询
          publics.phones(e)
        },
        phoneCall2: function(e) { //联系客服
          publics.phones(e)
        },
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function(options) {
          let that = this;
          wx:wx.request({
            url: publics.ttpss().httpst + '/wx/goods/read',
            data: {
              'id':options.sid
            },
            header: {},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res) =>{
              var regex1 = new RegExp("(i?)(\<img)(?!(.*?style=['\"](.*)['\"])[^\>]+\>)", "gmi");
              res.data.data.detail = res.data.data.detail.replace(regex1, "$2 style=\"\"$3");
              var regex2 = new RegExp("(i?)(\<img.*?style=['\"])([^\>]+\>)", "gmi");
                
              this.setData({
                dataBox: res.data.data,
                roller: res.data.data.gallery,
                myrich: res.data.data.detail.replace(regex2, "$2display:block;width:100%;height:auto;$3")
              })
              console.log(res.data.data)
            },
            fail: function(res) {},
            complete: function(res) {},
          })
        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage: function() {

        }
      })