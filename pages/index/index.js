var App = getApp();
var utilMd5 = require('../../utils/md5.js');
var util = require('../../utils/util.js');
Page({
  data: {
    imgUrls: [
      'https://ssl.resonance.net.cn/test/images/indexbanner1.jpg',
      'https://ssl.resonance.net.cn/test/images/indexbanner1.jpg',
      'https://ssl.resonance.net.cn/test/images/indexbanner1.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 1000


    
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  imageLoad: function (e) {
    //获取图片真实宽度  
    //var imgwidth = e.detail.width,
    //imgheight = e.detail.height,
    //宽高比  
    //ratio = imgwidth / imgheight;
    //console.log(imgwidth, imgheight)
    var imageSize = {};
    var originalWidth = e.detail.width;//图片原始宽  
    var originalHeight = e.detail.height;//图片原始高  
    var originalScale = originalHeight / originalWidth;//图片高宽比  
    var that = this

    //获取屏幕宽高  
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        var windowHeight = res.windowHeight;
        //var windowscale = windowHeight / windowWidth;//屏幕高宽比  
        //console.log('windowWidth: ' + windowWidth)
        //console.log('windowHeight: ' + windowHeight)

        /*if (originalScale < windowscale) {//图片高宽比小于屏幕高宽比  
          //图片缩放后的宽为屏幕宽  
          imageSize.imageWidth = windowWidth;
          imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth;
        } else {//图片高宽比大于屏幕高宽比  
          //图片缩放后的高为屏幕高  
          imageSize.imageHeight = windowHeight;
          imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight;
        }*/
        var imgheightsheight = originalScale * windowWidth;//(windowHeight * originalWidth) / windowWidth
        //console.log(imgheightsheight);

        that.setData({
          imgheightsheight: imgheightsheight,
        })
      }
    })

  }
  , onLoad: function (options) {

    var that=this;
      // 页面渲染后 执行
    App.editTabBar(this);

    var url = 'https://ssl.resonance.net.cn/test/index.php/Home/Index/index.html';

    util.ntime(utilMd5, that, url);



  console.log(that.data)

      //自动居中
    
        //$(".middlesjs").each(function () {
         // var nw = $(this).width();
         // $(this).css({ 'left': '50%', 'margin-left': '-' + (nw / 2) + 'px', 'position': 'relative' });
        //});
      //var id=options.id
  }



    //console.log(imageSize);
    //计算的高度值  
    //var viewHeight = 750 / ratio;
    // var imgheight = viewHeight
    ///var imgheights = this.data.imgheights
    //把每一张图片的高度记录到数组里  
    /*imgheights.push(imgheight)
    this.setData({
      imgheights: imgheights,
    })*/

})

