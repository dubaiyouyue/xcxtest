var App = getApp();

// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "content": '广西南宁共振广告有限公司，2008年成立于南宁，是一家以“品牌咨询+品牌设计+品牌策划+品牌落地”于一体的品牌服务平台，通过360°全景式纵深品牌打造，从品牌标识设计、VI设计、空间设计、包装、海报等多维度构建完善的品牌价值链，致力于以实战服务中国企业，以品牌推动中国成长。公司创立至今，已是当之无愧的品牌实战专家，客户涵盖国内外地产、金融、IT、汽车、服装时尚、奢侈品、能源、机械、快速消费品等各行业著名的企业，深受客户信赖。我们坚持以实力深耕市场，力求达成艺术与商业之间、客户与市场之间、虚拟与现实之间的价值共生，将企业打造成为一个能为客户提供综合化',
    "content2": '更换内容21321',
    "content3": '2222222222222更换内容21321',
    radioCheckVal: 0,
    all: [{
      one: "公司介绍",
      two: '../../images/ab2.png',
      two1: '../../images/ab2.1.png'
    }, {
        one: "公司理念",
        two: '../../images/ab3.png',
        two1: '../../images/ab3.1.png'
      }, 
    {
      one: "核心优势",
      two: '../../images/ab4.png',
      two1: '../../images/ab4.1.png'
    },
     {
       one: "公司使命",
       two: '../../images/ab5.png',
       two1: '../../images/ab5.1.png'
    }],
    oall:{

    }

    


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    App.editTabBar(this);

    this.setData({
      "oall": this.data.all
    })//保存初始图片数据 2018.01.05


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
  //更换内容
  getnewcontent:function(n){
    var cc = (n.currentTarget.dataset.c);
    var ncc ='content'+cc;
   // var adata =''; 
    var id = n.currentTarget.dataset.id; //打印可以看到，此处已获取到了包含id、title、和content的对象
    

    var that = this;
    

    //var two = all[id].two = all[id].two1;
    

    this.setData({
      "all":this.data.oall
    },function(){
      that.data.all[id].two = that.data.all[id].two1;
      //console.log(that.data.all);
      var all = that.data.all;
      that.setData({
        "content": that.data[ncc],
        "all": all,
        "id": id
      })
    });
    

    

    
  }

})