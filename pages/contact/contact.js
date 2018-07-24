var App = getApp();
var utilMd5 = require('../../utils/md5.js');

var util = require('../../utils/util.js');

// pages/contact/contact.js
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

    // var ajaxdata
    //console.log(that.data);

    var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Contact/index';
    util.ntime(utilMd5, that, url);


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

  //点击注册按钮时，执行的方法
  formSubmit: function (e) {

    var xm = e.detail.value.xm;
    var tel = e.detail.value.tel;
    var email = e.detail.value.email;
    var content = e.detail.value.content;
    
    if (!xm) {
      wx.showToast({
        title: '请输入姓名',
        //icon: 'loading',
        image: '../../images/warningt.png',
        duration: 2000
      })
      return false;
    }
    if (!tel) {
      wx.showToast({
        title: '请输入电话号码',
        //icon: 'loading',
        image: '../../images/warningt.png',
        duration: 2000
      })
      return false;
    }
    if (!email) {
      wx.showToast({
        title: '请输入邮箱',
        //icon: 'loading',
        image: '../../images/warningt.png',
        duration: 2000
      })
      return false;
    }
    
    if (!content) {
      wx.showToast({
        title: '请输入内容',
        //icon: 'loading',
        image: '../../images/warningt.png',
        duration: 2000
      })
      return false;
    }



    

       console.log(xm)

          //更新数据
          wx.request({
            url: 'https://ssl.resonance.net.cn/test/index.php/Home/Contact/addmessage.html', //仅为示例，并非真实的接口地址
            data: {
              xm: xm,
              tel: tel,
              email: email,
              content: content,
              lang:'cn'
            
            },
            
            method: 'POST',
            header: {
              "content-type": "application/x-www-form-urlencoded"
             // 'content-type': 'application/json' // 默认值
            },
            success: function (res) {

             console.log(res.data.add)

             if (res.data.add>0) {
               wx.showToast({
                 title: '提交留言成功',
                 icon: 'success',
                 duration: 2000
               })
               return false;
             }else{


               wx.showToast({
                 title: '提交留言失败',
                 //icon: 'loading',
                 image: '../../images/warningt.png',
                 duration: 2000
               })
               return false;

             }

           


            }
          })
          this.setData({

            vv: ''

          });
 
    //console.log(username)
  }




})