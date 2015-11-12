define([
    'underscore'
],function(_){

    var func = function(greeting){ 
        return greeting + ': ' + this.name 
    };
    func = _.bind(func, {name: 'moe'}, 'hi');
    console.log(func());        //hi: moe
    //_.bind(func, {name: 'moe'}, 'h1')
    // 方法{name: 'moe'}作为func的作用域
    // 'hi' 为func的第一个arguments
});









