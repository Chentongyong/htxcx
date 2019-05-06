var publics = require('../../public/public.js');
Component({
  properties: { //接收传值，是字符串类型
    paramAtoB: Array,
    para: Object
  },
  data: {
    // 弹窗显示控制
    isShow: false,
    sum: [],
    sums: [],
    you: false,
    cz: ['我的', '你的', '他的', '她的'],
    // yous: [],
    yous: '广州市'

  },
  attached: function() {
    var that = this;
    



    if (this.properties.para[0].id == 1) {
      this.setData({
        you: true
      })
    }
    this.setData({
      sum: this.properties.paramAtoB,
      sums: this.properties.para
    })
    // publics.funs();//调用public.js公用js的值
    console.log(publics.funs())

    wx.request({
      url: publics.ttps(), //仅为示例，并非真实的接口地址
      data: {
        'store.city': '广州市'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        // console.log(res.data)
        var sumst = [];
        for (var j = 0; j < res.data.length; j++) {
          sumst.push(res.data[j].text);
        }
        that.setData({
          cz: sumst
        })
      },
      fail: function() {

      }
    })

  },
  moved: function() {
    console.log(2222)
  },
  detached: function() {
    console.log(3333)
  },
  methods: {
    cancelBut: function(e) { // 传递给父组件 
      var that = this;
      this.setData({
        xz: e.target.dataset.text
      })
      var myEventDetail = {
        pickerShow: e.target.dataset.text,
        type: 'cancel'
      } // detail对象，提供给事件监听函数 
      this.triggerEvent('myevent', myEventDetail) //myevent自定义名称事件，父组件中使用 
    }
  }
})