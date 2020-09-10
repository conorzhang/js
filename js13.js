#!/usr/local/bin/node
//MacOS  查找命令“which node”
//Linux  查找命令“where node”



/* let a,v = {a:11,v:12,c:13}
let {x,z}={w:12,x:14,z:17}
console.log(x)

 { x, x, x, x } 表示解构，用于函数参数、返回值、解构赋值等号左侧


 */
loop1:          //标记符号，引用，配合continue和break
{
    id:5;
    name: 'San Francisco';
    //console.log(12345);
    //continue loop1;
}


let n1 = 0;


/* 
console.log('-------------------')
while (n1 < 3) {
  let n = n1++;
  console.log(n);
}
 */
console.log('-------------------')
for (let index = 0; index < 3; index++) {
    console.log(n1++);
    
}



 //对象表达式简写
function getKey(params) {
    return params;
}

const obj = {
id:5,
name: 'San Francisco',
[getKey('enabled')]: true       //函数getKey调用返回值最为键
}

let ref=1
const atom = {
    ref,    //变量名ref作为键，变量值1作为值
  
    value: 1,
  
    addValue(value) {
      return atom.value + value;
    },      //函数名addValue作为键，return值作为值
  };

console.log(
    obj,    //{ id: 5, name: 'San Francisco', enabled: true }
    atom    //{ ref: 1, value: 1, addValue: [Function: addValue] }
)









console.log(123_00 === 12_300)
console.log(typeof(98_000_000))

function a2(params) {
    return params+1;
}
function b2(params) {
    return params+2;
}

console.log(a2(b2(0)))


 // 闭包写法1
function aa(params) {
    let a=params
    let b=function x(a) {
       return a+2;
    }
    return b(a);
}
//console.log(aa(1)) //3

 // 闭包写法2
function aa(params) {
    let a=params
    let b=function x() {
       return a+2;
    }
    return b();
}
//console.log(aa(1))  //3


//return  xx,xx,xx  最终返回最右边的值




aa.a=13
aa.b=function n99(params) {
    let dd={11:99};
    return dd;
}

let a=aa

console.log(
    a.a,        //13 
    //a.a(),    //a.a is not a function
    a.b,        //[Function: n99]
    a.b()       //99
)   //console.log()里面的,,,为全部展示；对象和数组中的,,,也是全部展示

let n=a.b()
let m=a.b

n.c={}
m.d=[]

console.log(n.c)

console.log(m.d)


/* 
b.c
b.b

b()
b(1)

b().c
b().d
 */