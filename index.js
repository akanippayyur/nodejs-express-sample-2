var http=require('http')
var express=require('express')
var morgan=require('morgan');
var helmet=require('helmet');

// Initialize the express app.
const app = express()

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

// Enable helmet to secure the application.
app.use(helmet());
app.use(helmet.noCache())
app.use(helmet.frameguard())

app.get('/', (req, res) => {


	var http = require('http'),
	    fs = require('fs');


	fs.readFile('index1.html', function (err, html) {
	    if (err) {
	        throw err;
	    }
			res.writeHeader(200, {"Content-Type": "text/html"});
			res.write(html);
			res.end();
	});


	//res.writeHead(200, {'Content-Type': 'text-plain'});
	//res.end('Hello World!');
});

app.post('/POSTREQUEST', (req, res) => {


	var http = require('http'),
	    fs = require('fs');


	fs.readFile('index2.html', function (err, html) {
	    if (err) {
	        throw err;
	    }
			res.writeHeader(200, {"Content-Type": "text/html"});
			res.write(html);
			res.end();
	});


	//res.writeHead(200, {'Content-Type': 'text-plain'});
	//res.end('Hello World!');
});

http.createServer(app).listen(3000, '127.0.0.1', () => {
	console.log('Server running at http://127.0.0.1:3000/');
});
