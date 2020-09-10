"use strict";

//  函数最终目的：处理字符串，数字，判断真假。运动本质是数字的变化。

//属性是变量/常量（存储、返回值），方法是函数表达式（需要传参数，计算并返回值） 

//函数参数（）可以传：1.数字 2.字符串 3.已声明的变量名 4.已声明的函数名(不能和已有变量名同名) 5.关键字（true，false，null，NaN，undefined）

//函数名，不带()就不会被调用，用于typeof检查类型，或者console返回值

//node方法测试表达式结果

// 函数声明
function foo() {}

// 函数表达式
(function bar() {})

// 函数表达式
x = function hello() {}

if (x) {
   // 函数表达式
   function world() {}
}

// 函数声明
function a() {
   // 函数声明
   function b() {}
   if (0) {
      //函数表达式
      function c() {}
   }
}

//块级函数，在严格模式下，块里的函数作用域为这个块
'use strict';
function f() { 
  return 1; 
}
{  
  function f() { 
    return 2; 
  }
}
f() === 1; // true

//有条件地定义一个函数的一个更安全的方法是把函数表达式赋给一个变量：
var zero;
if (0) {
   zero = function() {
      console.log("This is zero.");
   };
}