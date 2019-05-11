var publics = require('../../public/public.js');
Page({
      data: {
        dataBox: {
          title: '高压清洗机',
          money: 5000,
          map: '广东宏泰节能环保工程有限公司',
          fhMap: '全国',
          img: '../../images/gctj.png',
          movies: [{
              url: '../../images/scsp.png'
            },
            {
              url: '../../images/scsp.png'
            },
            {
              url: '../../images/scsp.png'
            }
          ]
        }
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
        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage: function() {

        }
      })