//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
  //修改tabBar的active值  
  editTabBar: function (that) {

    var tabBar = this.globalData.tabBar;
    //新增如果是页面自定义配置
    if (that.data.tabBar) tabBar = this.globalData.tabBar;
    var pages = getCurrentPages() //获取加载的页面
    var currentPage = pages[pages.length - 1] //获取当前页面的对象
    var url = '/' + currentPage.route //当前页面url


    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == url) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态  
      }
    }

    //新增如果是页面自定义配置
    if (that.data.tabBar) that.setData(that);
    else that.setData(this.globalData);
    //that.setData(tabBar); 这样页面不会渲染新数据
    //console.log(that.data);

  },
  globalData: {
    userInfo: null,
    //配置tabBar  
    tabBar: {
      "color": "#9E9E9E",
      
      "background":"red",
      "backgroundColor": "#e7e7e7",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "text": "首页",
          "iconPath": "/images/1.1.png",
          "selectedIconPath": "/images/1.png",
         
          "selectedColor": 'red',
          "active": false
        },
        {
          "pagePath": "/pages/classification/classification",
          "text": "分类",
          "iconPath": "/images/2.png",
          "selectedIconPath": "/images/2.2.png",
          "selectedColor": "red",
          "active": false
        },
        {
          "pagePath": "/pages/new/new",
          "text": "购物车",
          "iconPath": "/images/3.png",
          "selectedIconPath": "/images/3.3.png",
          "selectedColor": "red",
          "active": false
        },
        {
          "pagePath": "/pages/new/new",
          "text": "我的",
          "iconPath": "/images/4.png",
          "selectedIconPath": "/images/4.4.png",
          "selectedColor": "red",
          "active": false
        }
      ],
      "position": "bottom"
    }
  }
  
})


