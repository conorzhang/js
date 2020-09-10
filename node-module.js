"use strict";


//const { PI } = Math;
//const PI = Math.PI;

exports.area = (r) => PI * r ** 2;
/* 圆面积公式
function area1(r1) {
    return PI * r1 ** 2;    
}
console.log(area1(34));
 */

exports.circumference = (r) => 2 * PI * r;
/* 圆周长积公式
function cirfer(r2) {
    let r3 = 2 * PI * r2;
    return r3.toFixed(2)
}
console.log(cirfer(10)); 
*/
