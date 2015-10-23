define([
    'underscore'
],function(_){
    var person = {
        name: 'nose',
        age: 23,
        talk: function(){ console.log('i am talking') },
        see: function(){ console.log('i am seeing')}
    };

    var result = _.pick(person, 'name', 'talk');
    //console.log(result);   //{name: 'nose', talk: function(){ console.log('i am talking')}


    //第二个参数是函数的情况

    person = {
        name: 'nose',
        age: 23
    };

    var result = _.pick(person, function(val, attr){
        return _.isNumber(val);
    });
    console.log(result);            //Object {age: 23}

});









