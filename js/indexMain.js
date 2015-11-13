define([
    'underscore'
],function(_){

    //_.any, _.some方法，检测数组中，是否有一项不为false值
    
    var array1 = [null, undefined, false, 0];
    var result = _.some(array1)  //false
    console.log(result)
    array1.unshift(1);
    result = _.some(array1)    //true;
    console.log(result)
    //_.any, _.some方法，数组中有一项通过断言(数组中有一项为true)，返回true, 
});









