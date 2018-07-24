const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//服务器时间戳
function ntime(utilMd5, that, url, calll){
  wx.request({
    url: 'https://ssl.resonance.net.cn/test/ntime.php',//请修改为你服务器
    data: {

    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      //return res;
      var ttken = 'JLI5vvqq0KRnzfla';//密钥
      //var ttime = parseInt(Date.parse(new Date()) / 1000);//时间 秒
      var ttime =res.data;//util.ntime();
      var ntoken = ttken + ttime;
      var token = utilMd5.hexMD5(ntoken);
      //console.log(ntoken);
      //return token;
     // var url = 'https://hhh.liangtianmei.com/index.php/Home/Product/index';
      updatenew(url, token, that, calll);
    }
  })
}
//更新数据
function updatenew(url, token, that, calll) {
  //wx.login({
    //success: function (res) {

    //console.log(res.code);
    //return false;

  wx.request({
    url: url,//'https://hhh.liangtianmei.com/index.php/Home/Product/index', //仅为示例，并非真实的接口地址
    data: {
      token: token
      //code: res.code
    },
    method: 'GET',
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
     
      
      if (res.data.tokenid){
        //保存token id
        wx.setStorageSync('tokenid', res.data.tokenid);
      }
      

      if (that){

      
      //console.log(res.data);
        if(calll) that.setData(res.data, that.calll(that,res.data))
        else that.setData(res.data)

  
     

        
      }
    }
  })
    //}
  //})
}



//构造令牌
// 在需要使用的js文件中，导入js  
//var util = require('../../utils/util.js');  
/*var ttken ='JLI5vvqq0KRnzfla';//密钥
var ttime = parseInt(Date.parse(new Date())/1000);//时间 秒
//var ttime = util.ntime();
var ntoken=ttken+ttime;
var token = utilMd5.hexMD5(ntoken);
console.log(token);*/
//end



//随机字符窜
function randomString(len) {
  　　len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhioOLl,9gq,Vv,Uu,I1jkmnprstwxyz/*~！@#￥%……&*()+=-2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  　　var maxPos = $chars.length;
  　　var pwd = '';
  　　for (var i = 0; i < len; i++) {
    　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  　　}
    
  　　return pwd;
}
//document.write(randomString(32));
/*伪身份凭证*/
function makeusertoken(){
  //console.log(randomString(9))
  var ro = randomString(9);
  //存储随机字符1
  wx.setStorageSync('ros', ro);
  //var code = ro.charCodeAt();
  //var nro = wx.getStorageSync('ros')
  
  //console.log(strToBinary(ro));
  //console.log(binaryToStr('1000010 1000010 111000 1101011 1001101 1000000 110001 1101100 1111001'));

}

//将字符串转换成二进制形式，中间用空格隔开
function strToBinary(str) {
  var result = [];
  var list = str.split("");
  for (var i = 0; i < list.length; i++) {
    if (i != 0) {
      result.push(" ");
    }
    var item = list[i];
    var binaryStr = item.charCodeAt().toString(2);
    result.push(binaryStr);
  }
  return result.join("");
}


//将二进制字符串转换成Unicode字符串
function binaryToStr(str) {
  var result = [];
  var list = str.split(" ");
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var asciiCode = parseInt(item, 2);
    var charValue = String.fromCharCode(asciiCode);
    result.push(charValue);
  }
  return result.join("");
}
/*end*/
//获取访问者的openid

/*end*/





module.exports = {
  formatTime: formatTime,
  ntime: ntime,
  updatenew: updatenew,
  makeusertoken: makeusertoken
}
