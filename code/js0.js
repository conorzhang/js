"use strict";

function print() {
    console.log(arguments);    
}
var ul = {li1:1,li2:2} 
var a=1
////////////////////////////////////


//字面值（基本数据类型）
''  //字符串值：'1',"2",`3${4}`
1  //数字值：1,-1,1e2,1e-2,0.1,-0.1,0.1e2,0.1e-2
true  //布尔值：true,false
null  //特殊值：null,undefined；特殊函数返回值：NaN,Infinity 
    /* 
    特殊值
    Symbol(1,0.1,'',true,null,NaN)   //把以上类型转成唯一值
    特殊整数值
    BigInt(10)  //把数字转成长整数，或者数字后面加n
    特殊字符串
    /a b c \ ^ $ * + ? . (x) (?:x) x(?=y) (?<=y)x x(?!y) (?<!y)x x|y {n} {n,} {n,m} [xyz] [^xyz] [\b] \b \B \cX \d \D \f \n \r \s \S \t \v \w \W \n \0 \xhh \uhhhh \u{hhhh}或\u{hhhhh} / igmsuy    //匹配规则。g：全局搜索。i：不区分大小写搜索。m：多行搜索。s：允许 . 匹配换行符。u：使用unicode码的模式进行匹配。y：执行“粘性(sticky)”搜索,匹配从目标字符串的当前位置开始。 
    */


//表达式
//字面量表达式
''
1
true
//运算表达式
    //算数运算
    1+1-1*1/1%1*1   
    //一元运算
    +1  
    +'1'        //转成数值
    -2
    -'2'        //转成数值
    ~1
    !1
    typeof 1
    delete ul.li1
    void 1      //转成undefined
    //自增减运算    
    a++         //必须是变量引用数字，不能是数字面量
    ++a
    a--
    --a   
    //关系运算
    'li1' in ul     //属性'li1'是否在对象ul里
    'a' instanceof String       //字符串'a'是否原型为String
    1<2
    1>0
    1<=2
    2>=1
    //相等运算
    1==1
    1!=2
    '1'==='1'
    '1'!==1
    //逻辑运算
    1&&1        //与
    1||1        //或 
    1&0         //二进制与
    1|0         //二进制或
    1^0         //二进制异或
    //条件运算
    true ? 'ture' : 'false、null、NaN、0、""、undefined'
    //位移运算
    >>0
    <<1
    >>>10
    //字符串拼接运算
    'a'+'1' 
    //逗号运算符
    1,2,3   //左到右多个值，返回最右值；运算级别最低。
        var a,b = 1   //同时声明多个变量的方式；
        [1,2,3]     //数组，对象的分割
        var c = (1,2,2334); print(c)  //多个表达式被当作单个表达式；
    //赋值运算符
        // =
            //赋单个值
            var a=1
            var a=''
            var a=true
            var a=null
            var a=undefined
            var a={}
            var a=[]
            var a=function () {}
            a.x=12
            a[0]=13
            function a(params) {return 14}
            //赋表达式
            var b=1+1
            //赋多个值
            var a1,a2,a3
            a1=a2=a3=1
            var a1={}  //1.放在句首是代码块；2.放在变量、函数参数中，是对象赋值
                var a,b,c = {a:1,b:2,c:3}
            var a2=[]  //代替数组赋值，数组值,空数组前面不能跟元素，否则按下标解释，单独非空数组表示数组字面量
            var a3=function name(params1,params2) {this.params=params;this.params2=params2;}    //构造函数
        // +=
        // -=
        // *=
        // /=
        // %=
        // &=
        // |=
        // ^=
        // <<=
        // >>=
        // >>>=
        // [a, b] = [1, 2]
        // {a, b} = {a:1, b:2}
    //关键字运算
    this
    function name(params) {}
    class className {
        constructor(height,width) {
            this.h=height;
            this.w=width;
            this.name='矩形';
        } static logNbSides() {
            return 'I have 4 sides';
          }
      };
        class child extends className {
            constructor(length){
                super(length,length);
                this.name='正方形'
            } static logDescription() {
                return super.logNbSides() + ' which are all equal';
              }       
        };
    /* 
    function*
    async function
    yield
    yield*
    await
    {}
    []
    /ab+c/i
    ()
    a.b
    a['b']
    new
    new.target
    super
    ...obj
    */





//容器符号
//()  分组操作符（优先运算的表达式），参数容器，调用函数。不能单独为空，括号前面如果有除了运算符合的元素，则括号视为函数调用。括号前面和后面，必须用分号隔开，不然会解释为函数调用。（作为首行，或函数调用的括号后面，可以不加分号）
;(1);
(1+1);
(a=1);
(a+1);
(1,2,3);
('1,2,3');
(true);
((1));
({});
([]);
(function f() {return 2});
(console.log( (1) ));
(console.log( (1+1) ));
debugger
(console.log( (1+1,20+20) )); //返回最右值40
(console.log( (1,2,30) )); //返回最右值30
(console.log( ('1,2,3') ));
(console.log( ('1','2','3') )); //返回最右值30
(console.log( (true) ));
(console.log( (function(){return 2}) ));
(function f() {return 2}) ();    // 立即执行函数
(function f() {console.log(1)}) (); // 立即执行函数
//{}  //单独为空：块代码，赋值：对象容器
//[]  //单独为空、赋值：数组容器，赋值数组名后：数组下标
//'' "" ``//字符串容器
//${} //字符串模板



 //语句
{}  //简单语句，代码块
;   //空语句

//分支语句
if (true) {}    //分支语句：判断真则执行，假则不执行
if (true) {} else {throw 'no'}  //分支语句：判断真，则执行第一条，判断假，则执行其他条
try { throw 'throw'; } catch (e) { console.error(e); }  //分支语句：语法正确则继续执行下一条语句，语法错则误传参给catch语句，进行内部操作，并继续执行下一条语句
switch (3) { case 1: console.log(1); case 2: console.log('1或2'); break; default:console.log('error number'); }     //分支语句：匹配参数执行哪一条语句，可以多个不同参数匹配后共同执行一条语句，无匹配则执行默认语句

//函数。参数：1.标识符（可以设默认值） 2.函数名   3.变量名
function name(a=1,b=2) {};    //有名有参函数，如果赋值给变量，函数名还是函数名
(function () {});  //无名无参函数，如果赋值给变量，则函数名是变量名
(function () {})();     //立即执行函数

let list = a => true;  //箭头函数表达式，简写（单个参数省略小括号，单个return省略大括号）
let list2 = () => {return true;};   //箭头函数表达式完整写法
(a)=>{return 111};     //匿名箭头函数


label:{}  //标记语句，配合break和continue使用
    outer_block:{
        inner_block:{
        console.log ('1');
        break inner_block;      // breaks out of both inner_block and outer_block
        console.log (':-(');    // skipped
        }    
        console.log ('2');        // skipped
    }
//return 函数返回值，并中断顺序语句。
//break 相当于return，中断，没有返回值。存在分支和循环语句中单独用；存在块语句中，配合标记块语句使用，必须内嵌在标记块语句内。
//continue 中断本次循环，继续下一次循环。存在分支和循环语句中单独用；存在块语句中，配合标记块语句使用。


/*
控制流
Block
break
continue
Empty
if...else
switch
throw
try...catch

声明
var
let
const

函数和类
function
function*
async function
return
class

迭代
do...while
for
for each...in
for...in
for...of
for await...of
while

其他
debugger
import
label
with

关键字
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield
-----保留字
enum
-----严格模式保留字
implements
interface
let
package
private
protected
public
static
-----模块代码中
await
-----
直接量null、true和false同样不能被当成标识使用
-----
转义字符
\n  换行
\r  回车
*/



//函数表达式和函数声明




//可添加属性的对象类型变量
var a=[];   //数组对象
var b={};   //对象
var c=function (params) {};     //函数对象
a.z=b.z=c.z=121;
print(a.z,b.z,c.z)
