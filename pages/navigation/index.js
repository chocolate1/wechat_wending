//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    userInfo: {},
    source:'github.com/sukura7'
  },
  onLoad:function(){
    // 小程序中要获取用户的身份
    console.log('onload');
    app.getUserInfo((data) => {
      this.setData({
        userInfo:data
      })
    })
  },
  onReady:function(){
    // console.log('ready');
    wx.setNavigationBarTitle({
      title:'精选导航'
    })
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude
        var longitude = res.longitude
        this.setData({
          latitude,
          longitude
        })
      }
    })
  }
})
