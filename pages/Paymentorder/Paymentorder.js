// pages/Payment order/Payment order.js

var utilMd5 = require('../../utils/md5.js');
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.showToast({
      title: '页面加载中',
      icon: 'loading',
      duration: 2000
    })

    var that=this;
    var id = options.id;

   

    var aid = options.aid;
    var ljgmmm = options.ljgmmm;


   
    console.log(aid)

   
    wx.login({
      success: function (res) {

        var code = res.code;



      if (ljgmmm) {
        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/index/ljgmmm/' + ljgmmm + '/aid/' + aid + '/pay/0/id/' + id + '/code/' + code + '/.html';
        } else {

        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/index/aid/'+ aid +'/pay/0/id/' + id + '/code/' + code + '/.html';

       }


        util.ntime(utilMd5, that, url);

        console.log(that.data)

      }
    })

   
    this.setData({
      id: id,
      ljgmmm: ljgmmm
    });
   
     
 

  },


//立即支付
  paynow: function (e) {


    var caddress = this.data.addresss;
    var id = e.currentTarget.dataset.id;
    if(!caddress){
      wx.showToast({
        title: '请选择地址',
        //icon: 'loading',
        image: '../../images/warningt.png',
        duration: 2000
      })

      return false;

     

    }
/*
    wx.redirectTo({
      url: '/pages/address/address?id=' + id
    })
    */

  },


  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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