import $ from 'dom7'
import {Modal} from 'f7-modal'
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

var api = function({business, token, errCode = ['00'], resConfig={}, data, ...ajaxOpt}) {

  const conf = {
    errCode: 'errCode',
    errMsg: 'errMsg',
    overtimeCode: '03',
    ...resConfig
  };

  var headers = {
    'content-type': 'application/json;charset=UTF-8'
  };

  if(token){
    headers['Authorization'] = token;
  }

  if(business){
    headers['pubData'] = pubData(business);
  }

  if(data){
    data = JSON.stringify(data);
  }

  return new Promise(function(resolve, reject){

    $.ajax({ headers, success, data, error, processData: false, ...ajaxOpt });

    function success(data, status, xhr) {

      data = JSON.parse(data);

      const $errCode = data[conf.errCode];

      if(errCode === false){
        return resolve(data, status, xhr);
      }

      var checkIn = errCode.every(function(code) {
        if ($errCode === code) {
          resolve(data, status, xhr);
          return false;
        }
        return true;
      });

      if(!checkIn) return ;

      if($errCode === conf.overtimeCode){
        //登录失效判断
        sessionStorage.removeItem('loginToken');
      }
      done && done();
      Modal.toast.fail(data[conf.errMsg]);
      return reject( data, status, xhr);
    }

    function error(xhr, status) {
      var err = {
        errMsg: '网络状况不太好,请稍后再试',
        errCode: undefined
      };
      done && done();
      Modal.toast.offline(err.errMsg, ()=>{
        reject(err, xhr, status);
      });
    }

  });
};

/**
  * 获取脚本
  *
  *
**/

var getScript = function(src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  function setAttributes(script, attrs) {
    for (var attr in attrs) {
      script.setAttribute(attr, attrs[attr]);
    }
  }

  function stdOnEnd(script, cb) {
    script.onload = function() {
      this.onerror = this.onload = null
      cb(null, script)
    }
    script.onerror = function() {
      // this.onload = null here is necessary
      // because even IE9 works not like others
      this.onerror = this.onload = null
      cb(new Error('Failed to load ' + this.src), script)
    }
  }

  function ieOnEnd(script, cb) {
    script.onreadystatechange = function() {
      if (this.readyState != 'complete' && this.readyState != 'loaded') return
      this.onreadystatechange = null
      cb(null, script) // there is no way to catch loading errors in IE8
    }
  }

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
};


export default {Env, pubData, api, getScript}
