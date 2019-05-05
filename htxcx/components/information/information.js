// components/information/information.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      sum: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    listBox: [{
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着',
        sj: '09-27'
      },
      {
        imgUrl: '../../images/rdzx.png',
        title: '开学后遗症，幼儿园小男孩错把椅子',
        ms: '近日一家幼儿园发生一件特别好笑的事情，一个小男孩背着“书包”想着一个小男孩背着“书包”想着',
        sj: '09-27'
      }
    ]
  },
  attached: function () {
    var that = this;
    console.log(this.properties.sum)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    xqClick: function () {
      wx: wx.navigateTo({
        url: '../activi_details/activi_details'
      })
    },
  }
})