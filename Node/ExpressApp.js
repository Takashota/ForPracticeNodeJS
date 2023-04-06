// http://localhost:3000/

// 01. Import Express ~ Display hello.ejs
	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/" for displaying "hello.ejs".
	// 4. Create server with using "app.listen(3000);".

	/* Sample

	const express = require("express");
	const app = express();

	// Routing
	// root URL
	app.get("/", (req,res) => {
		// 表示したいejsファイルを指定する
		res.render("hello.ejs");

	});

	app.listen(3000);

	*/






// 02. Create route top.ejs

	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/" for displaying "hello.ejs".
	// 4. Create server with using "app.listen(3000);".
	// 3. [New] : Routing "/top" for displaying "top.ejs".

	/* Sample

	const express = require("express");
	const app = express();

	// Route
	app.get("/", (req,res) => {
		// 表示したいejs
		res.render("hello.ejs");
	});

	// Top.ejs
	app.get("/Top", (req,res) => {
		// Top.ejs
		res.render("Top.ejs");
	});

	// Activate server
	app.listen(3000);

	*/





// 02. Import a specified folder & applying css.

	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/" and "/top".
	// [New] : 4. Routing "public" directory.
	// You can use "style.css" by reading public folder.

	/* Sample 

	const express = require("express");
	const app = express();

	app.get("/", (req,res) => {
		res.render("hello.ejs");
	});

	app.get("/top", (req,res) => {
		res.render("top.ejs");
	});

	app.use(express.static("public"));

	app.listen(3000);
	*/






// 03. Add the index.ejs

	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/" and "/top".
	// 4. Routing "public" directory.
	// You can use "style.css" by reading public folder.
	// [New] : 5. Add the index.ejs.

	/* Sample

	const express = require("express");
	const app = express();

	app.get("/", (req,res) => {
		res.render("hello.ejs");
	});
	
	app.get("/top", (req,res) => {
		res.render("top.ejs");
	});

	app.get("/index", (req,res) => {
		res.render("index.ejs");
	});

	app.use(express.static("public"));

	app.listen(3000);

	*/



// 04. EJS : Add the 2 codes bellow on the "hello.ejs" with using EJS.
	
	//Code 1: const greeting = hello;
	//Code 2: console.log(greeting);

	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/" and "/top".
	// 4. Routing "public" directory.
	// You can use "style.css" by reading public folder.
	// 5. Add the index.ejs.
	// 6. [New] : Display "hello" on your console.

	/* Sample "hello.ejs"
		<% const greeting = "hello"; %>
		<% console.log(greeting); %>
	*/

// 05. Create elements of list with using forEach().
	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/" and "/top".
	// 4. Routing "public" directory.
	// You can use "style.css" by reading public folder.
	// 5. Add the index.ejs.
	// 6. Display "hello" on your console.
	// 7. [New] : At the "index.ejs", add the code for displaying element of list.

// 06.  

	// 1. Import Express 
	// 2. Initialize Express
	// 3. [New] : Routing "/" for "top.ejs".
	// 4. Routing "public" directory.
	// 5. Add the index.ejs.

// 07.

	// 1. Import modules
		// express
		// mysql
	// 2. Create rooting with express.
	// 3. Read CSS files with use method.
	// 4. Create a server.
	// 5. Connect to Database.
	const express = require("express");
	const app = express();
	const mysql = require("mysql");
	const bodyParser = require("body-parser");

	app.get("/", (req,res) => {
		res.render("index.ejs");
	});

	app.get("/top", (req,res) => {
		res.render("top.ejs");
	});

	app.get("/index", (req,res) => {
		res.render("index.ejs");
	});

	app.get("/display", (req,res) => {
		res.render("success.ejs");
	});

	app.use(express.static("public"));

	app.use(bodyParser.urlencoded({ extended : true}));
	// req.body オブジェクトをjsonに変換
	app.use(bodyParser.json());

	// DB	
	const con = mysql.createConnection({
		//host
		host : "localhost",
		//user
		user : "root",
		//password
		password : "root",
		database : "express_db"
	});

	con.connect(function(err) {
		if (err) throw err;
		console.log('Connected');

		//const sql = 'ALTER TABLE users ADD test VARCHAR(20) NULL';
		//con.query(sql, function (err, result) {  
		//if (err) throw err;  
		//console.log('Inserted a new column.');  
		//});
	});	


	app.post("/display", (req,res) => {
		console.log("Hi client.");

		const sql = 'ALTER TABLE users ADD test4 VARCHAR(20) NULL';
		con.query(sql, function (err, result) {  
			if (err) throw err;  
			console.log('Inserted a new column.');  
			res.render("success.ejs");
		});
	});

	app.post("/delete", (req,res) => {
		console.log("I'll delete a column.");
		console.log(req.method, req.url, req.ip);
		//const sql_deleteColumn = "ALTER TABLE users DROP COLUMN test2;";
		//con.query(sql_deleteColumn, (err,result) => {
		//	if(err) throw err;
		//	console.log("Deleted a test2 column.");
		//});

	});

	app.listen(3000);
