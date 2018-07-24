// pages/Shopping_details/Shopping_details.js
var App = getApp();
var WxParse = require('../../wxParse/wxParse.js');//1.引用 解析html
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
    var that = this;

    App.editTabBar(that);
    var id = options.id;
    var class1 = options.class1;

    // var ajaxdata
   //console.log(class1)
    var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Newsshow/index/id/' + id + '/class1/' + class1;
    util.ntime(utilMd5, that, url, "calll");
  
  },
  calll: function (that, res) {

   //console.log(res.all.content)
    WxParse.wxParse('article', 'html', res.all.content, that, 5);
  },

//加入购物车
  addcart: function (e) {
    var that = this;
    var id = e.currentTarget.id;
   // console.log(id)

    wx.showToast({
      title: '正在添加',
      icon: 'loading',
      //image: '../../images/warningt.png',
      duration: 2000
    })

    wx.login({
      success: function (res) {

        var code = res.code;


        // var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/getwxopenid';

        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/addcart/id/' + id + '/fggwnum/1/code/' + code + '/.html';

        //console.log(url + '?token=' + utilMd5); return false;

        util.ntime(utilMd5, that, url);
        //console.log(that.data)

      }
    })
    that.setData({
      "id": id
    })
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      //image: '../../images/warningt.png',
      duration: 2000
    })

  },

  buynow: function (e) {

    var that = this;
    var id = e.currentTarget.id;

 
    wx.login({
      success: function (res) {

        var code = res.code;


        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/addcart/id/' + id + '/ljgmmm/1/code/' + code + '/.html';

     
        util.ntime(utilMd5, that, url);
       

      }
    })


    wx.redirectTo({
      url: '/pages/Paymentorder/Paymentorder?id=' + id + '&ljgmmm=1'
    })

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