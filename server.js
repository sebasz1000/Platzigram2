var express = require("express");
var app = express();

app.set('view engine', 'pug'); // set pug module viewer for node server
app.use(express.static('public'));
app.get('/', function(req,res){
    
    res.render('index');  //render view/index.pug file on localhost
})

app.listen(3000, function(Error){
    
    if(Error) return console.log('Hubo un error escuchando por el puerto'), process.exit(1);
    
    console.log('Perfecto! escuchando por el puerto 3000');
   
});