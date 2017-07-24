Page({
  data: {
    imgUrls: [
      'http://only5201314.com/uploads/2017/04/181412206332.jpg',
      'http://only5201314.com/uploads/2017/04/181412209429.jpg',
      'http://only5201314.com/uploads/2017/04/181412196023.jpg'
    ],
    indicatorDots:true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    hotList:[
      {
        pic:"http://www.lemontreevip.com/upload/201512/201512191450513761.jpg",
        title:"春风十里不如你",
        area:"三亚",
        day:"1day",
        avatar:"http://img3.imgtn.bdimg.com/it/u=4293197616,2435113501&fm=23&gp=0.jpg",
        name:"南若北",
        fee:"3000",
        experience:'7年'
      },
      {
        pic:"http://www.lemontreevip.com/upload/201512/201512191450512739.jpg",
        title:"一场没有终点的旅行",
        area:"三亚",
        day:"1day",
        avatar:"http://img.qq745.com/uploads/allimg/170413/14-1F413113106-53.png",
        name:"苏晓",
        fee:"4000",
        experience:'10年以上'
      },
      {
        pic:"http://www.lemontreevip.com/upload/201603/1458298749772440744000.jpg",
        title:"恋上彩虹的梦",
        area:"三亚",
        day:"1day",
        avatar:"http://img.qq745.com/uploads/allimg/170413/14-1F413113108-52.png",
        name:"峰方",
        fee:"3500",
        experience:'10年'
      },
      {
        pic:"http://www.lemontreevip.com/upload/201512/201512101449733988.jpg",
        title:"日暮三亚",
        area:"三亚",
        day:"1day",
        avatar:"http://img.qq745.com/uploads/allimg/170413/14-1F413113109-52.png",
        name:"大鹏",
        fee:"2500",
        experience:'7年'
      },
      {
        pic:"http://www.lemontreevip.com/upload/201508/1438966134523121267000.jpg",
        title:"帆船高尔夫",
        area:"三亚",
        day:"1day",
        avatar:"http://img.qq745.com/uploads/allimg/170413/14-1F413113111-50.png",
        name:"一方",
        fee:"2500",
        experience:'7年'
      },
      {
        pic:"http://www.lemontreevip.com/upload/201603/201603181458295704.jpg",
        title:"西岛恋曲",
        area:"三亚",
        day:"1day",
        avatar:"http://img.qq745.com/uploads/allimg/150307/1-15030G54010.jpg",
        name:"大浦",
        fee:"1800",
        experience:'5年'
      }
    ],
  },
yuyue: function(e) {
  console.log(e.currentTarget.dataset);
  console.log(e.currentTarget.dataset.pic);
  console.log(e.currentTarget.dataset.name);
  wx.setStorage({
    key:"pic",
    data:e.currentTarget.dataset.pic
  });
  wx.setStorage({
    key:"title",
    data:e.currentTarget.dataset.title
  });
  wx.setStorage({
    key:"area",
    data:e.currentTarget.dataset.area
  });
  wx.setStorage({
    key:"day",
    data:e.currentTarget.dataset.day
  });
  wx.setStorage({
    key:"avatar",
    data:e.currentTarget.dataset.avatar
  });
  wx.setStorage({
    key:"name",
    data:e.currentTarget.dataset.name
  });
  wx.setStorage({
    key:"fee",
    data:e.currentTarget.dataset.fee
  });
  wx.setStorage({
    key:"experience",
    data:e.currentTarget.dataset.experience
  });
    wx.navigateTo({
      url: '../yuyue/yuyue'
    });

},
more: function(){
  wx.navigateTo({
    url:'../more/more'
  })
},
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
