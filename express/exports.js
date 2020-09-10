

module.exports = {};
module.exports.age = 12;


/* 
module.exports = 'ROCK IT!';
//console.log(rocker)，是个字符串(根据赋值类型，指定类型)
//console.log(rocker.age)，添加属性无效（包括对象），rocker.age未定义
module.exports.age = 11;
//console.log(rocker)，是个匿名空对象，添加属性{ name: 11 }
//console.log(rocker.age)，rocker.age是11
exports.age2 = function() {
    return 11;
};
//console.log(rocker)，是个匿名空对象，添加属性{ age: [Function (anonymous)] }
//console.log(rocker.age2())，rocker.age2是11
 */



//var rocker = require('./myFunc.js');
//如果你想你的模块是一个指定的（未声明）数据类型，就用module.exports = （七大数据类型）
//如果你想的模块是一个实例化的匿名对象，就用module.exports.xxx = （任意数据类型，作为方法和属性添加到module对象中，如果module是其他数据类型，则无效未定义）
//如果你想的模块是一个实例化的匿名对象，就用exports.xxx = 是“module的定义一个对象类型，module.exports添加属性或方法”的快捷方式。可以和“exports = module.exports = xxx”一起用。不能和module共用，前面有module则它无效。