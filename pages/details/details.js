var App = getApp();
var WxParse = require('../../wxParse/wxParse.js');//1.引用 解析html
var utilMd5 = require('../../utils/md5.js');

var util = require('../../utils/util.js');
// pages/details/details.js
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

    ///console.log(id)
  

    var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Newsshow/index/id/' + id + '/class1/' + class1;
    util.ntime(utilMd5, that, url, "calll");
  },
  calll: function (that,res) {
   
    console.log(res.all.content)
    WxParse.wxParse('article', 'html', res.all.content, that, 5);
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