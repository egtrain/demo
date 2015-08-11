var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//template to be used
var hbs = require('hbs');

var blogEngine = require('./blog');

//rules for the template that we are using hbs
app.set ('view engine', 'html');
app.engine ('html', hbs.__express);

//to look for in default folder
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(req, res) {
	res.render('index', {title: "My Blog", entries:blogEngine.getBlogEntries()});
});

app.get('/about', function(req, res) {
	res.render('about', {title :"About Me"});
});


app.get('/article/:id', function(req, res) {
	var entry = blogEngine.getBlogEntry(req.params.id);
  	res.render('article',{title:entry.title, blog:entry});
});

app.listen(3000);