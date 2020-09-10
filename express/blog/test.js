
var str = 'string';
str.aa = 11;
console.log(str);
console.log(str.aa);
/* 
var str2 = String;
str2.aa = 11;
console.log(str2);
console.log(str2.aa);
 */
var num = 3.14;
num.aa = 11;
console.log(num);
console.log(num.aa);
/* 
var num2 = Number;
num2.aa = 11;
console.log(num2);
console.log(num2.aa);
 */
var bool = true;
//bool.aa = 11;  报错
console.log(bool);
//console.log(bool.aa);  报错
/* 
var bool2 = Boolean;
bool2.aa = 11;
console.log(bool2);
console.log(bool2.aa);
 */
var nul = null;
//nul.aa = 11;  报错
console.log(nul);
//console.log(nul.aa);  报错

var unde = undefined;
//unde.aa = 11;  报错
console.log(unde);
//console.log(unde.aa);  报错
/* 
var nan = NaN;
nan.aa = 11;
console.log(nan);
console.log(nan.aa);

var bint = BigInt;
bint.aa = 11;
console.log(bint);
console.log(bint.aa);

var sym = Symbol;
sym.aa = 11;
console.log(sym);
console.log(sym.aa);
 */
var obj = {a:10};
obj.aa = 11;
console.log(obj);
console.log(obj.aa);
/* 
var obj2 = Object;
obj2.aa = 11;
console.log(obj2);
console.log(obj2.aa);
 */
var arr = [10,20];
arr.aa = 11;
console.log(arr);
console.log(arr.aa);


var fun = function fun1(f1,f2) {
    this.f1 = f1;
    this.f2 = f2;
    return f1+f2;
};
fun.aa = 11;
console.log(fun);
console.log(fun(1,2));
console.log(fun.aa);
var fun1 = new fun();
fun1.aa = 11;
console.log(fun1);



//var express = require('express');
//console.log(express)
/*
[Function: createApplication] {
    application: {
      init: [Function: init],
      defaultConfiguration: [Function: defaultConfiguration],
      lazyrouter: [Function: lazyrouter],
      handle: [Function: handle],
      use: [Function: use],
      route: [Function: route],
      engine: [Function: engine],
      param: [Function: param],
      set: [Function: set],
      path: [Function: path],
      enabled: [Function: enabled],
      disabled: [Function: disabled],
      enable: [Function: enable],
      disable: [Function: disable],
      acl: [Function (anonymous)],
      bind: [Function (anonymous)],
      checkout: [Function (anonymous)],
      connect: [Function (anonymous)],
      copy: [Function (anonymous)],
      delete: [Function (anonymous)],
      get: [Function (anonymous)],
      head: [Function (anonymous)],
      link: [Function (anonymous)],
      lock: [Function (anonymous)],
      'm-search': [Function (anonymous)],
      merge: [Function (anonymous)],
      mkactivity: [Function (anonymous)],
      mkcalendar: [Function (anonymous)],
      mkcol: [Function (anonymous)],
      move: [Function (anonymous)],
      notify: [Function (anonymous)],
      options: [Function (anonymous)],
      patch: [Function (anonymous)],
      post: [Function (anonymous)],
      propfind: [Function (anonymous)],
      proppatch: [Function (anonymous)],
      purge: [Function (anonymous)],
      put: [Function (anonymous)],
      rebind: [Function (anonymous)],
      report: [Function (anonymous)],
      search: [Function (anonymous)],
      source: [Function (anonymous)],
      subscribe: [Function (anonymous)],
      trace: [Function (anonymous)],
      unbind: [Function (anonymous)],
      unlink: [Function (anonymous)],
      unlock: [Function (anonymous)],
      unsubscribe: [Function (anonymous)],
      all: [Function: all],
      del: [Function (anonymous)],
      render: [Function: render],
      listen: [Function: listen]
    },
    request: IncomingMessage {
      header: [Function: header],
      get: [Function: header],
      accepts: [Function (anonymous)],
      acceptsEncodings: [Function (anonymous)],
      acceptsEncoding: [Function (anonymous)],
      acceptsCharsets: [Function (anonymous)],
      acceptsCharset: [Function (anonymous)],
      acceptsLanguages: [Function (anonymous)],
      acceptsLanguage: [Function (anonymous)],
      range: [Function: range],
      param: [Function: param],
      is: [Function: is],
      protocol: [Getter],
      secure: [Getter],
      ip: [Getter],
      ips: [Getter],
      subdomains: [Getter],
      path: [Getter],
      hostname: [Getter],
      host: [Getter],
      fresh: [Getter],
      stale: [Getter],
      xhr: [Getter]
    },
    response: ServerResponse {
      status: [Function: status],
      links: [Function (anonymous)],
      send: [Function: send],
      json: [Function: json],
      jsonp: [Function: jsonp],
      sendStatus: [Function: sendStatus],
      sendFile: [Function: sendFile],
      sendfile: [Function (anonymous)],
      download: [Function: download],
      type: [Function: contentType],
      contentType: [Function: contentType],
      format: [Function (anonymous)],
      attachment: [Function: attachment],
      append: [Function: append],
      header: [Function: header],
      set: [Function: header],
      get: [Function (anonymous)],
      clearCookie: [Function: clearCookie],
      cookie: [Function (anonymous)],
      location: [Function: location],
      redirect: [Function: redirect],
      vary: [Function (anonymous)],
      render: [Function: render]
    },
    Route: [Function: Route],
    Router: [Function (anonymous)] {
      param: [Function: param],
      handle: [Function: handle],
      process_params: [Function: process_params],
      use: [Function: use],
      route: [Function: route],
      acl: [Function (anonymous)],
      bind: [Function (anonymous)],
      checkout: [Function (anonymous)],
      connect: [Function (anonymous)],
      copy: [Function (anonymous)],
      delete: [Function (anonymous)],
      get: [Function (anonymous)],
      head: [Function (anonymous)],
      link: [Function (anonymous)],
      lock: [Function (anonymous)],
      'm-search': [Function (anonymous)],
      merge: [Function (anonymous)],
      mkactivity: [Function (anonymous)],
      mkcalendar: [Function (anonymous)],
      mkcol: [Function (anonymous)],
      move: [Function (anonymous)],
      notify: [Function (anonymous)],
      options: [Function (anonymous)],
      patch: [Function (anonymous)],
      post: [Function (anonymous)],
      propfind: [Function (anonymous)],
      proppatch: [Function (anonymous)],
      purge: [Function (anonymous)],
      put: [Function (anonymous)],
      rebind: [Function (anonymous)],
      report: [Function (anonymous)],
      search: [Function (anonymous)],
      source: [Function (anonymous)],
      subscribe: [Function (anonymous)],
      trace: [Function (anonymous)],
      unbind: [Function (anonymous)],
      unlink: [Function (anonymous)],
      unlock: [Function (anonymous)],
      unsubscribe: [Function (anonymous)],
      all: [Function (anonymous)]
    },
    json: [Function: json],
    query: [Function: query],
    static: [Function: serveStatic] {
      mime: Mime {
        types: [Object: null prototype],
        extensions: [Object: null prototype],
        default_type: 'application/octet-stream',
        Mime: [Function: Mime],
        charsets: [Object]
      }
    },
    urlencoded: [Function: urlencoded]
  }
*/