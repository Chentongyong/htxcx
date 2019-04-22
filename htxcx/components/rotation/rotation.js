Component({
  properties: { //接收传值，是字符串类型
  },
  data: {
    movies: [{
        url: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/31264/27/5728/98563/5c87ed32E0208f880/69d5274bf3ed44b9.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      },
      {
        url: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/27867/17/10524/129623/5c879a5cEe748e5af/b30c958f0219291d.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      },
      {
        url: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/27681/8/10652/102294/5c885408Effcb8a99/e51b29795f0fc49f.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      }
    ]
  },
  attached: function() {
  },
  moved: function() {
    console.log(2222)
  },
  detached: function() {
    console.log(3333)
  },
  methods: {

  }
})
