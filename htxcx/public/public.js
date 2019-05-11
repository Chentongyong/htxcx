var st = {}
wx.getStorage({
  key: 'gzmd',
  success: function(res) {
    st['userName'] = res.data.userName;
    st['userImg'] = res.data.userImg;
    st['member'] = res.data.member;
    st['openid'] = res.data.openid;
    st['userUid'] = res.data.userUid;
  }
})

const requestPromise = function (myUrl,data) {
  // 返回一个Promise实例对象
  return new Promise((resolve, reject) => {
    wx.request({
      url: myUrl,
      success: res => resolve(res)
    })
  })
}

const funs = function() {
  return st
}

const ttps = function () {
  var ss = 'https://wwwgezimd.com/Store/cityaction!main.action';
  return ss
}

const phones = function(e){
  wx.makePhoneCall({
    phoneNumber: e.currentTarget.dataset.replyPhone,
    success: function () {
      console.log("成功拨打电话")
    },
  })
}

const ttpss = function () {
  let listq = {
    zb: '../tendering/tendering',//招标信息
    bs: '../document/document',//标书制作
    zz: '../honor/honor',//资质荣誉
    gc: '../guidance/guidance',//工程指导
    gcq: '../grabSheet/grabSheet',//工程抢单
    px: '../training/training',//培训资料
    gg: '../advertising/advertising',//广告合作
    pp: '../support/support',
    httpst: 'http://192.168.1.193:8082',
    // index: 'http://192.168.1.193:8082/wx/home/index',//首页
    // search: 'http://192.168.1.193:8082/wx/search/index',//首页获取历史记录、热门搜索
    // sea: 'http://192.168.1.193:8082/wx/search/search',//首页搜索
    // activi1: 'http://192.168.1.193:8082/wx/activity/list',//活动风采
    // activi1_xq: 'http://192.168.1.193:8082/wx/activity/detail?id=',//活动风采详情
    // activi2:'http://192.168.1.193:8082/wx/news/list',//热点资讯
    // activi2_xq: 'http://192.168.1.193:8082/wx/activity/detail?id',//热点资讯详情
    // guidance: 'http://192.168.1.193:8082/wx/enginguide/index',//工程指导
    // guianli: 'http://192.168.1.193:8082/wx/enginguide/list',//工程指导(服务案例按需查询)
    // // gcsList: 'http://192.168.1.193:8082/wx/engineer/categorylist',//工程师列表(类型)
    // gcsLists: 'http://192.168.1.193:8082/wx/engineer/list',//工程师列表
    // guigcs: 'http://192.168.1.193:8082/wx/engineer/detail',//工程指导(工程师详情)
  }
  // var zb = '../';//招标信息
  return listq
}


module.exports = {
  funs: funs,
  ttps: ttps,
  requestPromise: requestPromise,
  ttpss,
  phones
}