var page = require('page');
var empty = require('empty-element');
var template = require('./template');
// we just take the 
page('/signin', function(ctx, next){
  var main = document.getElementById("main-container");
  empty(main).appendChild(template);
})

