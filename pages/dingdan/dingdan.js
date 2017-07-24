var app=getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    datevalue:util.formatTime(new Date),
    pic:"",
    title:"",
    area:"",
    day:"",
    camerist_avatar:"",
    camerist_name:"",
    experience:"",
    dingjin:"300",
    fee:"",
    number:'4'
  },
  onShow:function(){
    // wx.removeStorage({
    //   key: 'id'
    // });
    let that=this;
    wx.getStorage({
      key:'pic',
      success:function(res){
        console.log('jiuhuh');
        console.log(res.data);
        that.setData({
          pic:res.data
        })
      }
    });
    wx.getStorage({
      key:'name',
      success:function(res){
        console.log(res.data);
        that.setData({
          name:res.data
        })
      }
    });
    wx.getStorage({
      key:'avatar',
      success:function(res){
        console.log(res.data);
        that.setData({
          avatar:res.data
        })
      }
    });
    wx.getStorage({
      key:'title',
      success:function(res){
        console.log(res.data);
        that.setData({
          title:res.data
        })
      }
    });
    wx.getStorage({
      key:'area',
      success:function(res){
        console.log(res.data);
        that.setData({
          area:res.data
        })
      }
    });
    wx.getStorage({
      key:'day',
      success:function(res){
        console.log(res.data);
        that.setData({
          day:res.data
        })
      }
    });
    wx.getStorage({
      key:'fee',
      success:function(res){
        console.log(res.data);
        that.setData({
          fee:res.data
        })
      }
    });
    wx.getStorage({
      key:'experience',
      success:function(res){
        console.log(res.data);
        that.setData({
          experience:res.data
        })
      }
    });

},
  //  点击日期组件确定事件
  bindDateChange: function (e) {
    console.log('xzc');
     console.log(e.detail.value);
    this.setData({
      datevalue: e.detail.value
    })
    wx.setStorage({
      key:'date',
      data:e.detail.value
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
pay:function(e){
  wx.navigateTo({
    url: '../myorder/myorder'
  })
  console.log(e.currentTarget.id);
  wx.setStorage({
    key:"id",
    data:e.currentTarget.id,
    dates:e.detail.value
  });
  wx.showToast({
    title: '下单成功',
    icon: 'success',
    duration: 1000,
    success: setTimeout(function(){
                  wx.switchTab({ url: '../myorder/myorder' })
              }, 1000)
  });
}
})
