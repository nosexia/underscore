define([
    'underscore'
],function(_){

    //_.any, _.some方法，检测数组中，是否有一项不为false值
    
    var array1 = [
        {
            route: /\d+/,
            fn1: function(){
                console.log('is number');
            }

        },
        {
            route: /\D+/,
            fn2: function(){
                console.log('is not number');
            }
        }
    ];

    _.any(array1, function(obj, nIndex){
        console.log(obj);
        console.log(nIndex);
    });

    //_.any, _.some类似于$.each方法,返回true，循环结束
    
});









