var WxParse = require('../../wxParse/wxParse.js');
var article = '<div>我是HTML代码</div>';

Page({
  data: {
    //'article': '<div>我是HTML代码1111</div>'
  },
  onLoad: function () {
    WxParse.wxParse('article', 'html', article, this, 5); //this.data.article
  }
})