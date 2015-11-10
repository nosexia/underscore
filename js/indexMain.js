define([
    'underscore'
],function(_){
    var viewOptions = ['model', 'el'];
    var options = {model: 'model1', collection: 'collection1'};
    var result = _.pick(options, viewOptions);
    console.log(result);            //model: 'model1'
});









