var App = getApp();
var utilMd5 = require('../../utils/md5.js');

var util = require('../../utils/util.js');

// pages/project/project.js
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

    //console.log(that.data);

    var  id = options.id;
    //console.log(id);
    var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Project/index/id/'+id;
    util.ntime(utilMd5, that, url);

   

  },
  addcart: function(e) {
    var that=this;
    var id = e.currentTarget.id;
    //console.log(id)

  wx.login({
    success: function (res) {
      
      var code=res.code;


  // var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/getwxopenid';

    var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/addcart/id/' + id +'/fggwnum/1/code/'+code+'/.html';

    //console.log(url + '?token=' + utilMd5); return false;

    util.ntime(utilMd5, that, url);
     //console.log(that.data)

    }
  })
    that.setData({
      "id":id
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