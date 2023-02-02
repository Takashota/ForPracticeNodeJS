// http://localhost:3000/

// 01. Import Express ~ Display hello.ejs
	
	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/".

	/* Sample

	const express = require("express");
	const app = express();

	// Routing
	app.get("/", (req,res) => {
		// 表示したいejsファイルを指定する
		res.render("hello.ejs");

	});

	app.listen(3000);

	*/






// 02. Create route top.ejs

	// 1. Import Express 
	// 2. Initialize Express
	// 3. NEW: Routing "/" and "/top".

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





// 2. Import a specified folder & applying css.

	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/" and "/top".
	// NEW: 4. Routing "public" directory.
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






// 3. Add the index.ejs

	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/" and "/top".
	// 4. Routing "public" directory.
	// You can use "style.css" by reading public folder.
	// NEW: 5. Add the index.ejs.

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





// 04. Add the row of the list that has ID: 4 and name: tomato.

	// EJS : 
		// index.ejs
		/*

		1.
		<!-- Use EJS to define the item constant -->
		<% const item = {id: 4, name: 'tomatoes'}; %>

		2.
		<!-- Display the id property of item -->
		<%= item.id %>

		3.
		<!-- Display the name property of item -->
		<%= item.name %>

		*/

// 05. 

	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/" and "/top".
	// 4. Routing "public" directory.
	// 5. Add the index.ejs.



