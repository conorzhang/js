"use strict";




var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(myObj);




/* 
var Sales = "Toyota";

function CarTypes(name) {
  return (name === "Honda") ?
    name :
    "Sorry, we don't sell " + name + "." ;
}
console.log(CarTypes('Honda'))

 */


/* *
* 变量名：myName
* 常量名：MY_NAME
* 方法名：getAll
* 类名：Name
* //
*
*/


/* 
var a = 2 , b = 3 ;
var a=b=1   //先声明才可以用这种写法，否则在严格模式报错未定义
console.log(a,b)
 */


/* 声明作用域和重新赋值的区别

function name(params) {
    var a=1;
    return a;
}
console.log(a)
//var在函数内声明，作用域为函数内
var a=0
var a=1
console.log(a)
//var可以重复声明相同变量名，块内声明作用域为全局
{
a=2 
console.log(a)
}
console.log(a)
//块内无声明赋值，全局作用域
var a=4
console.log(a)
//块外var、let、const声明赋值，全局作用域，let声明后可以无声明改变变量，const是常量不可改，let和const不能声明重复变量名。
{
var a=6
}
console.log(a)
//块内var声明赋值，全局作用域
{
let a=8
console.log(a)
a=10
console.log(a)
}
console.log(a)
//块内let声明赋值，局部作用域，无声明改变变量，局部作用域
{
const a=12
console.log(a)
// a=10 修改赋值报错
}
console.log(a)
 */


/* 
// 这个函数返回一个由0开头并填充的字符串，num是要转化的数字，totalLen是要补0的位数
function padZeros(num, totalLen ) {
    var numStr = num.toString();             // 用字符串返回值进行初始化
    var numZeros = totalLen - numStr.length; // 计算要补几个0
    for (var i = 1; i <= numZeros; i++) {
       numStr = "0" + numStr;//按照位数要求，缺几个0加几个0
    }
    return numStr;
 }
 var result;
 result = padZeros(42,4); // returns "0042"
 result = padZeros(42,2); // returns "42"
 result = padZeros(5,4);  // returns "0005"
 */




 
/* 
function aa(a) {
    if(a==1)
        return 1;
    else
        return a+aa(a-1);   
};

console.log(aa(3));

//递归调用自己，需要设置临界值

 */



/* 
function a() {
    console.log(a);
};
a();
//函数生成后，调用才运行

(function aa() {
    console.log(aa);
})();
//函数生成后，立即调用运行

 */


/* 
let a = function () {
    console.log(a);
}

a()


// 如果表达式声明函数，则函数内函数名b无效，无法被调用，表达式名a取代b作为函数名，可以调用表达式函数，但是console返回的函数名是b。如果表达式是匿名函数，则console返回的函数名是a。如果单纯的声明函数，则函数名b生效，可以被调用，console返回的函数名是b。
 */

/* 
let a=100

function fa(fa1){
  return  fa1=200;
}

console.log(a);

fa(a);
console.log(fa(a));
//函数没修改引用变量的值

console.log(a);

/////////////////////////

let obj1={'a':10};

function fb(fb1){
    return  fb1.a=20;
}

console.log(obj1.a);

fb(obj1)
console.log(fb(obj1));
//函数修改了引用对象属性

console.log(obj1.a);
 */






/* 
let num1=12;

let afun=function a(fa1) {
    
    return num1+fa1;
}
console.log(afun(1))
//13

let b=num1;


function bfun(fb1,fb2=num1+1) {
  let a=b+10;
    return fb1*fb2; //12*13
};
console.log(bfun(afun(10),b))


let a={b:1}
a.b=2
a["b"]=3
// 最终b:3
console.log(a)
 */
/* 

let a={
    a:111,
    b:222,
    c:333,
    d:[{
        q:444,
        w:555,
        e:666,
    },
    14,
    'aa',
    [1,2,3,4]
    ],
    g:1
}

a.d.e=777

 */

//console.log(a)


//let p = [a:333]

/* 

let b = {x:[10,20]}
b.x.y=30

console.log(b)

let a = {x:[10,20,{y:20}]}

console.log(a)

 */


/* 
let b = {
    a:1,
    b:[11,22,33],
    c:[1,2,3]
}
b.b=13
b.c.d=14

// console.log(b)



var x = {i:19}
let z = [12,20,10]
z[0] = "ZhangQian"
z[1] = x
console.log(z)





 */
//console.log(z)

/* 

let b=a.a
console.log(b)

function fun1(a) {
    if (a == "code1") {
        console.log('xxx')
    } else {
        return a;  
    }      
}

console.log(fun1(a.d.e))
console.log(fun1(undefined))



function fun2(fun1) {
    console.log(fun1+=1);    
}


 */


//fun2()






/* 
console.log(0b00000)
console.log(0b00001)
console.log(0b00010)
console.log(0b00011)
console.log(0b00100)
console.log(0b00101)
console.log(0b00110)
console.log(0b00111)
console.log(0b01000)
console.log(0b01001)
console.log(0b01010)
console.log(0b01011)
console.log(0b01100)
console.log(0b01101)
console.log(0b01110)
console.log(0b01111)
console.log(0b10000)
console.log(0o00)
console.log(0o01)
console.log(0o02)
console.log(0o03)
console.log(0o04)
console.log(0o05)
console.log(0o06)
console.log(0o07)
console.log(0o10)
console.log(0o11)
console.log(0o12)
console.log(0o13)
console.log(0o14)
console.log(0o15)
console.log(0o16)
console.log(0o17)
console.log(0o20)
console.log(0x00)
console.log(0x01)
console.log(0x02)
console.log(0x03)
console.log(0x04)
console.log(0x05)
console.log(0x06)
console.log(0x07)
console.log(0x08)
console.log(0x09)
console.log(0x0a)
console.log(0x0b)
console.log(0x0c)
console.log(0x0d)
console.log(0x0e)
console.log(0x0f)
console.log(0x11)
console.log(0x12)
console.log(0x13)
console.log(0x14)
console.log(0x15)
console.log(0x16)
console.log(0x17)
console.log(0x18)
console.log(0x19)
console.log(0x1a)
console.log(0x1b)
console.log(0x1c)
console.log(0x1d)
console.log(0x1e)
console.log(0x1f)
console.log(0)
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
 */

/* 
字符转ascii码：用charCodeAt();
ascii码转字符：用fromCharCode(); 
*/

/* 
let printf = function (str){
    console.log(`< ${str} > 的ASCII码是：${str.charCodeAt()}`)
}
printf(' ')
 */

/*
U+0009	制表符	<HT>	水平制表符	\t
U+000B	垂直制表符	<VT>	垂直制表符	\v
U+000C	分页符	<FF>	分页符（Wikipedia）	\f
U+000A	换行符	<LF>	在UNIX系统中起新行	\n
U+000D	回车符	<CR>	在 Commodore 和早期的 Mac 系统中起新行	\r
*/
/* 
let printl = function (num){
    let str = String.fromCharCode(num)
    console.log(`< ${num} > 键盘符是：${str}`)
}


for (let i = 0; i < 128; i++) {
    printl(i)    
}


 */
