define([
    'underscore'
],function(_){
    var person1 = {
        name: 'nose',
        age: 22
    };
    var person2 = {
        name: 'nose1',
        age: 23
    };
    _.defaults(person1, person2);
    console.log(person1);   //{name: 'nose', age: 22};


    person1 = {
        name: undefined,
        age: 23
    };
    
    _.defaults(person1, person2);
    console.log(person1);          //{name: "nose1", age: 23}


});

//总结： 
//_.defualts方法
//填充第一个对象中值为undefined的属性，用后面的对象





