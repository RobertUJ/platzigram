var express = require('express');

var app = express();

//Setting the template engine
app.set('view engine', 'pug');

app.use(express.static('public'));

//Some routes!
app.get('/', function(req, res){
	res.render('index');
});

//Some routes!
app.get('/signup', function(req, res){
	res.render('index');
});

//Some routes!
app.get('/signin', function(req, res){
	res.render('index');
});

app.listen(3000, function(err){
	if(err) return console.log("Hubo un error"), process.exit(1);
	console.log("Escuchando en el puerto 3000");
});