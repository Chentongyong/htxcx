function funs(){
  wx.getStorage({
    key: 'gzmd',
    success: function (res) {
      console.log(res)
    }
  })
}
module.exports = {
  funs: funs
}