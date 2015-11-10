define([
    'underscore'
],function(_){
    //_.keys，检索对象所有属性值
    var routes = {
        '*other/:id': 'specialOpen',
        '*other': 'defaultOpen'
    };

    var result = _.keys(routes);
    console.log(result);       //["*other/:id", "*other"]

});









