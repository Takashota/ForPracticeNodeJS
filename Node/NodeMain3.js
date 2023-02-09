/* How to activate server you made 
	1. If you make server and execute at the Node directory, you can activate this file.
		node NodeMain.js
	2. Connect the URL bellow.
		http://localhost:8080
*/

// 01. Create server

	// 1. Require http module.
	// 2. Create server through the port 8080.
	const http = require("http");
	http.createServer(function(req,res){
		res.writeHead(200, {"Content-Type" : "text/plain"});
		res.write("Hello");
		res.end();
	}).listen(8080);

	/* Sample
	const http = require("http");
	http.createServer(function(req,res){
		res.writeHead(200, {"Content-Type" : "text/plain"});
		res.write("Hey");
		res.end();
	}).listen(8080);
	*/

// 02. Create your module.

	// 1. Create Server (Delete or Comment out your codes so far.)
	// 2. Read a function from myDate() from the "myfirstmodule".

	/* Sample
	const http = require("http");
	const dt = require("./module/myfirstmodule");

	http.createServer(function(req,res){
		res.writeHead(200, {"Content-Type" : "text/plain"});
		res.write("It's " + dt.myDate());
		res.end();
	}).listen(8080);
	*/

// 03. Read the pathname of URL

	// 1. Create Server (Delete or Comment out your codes so far.)
	// 2. Display "/summer" by request URL.

	/* Sample
	const http = require("http");

	http.createServer(function(req,res){
		res.writeHead(200, {"Content-Type" : "text/plain"});
		res.write(req.url);
		res.end();
	}).listen(8080);
	*/

// 04. File system

	// 1. Create Server (Delete or Comment out your codes so far.)
	// 2. Get file server
	// 3. Create a file named "demofile.html" 
	// 3. Read a file, demofile.html.

	/* Sample
	const http = require("http");
	const fs = require("fs");

	http.createServer(function(req,res){
		fs.readFile("./html/demofile.html", function(err, data){
			res.writeHead(200, {"Content-Type" : "text/html"});
			res.write(data);
			res.end();
		});
	}).listen(8080);
	*/

// 05. Display summer.html or winter.html with setting routing.

	// 1. Get modules http, fs, url, summer.html and winter.html.
	// 2. Create server.
	// 3. Create a variable named URLFromClient for inputting url.

	/* Sample 
	const http = require("http");
	const url = require("url");
	const fs = require("fs");
	//まずindex.html login.html(新規ユーザ登録)
	
	var summer = fs.readFileSync("./html/summer.html", "UTF-8");
	var winter = fs.readFileSync("./html/winter.html", "UTF-8");
	var login = fs.readFileSync("./html/login.html", "UTF-8");
	var register = fs.readFileSync("./html/register.html", "UTF-8");


	http.createServer(function(req,res){

		var URLFromClient = url.parse(req.url);

	// Routing.
	switch(URLFromClient.pathname){
		case "/":
		break;

		case "/html/login.html":
			res.writeHead(200, {"Content-Type" : "text/html"});
			res.write(login);
			res.end();
		break;

		case "/html/summer.html":
			res.writeHead(200, {"Content-Type" : "text/html"});
			res.write(summer);
			res.end();
		break;

		case "/html/winter.html":
			res.writeHead(200, {"Content-Type" : "text/html"});
			res.write(winter);
			res.end();
		break;
		
		default:
			res.writeHead(404, {"Content-Type" : "text/plain"});
			res.write("Not found.")
			res.end();
		break;
	}

	}).listen(8080);

	*/
/*
	http.createServer(function(req,res){

	// You should change from URL data to strings with using "parse".
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;

		fs.readFile(filename, function(err,data){
			if(err){
				res.writeHead(404, {"Content-Type" : "text/html"});
				res.end("404 Not found");
			}
			res.writeHead(200, {"Content-Type" : "text/html"});
			res.write(data);
			res.end();
		});
	}).listen(8080);
*/