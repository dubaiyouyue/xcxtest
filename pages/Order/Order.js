// pages/Order/Order.js
var utilMd5 = require('../../utils/md5.js');
var util = require('../../utils/util.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {

    hovers: '',
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that=this;

   

    this.setData({
      ll: '0',
      hh: '',
      ss: ''

    });


  
    wx.login({
      success: function (res) {

        var code = res.code;
        var pay='1,2'
      
        //console.log(pay);
        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/index/pay/'+ pay +'/code/' + code + '/.html';

        //console.log(url + '?token=' + utilMd5); return false;

        util.ntime(utilMd5, that, url);
        //console.log(that.data)

      }
    })


    
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  nopay: function (e) {
    wx.showToast({
      title: '页面加载中',
      icon: 'loading',
      duration: 2000
    })

    this.setData({
      ss: '1',
      hh: '',
      ll:''

    });


  
    var that = this;
    

   
    wx.login({
      success: function (res) {

        var code = res.code;
        var pay = '1';
        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/index/pay/' + pay + '/code/' + code + '/.html';
        util.ntime(utilMd5, that, url);
     

      }
    })


  },

  yespay: function (e) {
    wx.showToast({
      title: '页面加载中',
      icon: 'loading',
      duration: 2000
    })

    var that = this;

    this.setData({
      ss: '',
      hh: '1',
      ll: ''

    });

   

     
    wx.login({
      success: function (res) {

        var code = res.code;
        var pay = '2';
        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/index/pay/' + pay + '/code/' + code + '/.html';
        util.ntime(utilMd5, that, url);
        console.log(that.data)

      }
    })

  },

  

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})