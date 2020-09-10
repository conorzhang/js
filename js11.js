
function print(params) {
    var newLength = [];
    for (let i = 0 ; i < arguments.length; i++) {
        newLength.push(arguments[i])
    };
    console.log(newLength)
}

print('---------------------------------')

function name(params) {}

print(1,'',true,{},[],name,Math,global,a=12,)

console.log(1,'2',true,{},[],name,Math,global,a=12,)

print('---------------------------------')

fnn=()=>999;

print(
    a=12,
    (b=()=>1)(),
    b=()=>'b',
    fnn
    )

console.log(
    a=12,
    (b=()=>1)(),
    b=()=>'b',
    fnn
    )

print('--------------默认函数（参数赋值）-------------------')
//函数默认参数允许在没有值或undefined被传入时使用默认形参。
function multiply(a, b = 1) {
    return a * b;
  }  
  console.log(multiply(5, 2));
  // expected output: 10  
  console.log(multiply(5));
  // expected output: 5


print('--------------剩余函数（数组参数）-------------------')
//剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

//arguments对象是所有（非箭头）函数中都可用的局部变量。

/* 
 * 剩余参数和 arguments对象之间的区别主要有三个：
 * 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参。
 * arguments对象不是一个真正的数组，而剩余参数是真正的 Array实例，也就是说你能够在它上面直接使用所有的数组方法，比如 sort，map，forEach或pop。
 * arguments对象还有一些附加的属性 （如callee属性）。
 */
printf=(...rest)=>{ console.log(rest)};
printf(1,2,3,4,5)

printf2=(...rest)=>{ console.log(rest[0])};
printf2(1,2,3,4,5)

printf3=(a,b,c,d,...rest)=>{ console.log(rest[0])};     //传参先给前面的参数，余下的给剩余参数rest
printf3(1,2,3,4,5)

printf4=(a,b,c,d,...[e,f,g])=>{ console.log(e,f,g)};    //解构剩余参数
printf4(1,2,3,4,5,6,7)

print('--------------剩余函数（数组参数）扩展运算-------------------')
var arr1 = [1, 2, 3, 4];
var arr2 = [...arr1, 4, 5, 6];
console.log(...arr1)     //1, 2, 3, 4       分解数组
console.log(arr2);      //[1, 2, 3, 4, 4, 5, 6]     将一个数组插入到另一个数据中

var str='loycoder';
var arr3= [...str];
console.log(arr3);  //["l", "o", "y", "c", "o", "d", "e", "r"]      分解字符串

let test= function(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
};
let arr = [1, 2, 3];
console.log(...arr)     //1，2，3       分解数组
test(...arr);   //1，2，3       简化传递多个参数的形式


print('--------------call方法-------------------')
var person={fun:a=(a,b)=>a+' '+b}
console.log(person.fun('张','小米')) 
var person2={fun:function () {
    return this.a + this.b;
}}
var per={
    a:'李',
    b:'世民'    
}
console.log(person2.fun.call(per))


console.info(person2.fun.call)

/*   所有对象都不恒等
let mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, "some text" ]
let o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); 

name({1:1}=={1:1})
 */



//print(2333,2,2,2,3)

/* 
let aaa=[1,2,3,4]

for (let i = 0 ; i < aaa.length; i++) {    
    let newLength = [];
    newLength.push(aaa[i])
    console.log(newLength)
};


let newLength = [];
for (let i = 0 ; i < aaa.length; i++) {    
    newLength.push(aaa[i])
    console.log(newLength)
};


function name(params) {
    let aaa=params
    let newLength2 = [];
    for (let i = 0 ; i < aaa.length; i++) {    
        newLength2.push(aaa[i])
    };
    console.log(newLength2)    
}
name(1,2,3) */