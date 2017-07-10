import $ from './dom'

/**
  *  判断手机系统和App环境
  *
  *
  **/

var ua = navigator.userAgent.toLowerCase();

var Env = function() {
 function is( agent ) {
   agent = agent.toLowerCase();

   return ua.indexOf( agent ) > -1;
 }

 return {
   iOS: is( 'iphone' ) || is( 'ipad' ) || is( 'ipod' ),
   Android: is( 'android' ),
   KQ: is( 'kuaiqianbao' ),
   FeiFan: is( 'feifan' ),
   KQSDK: is( 'kuaiqianpaysdk' ),
   FFTSDK: is( 'fftpaysdk' ),
   Weixin: is( 'micromessenger' ),
   KQCSDK: is( 'KuaiQianCreditapplySDK' ),
   is: is
 };
}();

/**
  * api 3.0
  * 生成统计信息header
  *
  *
**/

var pubData = function(business) {
  var channel = 'H5';
  var appid = '100';
  var query = $.parseUrlQuery(window.location.search);
  if(Env.KQ){
    channel = 'app-kq';
  }
  if(Env.FeiFan){
    channel = 'app-ffan';
  }
  if(Env.Weixin && query.code){
    channel = 'wx-kqqb';
  }

  if(typeof business === 'undefined'){
    throw new Error('缺少参数:business, 业务参数查看:http://kb.99bill.net/pages/viewpage.action?pageId=15438204');
  }

  return JSON.stringify({ c : channel, b : business, id : appid, t: Date.now()});
}


/**
  * 请求接口方法封装
  * type 请求类型 post, get
  * opt: {business, token }
  *
**/

var api = function({business, token, errCode = ['00'], type, data, ...ajaxOpt}) {

  var headers = {};

  if(token){
    headers.Authorization = token;
  }

  if(business){
    headers.pubData = pubData(business);
  }

  if(data){
    data = JSON.stringify(data);
  }

  return new Promise(function(resolve, reject){

    $.ajax({
      contentType: 'application/json;charset=UTF-8',
      headers,
      success,
      data,
      error,
      ...ajaxOpt
    });

    function success(data, status, xhr) {

      data = JSON.parse(data);

      if(errCode === false){
        return resolve(data, status, xhr);
      }

      var checkIn = errCode.every(function(code) {
        if (data.errCode === code) {
          resolve(data, status, xhr);
          return false;
        }
        return true;
      });

      if(!checkIn) return ;

      if(data.errCode === '03'){
        //登录失效判断
        sessionStorage.removeItem('loginToken');
      }

      return reject( data, status, xhr);
    }

    function error(xhr, status) {
      var err = {
        errMsg: '网络状况不太好,请稍后再试',
        errCode: undefined
      };
      reject(err, xhr, status);
    }

  });
};


export default {Env, pubData, api}
