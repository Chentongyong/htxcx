var publics = require('../../public/public.js');
Component({
  properties: {//接收传值，是字符串类型
    paramAtoB: Array,
    para:Object
  },
  data: {
    // 弹窗显示控制
    isShow: false,
    sum:[],
    sums:[],
    you:false
  },
  attached: function () {
    if (this.properties.para[0].id==1){
      this.setData({
        you: true
      })
    }
    this.setData({
      sum: this.properties.paramAtoB,
      sums: this.properties.para
    })
    publics.funs();
  },
  moved: function () { 
    console.log(2222)
  },
  detached: function () { 
    console.log(3333)
  },
  methods: {

  }
})