var express = require("express");
var app = express();

app.get('/', function(req,res){
    
    res.send('Hello World');
})

app.listen(3000, function(Error){
    
    if(Error) return console.log('Hubo un error escuchando por el puerto'), process.exit(1);
    
    console.log('Perfecto! escuchando por el puerto 3000');
   
});