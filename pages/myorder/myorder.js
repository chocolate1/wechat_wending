//index.js
//获取应用实例

var app = getApp()
Page({
  data: {
    datevalue:'',
        id:'1',
        title:"",
        area:"",
        day:"1",
        name:"",
        experience:"",
        dingjin:"300",
        fee:"",
        number:'',
        still:'',
        xiadan:'下单',
        display1:'',
        display2:''
  },
  onReady:function(){
    wx.setNavigationBarTitle({
      title:'我的订单'
    })
  },
  onShow:function(){
    wx.removeStorage({
      key: 'id'
    });
    let that=this;
    wx.getStorage({
      key:'date',
      success:function(res){
        console.log('dasfhuishf');
        console.log(res.data);
        that.setData({
          datevalue:res.data
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
      key:'area',
      success:function(res){
        console.log(res.data);
        that.setData({
          area:res.data
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
    key:'title',
    success:function(res){
      console.log(res.data);
      that.setData({
        title:res.data,
      });
      if(that.data.id === res.data){
        that.setData({
          display1:'none',
          display2:'block'

        });
      }else{
        that.setData({
          display1:'block',
          display2:'none'
        });
      }
    },
    fail:function(){
      that.setData({
        id:0
      });
      console.log(that.data.id);
      if(that.data.id === 0){
        that.setData({
          display1:'none',
          display2:'block'
        });
      }else{
        that.setData({
          display1:'block',
          display2:'none'
        });
      }
    }
  });
  wx.getStorage({
      key: 'order',
      success: function success(res) {
        console.log(res.data);
        that.setData({
          dates: res.data.dates,
        });
      }
    })
  }
})
