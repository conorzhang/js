"use strict";

var multiline1 = function (fn) {
    var arr1 = fn.toString().split('\n');
    var str1 = arr1.slice(1, arr1.length - 1).join('<br>');
    return str1;
};

var multiline2 = function (fn) {
    var arr2 = fn.toString().split('\n');
    var str2 = arr2.slice(1, arr2.length - 1).join('\n');
    return str2;
};

function jsCode(){}

var html_file = multiline1(jsCode);

var js_file = multiline2(jsCode);

try {
    document.getElementById('view').innerHTML=html_file;
} catch (error) {
    console.log(js_file);
}

function jsCode(){
    var a = "ni shuo ni shi hao ren";
    var a_tostr=a.toString();
    var a_arr = a.split(" ");
    console.log(a_tostr, '\n', a_arr);
    //ni shuo ni shi hao ren 
    //[ 'ni', 'shuo', 'ni', 'shi', 'hao', 'ren' ]
}