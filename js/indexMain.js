define([
    'underscore'
],function(_){
    //_.difference，在数组array中排除(array和array2的公共项)
    var array = [1 ,2,5];
    var array2 = [2, 3, 4];
    var result = _.difference(array, array2);
    console.log(result);            //[1, 5]
});









