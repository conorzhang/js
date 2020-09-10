"use strict";


//属性是变量/常量（存储、返回值），方法是函数表达式（需要传参数，计算并返回值）

let obj1={
    a:10,//属性：数字
    b:"str1",//属性：字符串
    c:{obj2:"obj",arr1:[10,20]},//属性：对象
    d:[10,"str2",{a:10}],//属性：数组
    e:function name(params) {
        return 1;        
    }//方法：函数，返回值（数字，字符串，真假值）
}


//node属性测试返回值


//直接量或字面量
console.log(null)   //空直接量

console.log(true)   //布尔直接量

console.log(false)  //布尔直接量

console.log(1)  //数值直接量

console.log(3.14)   //数值直接量

console.log(0b01)  // 二进制

console.log(0o17)   //八进制

console.log(0x1f)   //十六进制

console.log({a:10,b:true})  //对象直接量

var a=1, b=2 ;
console.log({a,b})  //对象直接量，简化值

console.log([10,20])    //数组直接量

console.log("a")        //字符串直接量

console.log('aa--\n--A9')        //字符串直接量，换行转义

console.log('\xA9')        //字符串直接量，十六进制转义序列

console.log('\u00A9')        //字符串直接量，Unicode 转义序列

console.log(`string text ${a+b} string text`)    //模板直接量

console.log(/ab+c/ig)    //正则表达式直接量

console.log(function a(b) {
    return "c" ;
})    //函数

console.log(function () {
    return "c" ;
})    //匿名函数

/* 
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters
键控集: Maps, Sets, WeakMaps, WeakSets
这些数据结构把对象的引用当作键，其在ECMAScript第6版中有介绍。当 Map 和 WeakMap 把一个值和对象关联起来的时候， Set 和 WeakSet 表示一组对象。 Map和WeakMaps之间的差别在于，在前者中，对象键是可枚举的。这允许垃圾收集器优化后面的枚举(This allows garbage collection optimizations in the latter case)。

在纯ECMAScript 5下可以实现Maps和Sets。然而，因为对象并不能进行比较（就对象“小于”示例来讲），所以查询必定是线性的。他们本地实现（包括WeakMaps）查询所花费的时间可能是对数增长。

通常，可以通过直接在对象上设置属性或着使用data-*属性，来绑定数据到DOM节点。然而缺陷是在任何的脚本里，数据都运行在同样的上下文中。Maps和WeakMaps方便将数据私密的绑定到一个对象。 

结构化数据: JSON
JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式，来源于 JavaScript 同时也被多种语言所使用。 JSON 用于构建通用的数据结构。参见 JSON 以及 JSON 了解更多。
*/

//js内置对象返回值
console.log(Infinity)

console.log(NaN)

console.log(undefined)

console.log(globalThis)

console.log(Object)

console.log(Function)

console.log(Boolean)

console.log(Symbol)

console.log(Error)

console.log(BigInt)

console.log(Number)

console.log(Math)

console.log(Date)

console.log(String)

console.log(RegExp)

console.log(Array)

console.log(Map)

console.log(Set)

console.log(WeakMap)

console.log(WeakSet)

console.log(JSON)

console.log(Promise)

console.log(Reflect )

console.log(Proxy)

console.log(Intl)

console.log(WebAssembly)



//js内置对象属性返回值
console.log(Object.length)

console.log(Object.prototype)

console.log(Object.prototype.hasOwnProperty)

console.log(Object.prototype.isPrototypeOf)

console.log(Object.prototype.propertyIsEnumerable)

console.log(Object.prototype.toLocaleString)

console.log(Object.prototype.toString)

console.log(Object.prototype.valueOf)

console.log(Function.length)

console.log(Function.name)

console.log(Function.prototype.constructor)

console.log(Function.prototype.apply)

console.log(Function.prototype.bind)

console.log(Function.prototype.call)

console.log(Function.prototype.toString)

console.log(Boolean.prototype.toString)

console.log(Boolean.prototype.valueOf)

console.log(Symbol.length)

console.log(Symbol.prototype )

console.log(Symbol.iterator)

console.log(Symbol.match )

console.log(Symbol.replace )

console.log(Symbol.search)

console.log(Symbol.split )

console.log(Symbol.hasInstance)

console.log(Symbol.isConcatSpreadable )

console.log(Symbol.unscopables )

console.log(Symbol.species)

console.log(Symbol.toPrimitive)

console.log(Symbol.toStringTag )

console.log(Symbol.prototype.constructor)

console.log(Error)

console.log(Error.prototype)

console.log(EvalError)

console.log(RangeError)

console.log(ReferenceError)

console.log(SyntaxError)

console.log(TypeError)

console.log(URIError)

console.log(Number.EPSILON )

console.log(Number.MAX_SAFE_INTEGER )

console.log(Number.MAX_VALUE )

console.log(Number.MIN_SAFE_INTEGER)

console.log(Number.MIN_VALUE )

console.log(Number.NaN)

console.log(Number.NEGATIVE_INFINITY)

console.log(Number.POSITIVE_INFINITY)

console.log(Number.prototype )

console.log(Math.E)

console.log(Math.LN2)

console.log(Math.LN10)

console.log(Math.LOG2E )

console.log(Math.LOG10E)

console.log(Math.PI)

console.log(Math.SQRT1_2)

console.log(Math.SQRT2)

console.log(Date.prototype)

console.log(Date.length)

console.log(String.prototype)

console.log(String.prototype.constructor)

console.log(String.prototype.length)

console.log(RegExp.lastIndex)

console.log(RegExp.prototype.flags)

console.log(RegExp.prototype.dotAll)

console.log(RegExp.prototype.global)

console.log(RegExp.prototype.ignoreCase)

console.log(RegExp.prototype.multiline)

console.log(RegExp.prototype.source)

console.log(RegExp.prototype.sticky)

console.log(RegExp.prototype.unicode)

console.log(Array.length)

console.log(Array.prototype)

console.log(Array.prototype.constructor)

console.log(Array.prototype.length)

console.log(Map.length)

console.log(Map.prototype)

console.log(Map.prototype.constructor)

console.log(Set.prototype)

console.log(WeakMap.length)

console.log(WeakMap.prototype)

console.log(WeakMap.prototype.constructor)

console.log(WeakSet.length)

console.log(WeakSet.prototype)

console.log(WeakSet.prototype.constructor)

console.log(Promise.length)

console.log(Promise.prototype)

console.log(Promise.prototype.constructor)

console.log(Intl.Collator)

console.log(Intl.DateTimeFormat)

console.log(Intl.ListFormat)

console.log(Intl.NumberFormat)

console.log(Intl.PluralRules)

console.log(Intl.RelativeTimeFormat)



//node引入内置模块
const assert = require('assert');
console.log(assert)

const async_hooks = require('async_hooks');
console.log(async_hooks)

console.log(Buffer)

const child_process = require('child_process');
console.log(child_process)

const cluster = require('cluster');
console.log(cluster)

console.log(global.console)

const crypto = require('crypto');
console.log(crypto)

console.log(global.debugger)

const dgram = require('dgram');
console.log(dgram)

const dns = require('dns');
console.log(dns)

const domain = require('domain');
console.log(domain)

const events = require('events');
console.log(events)

const fs = require('fs');
console.log(fs)

console.log(global)

const http = require('http');
console.log(http)

const http2 = require('http2');
console.log(http2)

const https = require('https');
console.log(https)

const inspector = require('inspector');
console.log(inspector)

console.log(module)

const net = require('net');
console.log(net)

const os = require('os');
console.log(os)

const path = require('path');
console.log(path)

const perf_hooks = require('perf_hooks');
console.log(perf_hooks)

console.log(process)



