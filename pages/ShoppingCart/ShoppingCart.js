// pages/ShoppingCart/ShoppingCart.js
var App = getApp();
var utilMd5 = require('../../utils/md5.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slistid:'',
    jzzzs: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    App.editTabBar(that);
    wx.login({
      success: function (res) {

        var code = res.code;
        //console.log(code);
        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/index/pay/0/code/' + code +'/.html';

        //console.log(url + '?token=' + utilMd5); return false;

        util.ntime(utilMd5, that, url);
           console.log(that.data)
       
      }
    })

    let total = 0; 
    let totalPrice = total.toFixed(2);   // 初始化总价格为0.00
    this.setData({                              
     
      totalPrice: totalPrice
    });
  
  },

/*加法开始*/

  bindadd: function (e) {
    //new 2017.12.19
    var that = this;
  
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.hi;
    var all = this.data.all;
  
    var nv = all[index].num;
    all[index].num = nv*1+1;

    wx.login({
      success: function (res) {

        var code = res.code;
     
        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/addcart/id/' + id +'/fggwnum/1/code/'+code+'/.html';

    
        util.ntime(utilMd5, that, url);
      

      }
    })


    this.setData({

      all: all


    })

    this.getTotalPrice()
   
  },

/*加法结束*/



  /*减法开始*/

  bindsubtract: function (e) {
    //new 2017.12.19
    var that = this;
    var id = e.currentTarget.dataset.id;

    var index = e.currentTarget.dataset.hi;
    var all = this.data.all;
    var nv = all[index].num;
    if (nv<2){
      all[index].num = 1;
    }else{
      all[index].num = nv * 1 - 1;
    }
    

    wx.login({
      success: function (res) {

        var code = res.code;

        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/addcart/id/' + id + '/fggwnum/1/am/1/code/' + code + '/.html';


        util.ntime(utilMd5, that, url);


      }
    })

    this.setData({

      all: all


    })

    this.getTotalPrice()

  },

/*减法结束*/

/*全选开始*/



/*全选结束*/


  selectAll: function (e) {

    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    var slistid = this.data.slistid;//20180110 选中id


  selectAllStatus = !selectAllStatus;
    let all = this.data.all;
    for (let ii = 0; ii < all.length; ii++) {
     all[ii].selected = selectAllStatus;            // 改变所有商品状态

     const selected = all[ii].selected;
     if (selected) {
     
       if (slistid) slistid = slistid + ',' + all[ii].id;
       else slistid = all[ii].id;
      // console.log(slistid);
       slistid = this.unique(slistid.split(","));//去掉重复id
       slistid = slistid.join(",");

     } else {
       slistid = this.uniqueqx(slistid.split(","), all[ii].id);//取消id
       slistid = slistid.join(",");
     }
    }

    this.setData({
      selectAllStatus: selectAllStatus,
      all: all,
      "slistid": slistid
    });
    this.getTotalPrice();  
   //console.log(all)
  },




/*单选开始*/
selectList: function (e) {

 var that=this;
  const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index

  const id = e.currentTarget.dataset.id;    // 获取data- 传进来的index
  //wx.setStorageSync('id', id);
 

  //let carts = this.data.carts;         
  var all = this.data.all;           // 获取购物车列表

  const selected = all[index].selected;         // 获取当前商品的选中状态

  var alllenght= all.length//返回数据的总个数

  var slistid = this.data.slistid;//20180110 选中id

  let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态

  //console.log(slistid); //20180110
  //slistid = slistid.replace(','+id,'');
    if(!selected){
      //console.log(id);
      if (slistid) slistid = slistid+','+id;
      else slistid = id;

      slistid = this.unique(slistid.split(","));//去掉重复id
      slistid = slistid.join(",");

    }else{
      slistid = this.uniqueqx(slistid.split(","),id);//取消id
      slistid = slistid.join(",");
    }

    var array = slistid.split(",");//计算出用逗号分隔的个数
    var arraylenght = array.length;//选中的个数

   
    selectAllStatus = !selectAllStatus;

    if (alllenght == arraylenght){
      selectAllStatus = selectAllStatus;
    } else{
      selectAllStatus ='';
    }

    




/*
    this.setData({
      "slistid": slistid
    })
    */
  //  console.log(this.data.slistid);

  
  all[index].selected = !selected;     // 改变状态




 
  this.setData({
    all: all,
    selectAllStatus: selectAllStatus,
    "slistid": slistid
  });
this.getTotalPrice()
  },

/*单选结束*/

/*计算商品总价开始*/

getTotalPrice() {
  let all = this.data.all;                  // 获取购物车列表
 

  let total = 0;
  for (let ii = 0; ii < all.length; ii++) {         // 循环列表得到每个数据
    if (all[ii].selected) {                   // 判断选中才会计算价格

      if (!all[ii].num) all[ii].num = 0;
      total += all[ii].num * all[ii].price;     // 所有价格加起来
    }
  }

  let totalPrice = total.toFixed(2);                

  this.setData({                                // 最后赋值到data中渲染到页面
    all: all,
    totalPrice: totalPrice
  });


},
unique:function (arr){
    var tmp = new Array();
 
    for(var m in arr){
  tmp[arr[m]] = 1;
}
//再把键和值的位置再次调换
var tmparr = new Array();

for (var n in tmp) {
  tmparr.push(n);
}
return tmparr;
},//去掉重复id

uniqueqx: function (arr, did) {
  // 遍历arr，把元素分别放入tmp数组(不存在才放)
  var tmp = new Array();
  for (var i in arr) {
    //该元素在tmp内部不存在才允许追加
    if ((arr[i]) != did) {
      tmp.push(arr[i]);
    }
  }
  return tmp;
},//取消id


/*计算商品总价结束*/

/*删除开始*/
  deletes: function (e){

    var that=this;
    let all = this.data.all; 

    const ss = e.currentTarget.dataset.ss;    // 获取data- 传进来的ss,指要删除的id

    if (!ss){

      wx.showToast({
        title: '请勾选数据',
        //icon: 'loading',
        image: '../../images/warningt.png',
        duration: 2000
      })

      return false;

    }
    


    wx.login({
      success: function (res) {

        var code = res.code;
        //console.log(code);
        var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Cart/deletes/pids/' + ss + '/code/' + code + '/.html';

        //console.log(url + '?token=' + utilMd5); return false;

        util.ntime(utilMd5, that, url);
        //console.log(that.data)

      

      }
    })

    // console.log(that.data)
  
     let total = 0;
     let totalPrice = total.toFixed(2);   // 初始化总价格为0.00
  
     this.setData({
       jzzzs:'',
       totalPrice: totalPrice,
     });
},

/*删除结束*/

  jiesuan: function (e) {
    var all = this.data.all; 
    var slistid = this.data.slistid;//20180110 选中id
    //console.log(slistid);
      

    if (!slistid){

      wx.showToast({
        title: '请勾选数据',
        //icon: 'loading',
        image: '../../images/warningt.png',
        duration: 2000
      })

      return false;
    }

      wx.redirectTo({
        url: '/pages/Paymentorder/Paymentorder?id='+slistid
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