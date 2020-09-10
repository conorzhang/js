"use strict";




/* 
var a={
    a:1,
    b:function (a,b) {
        return a(b);
    }
}

a.b(
    function f1(bb) {
        return bb+1;
    },12
)

console.log(a.b(function f1(bb) {
    return bb+1;
},12))





function a(callback) {
    callback(1,2)
}

console.log(a())
 */


/* 
function a(callback1) {
    callback1(3,'2')
}

a(function (a,b,c) { // 匿名回调函数
    console.log(a*b) // 2
})

 */


/* 
function fn(callback) {
    
    setTimeout(function () {
      var data = 'hello'
      callback(data)
    }, 1000)

    callback('world');

  }
  
  // 如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
  fn(function (data) {
    console.log(data) // one second later      // hello
  })

   */


/* 
function say (value) {
    console.log(value);
}
console.log(say);   // [Function: say]
say();      //undefined
say('hi js');       //hi js
console.log(say('hi js'));     //hi js(say函数内部打印)        undefined(say函数外部打印，函数执行完销毁，所以undefined)

let a='aa';
console.log(a.b);   //b属性不存在，或未定义，所以undefined
try {
    console.log(a.b());      //a.b不是一个函数，打印报错
} catch (e) {
    console.log(e)
}
try {
    a.b=function name(params) { return 1;}      //不能在字符串上添加属性
    console.log(a.b());         //打印报错
} catch (e) {
    console.log(e)
}

let b={}
b.b=function name(params) { return 1;}      //可以再对象字面量上添加属性
console.log(b.b());     //返回1
console.log(b.b);       //[Function: name]  函数类型/字面量
console.log(b);         //{ b: [Function: name] }   对象字面量

let c=[]
c.b=function name(params) { return 1;}      //可以再对象字面量上添加属性
console.log(c.b());     //返回1
console.log(c.b);       //[Function: name]  函数类型
console.log(c);         //[ b: [Function: name] ]  数组字面量
 */

/* 

在编程语言中，一般固定值称为字面量，如 3.14。

数字（Number）字面量 可以是整数或者是小数，或者是科学计数(e)。
3.14
1001
123e5


字符串（String）字面量 可以使用单引号或双引号:
"John Doe"
'John Doe'


表达式字面量 用于计算：
5 + 6
5 * 10


数组（Array）字面量 定义一个数组：
[40, 100, 1, 5, 25, 10]


对象（Object）字面量 定义一个对象：
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}


函数（Function）字面量 定义一个函数：
function myFunction(a, b) { return a * b;}

*/



/* 
let arr=[]
arr.arr1=function funCtion(params) { return 'function';}      //可以再对象字面量上添加属性
arr.arr2='string'      //可以再对象字面量上添加属性
arr.arr3=1      //可以再对象字面量上添加属性
arr['arr4']={1:'一'}
console.log(typeof(arr));   //返回object
console.log(arr.arr1);     //返回[Function: funCtion]   function的字面值
console.log(arr.arr2);     //string
console.log(arr.arr3);    //1
console.log(arr.arr4);    //{1:'一'}
console.log(arr);         //[ arr1: [Function: funCtion], arr2: 'string', arr3: 1 , arr4: { '1': '一' }]  数组字面量
arr[3]=12
console.log(arr); 
console.log(arr[1]);  
console.log(arr[2]);  
console.log(arr[3]);  //没有键，下标0,1,2为空,  <3 empty items>放在下标3前面，后面跟键值对，不归到数组下标计数中
console.log(arr[4]);  
console.log(arr['arr1']);   //数组中的键值对查询
 */

/* 
Object和Map的比较
一般地，objects会被用于将字符串类型映射到数值。Object允许设置键值对、根据键获取值、删除键、检测某个键是否存在。而Map具有更多的优势。

Object的键均为Strings类型，在Map里键可以是任意类型。
必须手动计算Object的尺寸，但是可以很容易地获取使用Map的尺寸。
Map的遍历遵循元素的插入顺序。
Object有原型，所以映射中有一些缺省的键。（可以用 map = Object.create(null) 回避）。
这三条提示可以帮你决定用Map还是Object：

如果键在运行时才能知道，或者所有的键类型相同，所有的值类型相同，那就使用Map。
如果需要将原始值存储为键，则使用Map，因为Object将每个键视为字符串，不管它是一个数字值、布尔值还是任何其他原始值。
如果需要对个别元素进行操作，使用Object。


WeakMap对象
WeakMap对象也是键值对的集合。它的键必须是对象类型，值可以是任意类型。它的键被弱保持，也就是说，当其键所指对象没有其他地方引用的时候，它会被GC回收掉。WeakMap提供的接口与Map相同。

与Map对象不同的是，WeakMap的键是不可枚举的。不提供列出其键的方法。列表是否存在取决于垃圾回收器的状态，是不可预知的。

可以在"Why WeakMap?"WeakMap查看更多信息和示例。

WeakMap对象的一个用例是存储一个对象的私有数据或隐藏实施细节。Nick Fitzgerald 的博文"Hiding Implementation Details with ECMAScript 6 WeakMaps"提供了一个例子。对象内部的私有数据和方法被存储在WeakMap类型的privates变量中。所有暴露出的原型和情况都是公开的，而其他内容都是外界不可访问的，因为模块并未导出privates对象。


 */



/* 

Array和Set的对比
一般情况下，在JavaScript中使用数组来存储一组元素，而新的集合对象有这些优势：

数组中用于判断元素是否存在的indexOf 函数效率低下。
Set对象允许根据值删除元素，而数组中必须使用基于下标的 splice 方法。
数组的indexOf方法无法找到NaN值。
Set对象存储不重复的值，所以不需要手动处理包含重复值的情况。


WeakSet对象
WeakSet对象是一组对象的集合。WeakSet中的对象不重复且不可枚举。

与Set对象的主要区别有：

WeakSets中的值必须是对象类型，不可以是别的类型
WeakSet的“weak”指的是，对集合中的对象，如果不存在其他引用，那么该对象将可被垃圾回收。于是不存在一个当前可用对象组成的列表，所以WeakSets不可枚举
WeakSet的用例很有限，比如使用DOM元素作为键来追踪它们而不必担心内存泄漏。

*/





//一个方法是一个值为某个函数的对象属性。定义方法就像定义普通的函数，但是它们必须被赋给对象的某个属性。
//  get 是一个获取某个特定属性的值的方法。  set 是一个设定某个属性的值的方法。
//创建对象：1.使用对象初始化器{}（创建父对象）。2.使用构造函数（创建父对象）和new（创建子对象）。2-1.使用构造函数语法糖Class（创建父对象）和extend（创建子对象继承父对象）。3.使用 Object.create 方法（创建的是子对象，需要有继承的父对象存在）

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
const car2 = new Car('Honda', 'Accord', 1998);

function Cars(make, model, year) {
  }
const cars2 = new Cars('Honda', 'Accord', 1998);

/* 
const fn2 = new Function('a', 'b', 'return a + b');
const obj2 = new Object([value]);
var x = new Boolean(false);
var a = new Number('123');
const date1 = new Date('December 17, 1995 03:24:00');
var s_obj = new String('foo');
var re = new RegExp("\\w+");
var re2 = new Array(element0, element1[, ...[, elementN]])
let myMap = new Map();       //真字典，键可以是非字符串
let myMap = new Set();       //无序集合，无重复值

 */

console.log('--------------字面量--------------')
let sym=Symbol(0)
let arrs=[1,'str',true,null,undefined,Symbol(1),sym,{},function name(params){},[],car2,cars2]
console.log(arrs)
console.log('--------------构造函数1--------------')

arrs=[Number,String,Boolean,Symbol,Object,Function,Array,Date,Math,BigInt,Map,Set,Error,RegExp,Infinity,NaN,globalThis]
console.log(arrs)
console.log('-------------构造函数2---------------')

arrs=[ArrayBuffer,SharedArrayBuffer,Atomics,DataView,JSON,Promise,'Generator,GeneratorFunction,AsyncFunction',Reflect,Proxy,Intl,WebAssembly]
console.log(arrs)
console.log('---------------原型指向-------------')

console.log(Car.prototype)      //Car {}    定义Car的构造函数（自定义顶级原型对象）
console.log((Car.prototype).prototype)  //undefined
console.log(car2.prototype)     //undefined，和Car对象一个级别
//console.log((car2.prototype).prototype)  
console.log(Cars.prototype)     //Cars {}
console.log(cars2.prototype)    //undefined
//console.log((cars2.prototype).prototype)  

console.log(Function.prototype)     //[Function (anonymous)]    构造函数原型是匿名函数 [Function (anonymous)]   网上结论1：任何函数都是Function的实例；结论2：Function.prototype继承自Object.prototype
console.log((Function.prototype).prototype)     //匿名函数 [Function (anonymous)]的原型，是undefined
let aa1=function name(params) {}
console.log(aa1.prototype)      //name {}
let aa2=function (params) {} 
console.log(aa2.prototype)      //aa2 {}
console.log((function name(params) {} ).prototype)      //name {}       命名函数原型是命名对象
console.log((function (params) {} ).prototype)      //{}  匿名函数原型是空对象
let f1= new Function()      
console.log(f1.prototype)      //anonymous {}    匿名对象

console.log(global.prototype)           //undefined  在node中原型是 Global
console.log('(global.prototype).prototype')     //Cannot read property 'prototype' of undefined。global在node解释器中已经是顶级，或者看做global的原型是undefined（即Global）

console.log(Object.prototype)    //{}
let str={a:1}
console.log(str)                //{a:1}
console.log({}.prototype)       //undefined
let f2= new Object()
console.log(f2.prototype)      //undefined


console.log(Number.prototype)   //[Number: 0]
console.log((Number.prototype).prototype)   //undefined
let ab=11.1
console.log(ab.prototype)      //undefined
let f3= new Number()
console.log(f3.prototype)      //undefined

console.log(String.prototype)   //[String: '']
let ac='11.1'
console.log(ac.prototype)      //undefined
let f4= new String()
console.log(f4.prototype)      //undefined

console.log(Boolean.prototype)  //[Boolean: false]
let ad=true
console.log(ad.prototype)      //undefined
let f5= new Boolean()
console.log(f5.prototype)      //undefined

console.log(Symbol.prototype)   //Symbol {}
console.log((Symbol.prototype).prototype)   //undefined
let ae=Symbol(0)
console.log(ae.prototype)      //undefined

console.log(Array.prototype)    //[]
console.log((Array.prototype).prototype)      //undefined
let af=[]
console.log(af.prototype)      //undefined
let f6= new Array()
console.log(f6.prototype)      //undefined

console.log(Date.prototype)     //Date {}
console.log((Date.prototype).prototype)      //undefined
let ag= new Date('December 17, 1995 03:24:00')
console.log(ag.prototype)      //undefined
console.log(ag)                 //1995-12-16T19:24:00.000Z

console.log('Math.prototype')

console.log(BigInt.prototype)   //BigInt {}
console.log((BigInt.prototype).prototype)       //undefined
let ah= BigInt(9007199254740991)
console.log(ah.prototype)      //undefined

console.log(Map.prototype)      //Map {}
let ai= new Map()
console.log(ai.prototype)      //undefined

console.log(Set.prototype)      //Set {}
let aj= new Set()
console.log(aj.prototype)      //undefined

console.log(Error.prototype)    //Error {}
let ak= new Error()
console.log(ak.prototype)      //undefined

console.log('Infinity.prototype')
console.log('NaN.prototype')
console.log('globalThis.prototype')

console.log('-------------typeof字面量---------------')

console.log(typeof (1))                     //number
console.log(typeof (new Number()))          //object
console.log(typeof ('str'))                 //string
console.log(typeof (new String()))           //object
console.log(typeof (true))                  //boolean
console.log(typeof (new Boolean()))         //object
console.log(typeof (null))                   //object
console.log(typeof (undefined))             //undefined
console.log(typeof (Symbol(1)))              //symbol    没有new方法，不是完整的构造函数，Symbo is not defined
console.log(typeof (sym))                   //symbol
console.log(typeof ({}))                     //object
console.log(typeof (new Object()))          //object
console.log(typeof (function name(params){}))   //function
console.log(typeof (new Function()))         //object
console.log(typeof ([]))                    //object
console.log(typeof (new Array()))            //object
console.log(typeof (car2))                  //object
console.log(typeof (cars2))                 //object
console.log(typeof (new Car()))              //object
console.log(typeof (new Date('December 17, 1995 03:24:00'))) //object
console.log(typeof (BigInt(9007199254740991))) //bigint     没有new方法，BigInt is not a constructor
console.log(typeof (new Map()))              //object
console.log(typeof (new Set()))             //object
console.log(typeof (new Error()))           //object



console.log('-------------typeof构造函数---------------')

console.log(typeof (Car))                    //function
console.log(typeof (Number))                 //function
console.log(typeof (String))                 //function
console.log(typeof (Boolean))                //function
console.log(typeof (Symbol))                 //function
console.log(typeof (Object))                 //function
console.log(typeof (Function))               //function
console.log(typeof (Array))                  //function
console.log(typeof (Date))                   //function
console.log(typeof (Math)) //object
console.log(typeof (Map))                    //function
console.log(typeof (BigInt))                 //function
console.log(typeof (Map))                    //function
console.log(typeof (Set))                    //function
console.log(typeof (Error))                  //function
console.log(typeof (RegExp))                 //function
console.log(typeof (Infinity))  //number
console.log(typeof (NaN))   //number
console.log(typeof (globalThis))    //object
console.log(typeof (ArrayBuffer))            //function
console.log(typeof (SharedArrayBuffer))      //function
console.log(typeof (Atomics))   //object
console.log(typeof (DataView))               //function
console.log(typeof (JSON))  //object
console.log(typeof (Promise))                //function
console.log(typeof (Generator))     //undefined
console.log(typeof (GeneratorFunction))     //undefined
console.log(typeof (AsyncFunction))     //undefined
console.log(typeof (Reflect))   //object
console.log(typeof (Proxy))                  //function
console.log(typeof (Intl))   //object
console.log(typeof (WebAssembly))   //object


console.log('-------------打印构造函数（返回函数名）---------------')

console.log(Car)                    //[Function: Car]
console.log(Number)                 //[Function: Number]
console.log(String)                 //[Function: String]
console.log(Boolean)                //[Function: Boolean]
console.log(Symbol)                 //[Function: Symbol]
console.log(Object)                 //[Function: Object]
console.log(Function)               //[Function: Function]
console.log(Array)                  //[Function: Array]
console.log(Date)                   //[Function: Date]
console.log(Math) //Object [Math] {}     返回构造函数“Object”的函数体，Math是参数，Object是函数名
console.log(Map)                    //[Function: Map]
console.log(BigInt)                 //[Function: BigInt]
console.log(Map)                    //[Function: Map]
console.log(Set)                    //[Function: Set]
console.log(Error)                  //[Function: Error] { stackTraceLimit: 10 }     返回带属性的函数名
console.log(RegExp)                 //[Function: RegExp]
console.log(Infinity)  //Infinity数字字面量
console.log(NaN)   //NaN数字字面量
console.log(globalThis)    //object
console.log(ArrayBuffer)            //[Function: ArrayBuffer]
console.log(SharedArrayBuffer)      //[Function: SharedArrayBuffer]
console.log(Atomics)   //Object [Atomics] {}
console.log(DataView)               //[Function: DataView]
console.log(JSON)  //Object [JSON] {}
console.log(Promise)                //[Function: Promise]
//console.log(Generator)     //undefined
//console.log(GeneratorFunction)     //undefined
//console.log(AsyncFunction)     //undefined
console.log(Reflect)   //{}
console.log(Proxy)                  //[Function: Proxy]
console.log(Intl)   //{}
console.log(WebAssembly)   //Object [WebAssembly] { compile: [Function: compile], validate: [Function: validate], instantiate: [Function: instantiate]}


console.log('-------------函数对象的 属性和方法（值为某个函数的对象属性）---------------')

let fna=function name1(params) {}
let suma=1      //变量被引用时（放入其他容器并打印），只返回或打印右边的值或函数名或对象字面量
let sumb=[suma,2,(suma+10)]
let fnObj={
    0:0,
    '0':0,
    1:1,
    '1':1,
    fn1:fna,
    fn2:function name2(params) {}        //fn2: [Function: name2] { zfn2: [Function: fnn] },   属性fn2的值是属性-方法name2，属性-方法name2的属性是属性-方法fnn
    
}
fnObj.fn1.zfn1=sumb
fnObj.fn2.zfn2=function fnn(params) {} 
fnObj.fn3=function (params) {}
fnObj.obj={}
fnObj[0]='00'


console.log(fnObj) 
console.log(fnObj.fn1)  //[Function: name1] { zfn1: [ 1, 2, 11 ] }
console.log(fnObj.fn2)  //[Function: name2] { zfn2: [Function: fnn] }
console.log(fnObj.fn3)  //{}
console.log(fnObj.obj)  //[Function (anonymous)]    匿名函数
//console.log(fnObj.obj1) //Cannot set property 'obj1' of undefined


console.log('-------------函数数组的 属性和方法（值为某个函数的对象属性）---------------')


let fna88=function name188(params) {}
let suma88=7      //变量被引用时（放入其他容器并打印），只返回或打印右边的值或函数名或对象字面量
let sumb88=[suma88,2,(suma88+10)]
let fnObj88=[
    0,      //自动生成的下标，为[0],被后面赋予的属性值替换
    1,      //自动生成的下标，为[1]
    fna88,  //自动生成的下标，为[3]， 数组值为[Function: name188] { zfn1: [ 1, 2, 11 ] },
    suma88,   //自动生成的下标，为[4]， 数组值为 变量sum88的值 7,
                //空下标
]

/* 

    0:0,
    '0':0,
    1:1,
    '1':1,
    fn1:fna88,
    fn2:function name288(params) {}        //fn2: [Function: name2] { zfn2: [Function: fnn] },   属性fn2的值是属性-方法name2，属性-方法name2的属性是属性-方法fnn
    

*/
fnObj88.fn1=fna88
fnObj88.fn1.zfn1=sumb
fnObj88.fn2=function name288(params) {} 
fnObj88.fn2.zfn2=function fnn88(params) {} 
fnObj88.fn3=function (params) {}
fnObj88.obj={}
fnObj88[0]='00'
fnObj88['0']='000'      //‘0’下标替换掉0下标的值
fnObj88[9]='9'
fnObj88['13']='13'      //字符串中，纯数字会自动转成 数字下标，抵充掉自动生成的下标，和以数字为下标的下标
fnObj88['19a']='19'     //键值属性，不会转成数字下标

console.log(fnObj88) 
console.log(fnObj88.fn1)  //[Function: name1] { zfn1: [ 1, 2, 11 ] }
console.log(fnObj88.fn2)  //[Function: name2] { zfn2: [Function: fnn] }
console.log(fnObj88.fn3)  //{}
console.log(fnObj88.obj)  //[Function (anonymous)]    匿名函数


console.log('-------------打印解读---------------')

//[Function: Car]     打印函数名；函数返回值
console.log(function car(params) {})    //[Function: car]
let ffa=function car(params) {}
console.log(ffa)                        //[Function: car]

function cara(params) {}    
console.log(cara)        //[Function: cara]      必须是声明函数才能打印，如果是表达式函数，则属于未定义，打印错误
console.log(cara())     //undefined     没有加return 所以返回undefined
let ass={a:function name(params) {return 'hello'},b:function name2(params) {console.log('world')}}
console.log(ass.a)      //返回函数名
console.log(ass.a())    //返回hello     如果没有return 返回 undefined
console.log(ass.b())    //返回world

//Object [Math] {}    打印函数体



// {}    打印块体
try {
    {
        sumea:1
        ccccc:2
        console.log(ccccc)      // not defined
    }
} catch (error) {
    console.log(error)
}


//[Function (anonymous)]  打印匿名函数
console.log(function (params) {})    //[Function (anonymous)]
let ffa2=function (params) {}
console.log(ffa)                     //[Function: car]

//[Function: Error] { stackTraceLimit: 10 }   打印方法体

//Symbol {}           打印属性体

//{}                  打印对象字面量
console.log({123:112233})   //{ '123': 112233 }
let objj={123:112233}
console.log(objj)           //{ '123': 112233 }

//[]                  打印数组字面量
console.log([123,112233])   //[ 123, 112233 ]
let aarr=[123,112233]
console.log(aarr)           //[ 123, 112233 ]

//1,'',Ture,null,undefined    打印基本类型的常量数据的字面量
console.log(1)   //1
let num=1
console.log(num)           //1

//1,'',Ture   打印算数表达式结果
console.log(1+9)  //10
console.log('a'+'b')    //ab
console.log(true+false)     //1
console.log({1:1,2:2}+{3:3,4:4})    //[object Object][object Object]
console.log([1+2,6-4]+[3+4])        //3,27
console.log([1]+[2])                //12
console.log(['1']+['2'])            //12
console.log(['a']+['d'])            //ad
console.log(['a','b','c']+['d','e','f'])    //a,b,cd,e,f
console.log(['a','b','c',]+['d','e','f'])   //a,b,cd,e,f
console.log(['a','b','c']+[,'d','e','f'])   //a,b,c,d,e,f




//1000000n            打印bigint字面量
let bi= BigInt(1000000000000000000000000000000)     
let bi2= 10n
console.log(bi)    //1000000000000000019884624838656n
console.log(bi2)    //10n
console.log(BigInt(1000000000000000000000000000000))    //1000000000000000019884624838656n
console.log(1000000000000000000000000000000)    //1e+30
console.log(1000000n)   //1000000n

//symbol              打印symbol值
let symb1=Symbol(1)
let symb2=Symbol(1)
console.log(symb1,symb2,symb1==symb2,symb1===symb2)  //Symbol() Symbol() false false

//<5 empty items>     打印空数组值，数组中的尖括号
let aaar=[]
aaar[5]=5
console.log(aaar[0])    //undefined


//打印内置对象
console.log(console)    //{log: [Function: bound consoleCall],,,,,,[Symbol(kFormatForStderr)]: [Function: bound ]}
console.log(console.prototype)  //undefined     顶级原型
console.log(Math)               //Object [Math] {}
console.log(Math.prototype)     //undefined     顶级原型
console.log(Object)             //[Function: Object]
console.log(Object.prototype)   //{}
console.log({}.prototype)       //undefined     顶级原型    

console.log(Function)           //[Function: Function]
console.log(Function.prototype)     //[Function (anonymous)]    匿名函数
console.log((Function.prototype).prototype)     //undefined     顶级原型

function name888(params) {}
console.log(name888.prototype)     //name888{} 函数的原型是对象？
console.log(name888.constructor)    //[Function: Function]

console.log([].prototype)   //undefined     顶级原型 

console.log(''.prototype)   //undefined     顶级原型 



console.log('-------------打印函数原型链---------------')
//打印函数原型链


let ff111=function (params) {}
console.log(ff111.prototype)        //ff111 {}  自定义函数ff111原型，字面量
console.log((Date.prototype).prototype)     //undefined     顶级无

console.log(Date)       //[Function: Date]          Date函数
console.log(Date.prototype)         //Date {}       Date原型，字面量
console.log((Date.prototype).prototype)     //undefined     顶级无

console.log(Object)             //[Function: Object]    Object函数
console.log(Object.prototype)   //{}                Object原型，字面量      顶级函数
console.log((Object.prototype).prototype)     //undefined     顶级无

console.log(Function)           //[Function: Function]      Function函数
console.log(Function.prototype)     //[Function (anonymous)]    匿名函数原型(function(){})，字面量
console.log(function(){ return 1}.prototype)     //{}       表示匿名函数    顶级函数
console.log(function ww(){}.prototype)     //ww {}       表示命名函数       顶级函数
console.log(global)     //<ref *1> Object [global] {}       顶级函数
console.log(typeof(global))     //object
console.log(Math) 
console.log(typeof(Math))      //object

//每个函数的原型都不一样
console.log(Object.prototype==function(){ return 1}.prototype)      //false
console.log(Function.prototype==function(){ return 1}.prototype)       //false
console.log(function(){ return 3}.prototype==function(){ return 1}.prototype)       //false
console.log(function(){ return 1}.prototype==function(){ return 1}.prototype)       //false
console.log(function(){}.prototype==function(){}.prototype)       //false
console.log(function qq(){ return 3}.prototype==function(){ return 1}.prototype)       //false


console.log({1:1}.prototype)        //undefined
console.log(Object.prototype=={1:1}.prototype)      //false
console.log({2:2}.prototype=={1:1}.prototype)       //true
console.log({2:2}.prototype==={1:1}.prototype)       //true


//相同构造函数的原型医院
console.log(Object.prototype===Object.prototype)     //true
let ddd=new Object({1:1,2:2})       //{ '1': 1, '2': 2 }
console.log(ddd)                    //[Number: 12]
let ddd2=new Object(12)
console.log(ddd2)
let DDD=new Object({1:1,2:2})
console.log(DDD)
console.log(ddd==DDD)


console.log(Array)       //[Function: Array]
console.log(Array.prototype)         //[]


console.log('-------------打印函数原型链---------------')

//打印构造器
console.log(Math.constructor)       //[Function: Object]
console.log((1).constructor)    //[Function: Number]

//打印内置方法
console.log(Number())   //0
console.log(String())   //空
console.log(Boolean())   //false
console.log(Object())   //{}
console.log(Function())   //[Function: anonymous]
console.log(Array())   //[]
console.log(Date())   //Wed Sep 09 2020 10:02:07 GMT+0800 (China Standard Time)
//console.log(Math())   //0       Math is not a function







/* 
let obj={}
obj.obj1=function funCtion(params) { return 'function';}      //可以再对象字面量上添加属性
obj.obj2='string'      //可以再对象字面量上添加属性
obj.obj3=1      //可以再对象字面量上添加属性
obj['obj4']={1:'一'}
console.log(typeof(obj));   //返回object
console.log(obj.obj1);     //返回[Function: funCtion]   function的字面值
console.log(obj.obj2);     //string
console.log(obj.obj3);    //1
console.log(obj.obj4);    //{1:'一'}
console.log(obj);         //{    obj1: [Function: funCtion],    obj2: 'string',    obj3: 1,    obj4: { '1': '一' }  }  对象字面量
obj[1]=22             
console.log(obj); 
console.log(obj[1]);    //数字下标自动转成字符串键
console.log(obj[2]);    //未定义
 */



/* 
let fn=function name(params) {}
arr.fn1=function funCtion(params) { return 'function';}      //可以再对象字面量上添加属性
arr.fn2='string'      //可以再对象字面量上添加属性
arr.fn3=1      //可以再对象字面量上添加属性
arr['fn4']={1:'一'}
console.log(typeof(fn));   //返回object
console.log(fn.fn1);     //返回[Function: funCtion]   function的字面值
console.log(fn.fn2);     //string
console.log(fn.fn3);    //1
console.log(fn.fn4);    //{1:'一'}
console.log(fn);         //[ arr1: [Function: funCtion], arr2: 'string', arr3: 1 , arr4: { '1': '一' }]  数组字面量
 */


/* 
数组和对象的区别：有序，无须。数组字面量不能直接写键，但是可以通过.或者[]指定添加。意义在于，快速添加值，自动生成有序键，下标查找
函数作为对象的意义：作为对象中的方法，可以无限添加子属性和子方法，而不会被截断
*/