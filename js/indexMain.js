define([
    'underscore'
],function(_){
    var person = {
        name: 'nose',
        talk: function(){
            return 'I am talking'
        }
    };
    //指定的属性对应的值，是字符串，返回对应的值
    var result = _.result(person, 'name1');
    console.log(result);        //nose

    //指定的属性对应的值是函数，执行函数，返回函数值
    var result1 = _.result(person, 'talk');
    console.log(result1);       //I am talking

});

//_.result(object, property, [defaultValue]) , 没有找到执行默认值






