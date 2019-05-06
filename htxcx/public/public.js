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
    pp: '../support/support'
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