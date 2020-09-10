"use strict";


//////////////////////////////////////////
//Node.js内置模块

//语法内置属性（全局对象）
//值属性
global.Infinity
global.NaN
global.undefined
global.globalThis
//基本对象
global.Object
global.Function
global.Boolean
global.Symbol
//错误对象
global.Error    //,,,,,,
//数字和日期
global.Number
global.Math
global.Date
//文本处理
global.String
global.RegExp
//数组
global.Array
//使用键的集合对象
global.Map
global.Set
global.WeakMap
global.WeakSet
//结构化数据
global.JSON
//控制抽象化
global.Promise
//反射
global.Reflect    
global.Proxy
//国际化
global.Intl
//加载管理 WebAssembly 代码
global.WebAssembly
//语法内置方法（全局对象），省略global，后加（）
global.eval
global.isFinite
global.isNaN
global.parseFloat
global.parseInt
global.decodeURI
global.decodeURIComponent
global.encodeURI
global.encodeURIComponent

//查看全部内置模块（需要引入的对象），进入node交互解释器，空白处直接输入TAB键两下，显示所有内置模块对象。输入内置对象回车，查看属性和方法
/* 
```                   ArrayBuffer           Atomics               BigInt                BigInt64Array
BigUint64Array        ```                   Buffer                DataView              ``` 
```                   EvalError             Float32Array          Float64Array          ``` 
```                   Int16Array            Int32Array            Int8Array             ``` 
```                   ```                   ```                   ```                   ```
```                   ```                   ```                   RangeError            ReferenceError
```                   ```                   ```                   SharedArrayBuffer     ```
```                   SyntaxError           TextDecoder           TextEncoder           TypeError
URIError              URL                   URLSearchParams       Uint16Array           Uint32Array
Uint8Array            Uint8ClampedArray     ```                   ```                   ```
_                     _error                ,,,,,,                ,,,,,,                ,,,,,,
,,,,,,                clearImmediate        clearInterval         clearTimeout          ,,,,,,
,,,,,,                constants             ,,,,,,                decodeURI             decodeURIComponent
,,,,,,                ,,,,,,                ,,,,,,                encodeURI             encodeURIComponent
escape                eval                  ,,,,,,                ,,,,,,                ,,,,,,
```                   ,,,,,,                ,,,,,,                ,,,,,,                ,,,,,,
isFinite              isNaN                 ,,,,,,                ,,,,,,                ,,,,,,
parseFloat            parseInt              ,,,,,,                ,,,,,,                ,,,,,,
,,,,,,                ,,,,,,                queueMicrotask        ,,,,,,                ,,,,,,
require               setImmediate          setInterval           setTimeout            ,,,,,,
,,,,,,                sys                   ,,,,,,                ,,,,,,                ,,,,,,
,,,,,,                ```                   unescape              ,,,,,,                ,,,,,,
,,,,,,                ,,,,,,                ,,,,,,                ,,,,,,

__defineGetter__      __defineSetter__      __lookupGetter__      __lookupSetter__      __proto__
hasOwnProperty        isPrototypeOf         propertyIsEnumerable  toLocaleString        toString
valueOf

constructor
*/



/////////////////////////////////////////

assert //- 断言
async_hooks //- 异步钩子
Buffer //- 缓冲器                //内置 
child_process //- 子进程
cluster //- 集群
console //- 控制台               //内置           、、window
crypto //- 加密                                  、、window
debugger //- 调试器              //未定义
dgram //- 数据报
dns //- 域名服务器
domain //- 域
Error //- 错误
events //- 事件触发器
fs //- 文件系统
{global} //- 全局变量            //内置 
http //- HTTP
http2 //- HTTP/2
https //- HTTPS
inspector //- 检查器
module //- 模块
net //- 网络
os //- 操作系统
path //- 路径
perf_hooks //- 性能钩子
process //- 进程                //内置 
punycode //- 域名代码
querystring //- 查询字符串
readline //- 逐行读取
repl //- 交互式解释器
stream //- 流
string_decoder //- 字符串解码器
timer //- 定时器
tls //- 安全传输层
trace_events //- 跟踪事件
tty //- 终端
url //- URL
util //- 实用工具,扩展语法
v8 //- V8引擎
vm //- 虚拟机
wasi //- WASI         //,,,,,,
worker_threads //- 工作线程
zlib //- 压缩













