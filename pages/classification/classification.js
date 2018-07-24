var App = getApp();
var utilMd5 = require('../../utils/md5.js');

var util = require('../../utils/util.js');


// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zz:'1'
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    App.editTabBar(that);

    // var ajaxdata
     //console.log(that.data.hh);


    var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Classify/index';
    util.ntime(utilMd5, that, url);

  },
  addcart: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    //console.log(id)

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
  
  },
  formSubmit: function (e) {

    var that = this;

    var keyword = e.detail.value.keyword;
    if (!keyword){
      wx.showToast({
        title: '请输入内容',
        //icon: 'loading',
        image: '../../images/warningt.png',
        duration: 2000
      })
      return false;
    }


    var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Classify/secrch/keyword/' + keyword;
    util.ntime(utilMd5, that, url);

 
    
  },





})