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

module.exports = {
  funs: funs,
  ttps: ttps,
  requestPromise: requestPromise
}