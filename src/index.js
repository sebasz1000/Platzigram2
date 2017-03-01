var page = require("page");

var main = document.getElementById("main-container");

page('/', function(ctx, next) {
  main.innerHTML = "<a href='/signup'>Ir a SIGNUP</a>";
})

page('/signup', function(ctx, next){
  main.innerHTML = "<a href='/''>Ir a HOME</a>";
})


page();