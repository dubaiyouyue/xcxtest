// pages/address/address.js
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
    var that=this;

    var productid = options.id;//支付页面点击收货地址时传过来的所有产品id
    var ljgmmm = options.ljgmmm;//支付页面点击收货地址时传过来的所有产品id
   
   // console.log(productid);

    wx.login({
      success: function (res) {

        var code = res.code;
        //console.log(code);
        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Address/index/code/' + code + '/.html';

        //console.log(url + '?token=' + utilMd5); return false;

        util.ntime(utilMd5, that, url);
      

      }
    })



    this.setData({

      check: 1,
      productid: productid,
      ljgmmm: ljgmmm


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


  //删除收货地址
  deleteaddress: function (e) {

    var that=this;

    var id = e.currentTarget.dataset.id;


    wx.login({
      success: function (res) {

        var code = res.code;

        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Address/deletes/id/' + id + '/code/' + code + '/.html';


        util.ntime(utilMd5, that, url);


      }
    })
    //console.log(id)



  },



  //选择默认

  check: function (e) {

    var that=this;



    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index

    const id = e.currentTarget.dataset.id;    // 获取data- 传进来的index

    const check = e.currentTarget.dataset.check;    // 获取data- 传进来的index
           
    var all = this.data.all;                       // 获取购物车列表

    const selected = all[index].selected;         // 获取当前商品的选中状态
    var slistid = this.data.slistid;//20180110 选中id

    //console.log(slistid)


    if (!selected) {

      slistid = id;//选中的id



      wx.login({
        success: function (res) {

          var code = res.code;
          //console.log(code);
          var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Address/checkid/id/' + slistid + '/check/1/code/' + code + '/.html';

          //console.log(url + '?token=' + utilMd5); return false;

          util.ntime(utilMd5, that, url);
         


        }
      })

    }

    all[index].selected = !selected;     // 改变状态
    this.setData({

      aid: id


    })
/*
    wx.redirectTo({
      url: '/pages/address/address'
    })

    */
  },

//勾选地址
  gouxuan: function (e) {


    var that = this;

    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index

    const aid = e.currentTarget.dataset.aid;    //地址id

    const productid = that.data.productid;    // 产品id

    const ljgmmm = that.data.ljgmmm;    // 产品id
    

 
    //console.log(ljgmmm)
    
    this.setData({
    id:aid
    });

    wx.redirectTo({
      url: '/pages/Paymentorder/Paymentorder?aid=' + aid + '&id=' + productid + '&ljgmmm=' + ljgmmm
    })


  },




  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})