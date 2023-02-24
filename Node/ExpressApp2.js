// http://localhost:3000/

// 01. Import Express ~ Display hello.ejs
	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/"
	// 4. Create server with using "app.listen(3000);".
//	const express = require("express");
//	const app = express();
//
//	app.get("/", (req,res) => {
//		res.render("hello.ejs");
//	});
//
//	app.listen(3000);


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
	// 3. [New] : Routing "/" and "/top".
//	const express = require("express");
//	const app = express();
//
//	// root URL
//	app.get("/", (req,res) => {
//		res.render("hello.ejs");
//	});
//
//	app.get("/top", (req,res) => {
//		res.render("top.ejs");
//	});
//
//	app.listen(3000);

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
//	const express = require("express");
//	const app = express();
//
//	app.get("/", (req,res) => {
//		res.render("hello.ejs");
//	});
//
//	app.get("/top", (req,res) => {
//		res.render("top.ejs");
//	});
//
//	app.use( express.static("public"));
//
//	app.listen(3000);
//
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
//	const express = require("express");
//	const app = express();
//
//	app.get("/", (req,res) => {
//		res.render("hello.ejs");
//	});
//
//	app.get("/top", (req,res) => {
//		res.render("top.ejs");
//	});
//
//	app.use( express.static("public"));
//
//	app.listen(3000);

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



// 04. EJS : hello.ejsの04のところにconst greeting = hello; を定義し、console.logに表示させる
	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/" and "/top".
	// 4. Routing "public" directory.
	// You can use "style.css" by reading public folder.
	// 5. Add the index.ejs.
	// 6. [New] : Display "hello" on your console.
//	const express = require("express");
//	// Initialize
//	const app = express();
//
//	// root URL
//	app.get("/", (req,res) => {
//		res.render("hello.ejs");
//	});
//
//	app.get("/top", (req,res) => {
//		res.render("top.ejs");
//	});
//
//	app.use( express.static("public"));
//
//	app.listen(3000);

// 05. Create elements of list with using forEach().
	// 1. Import Express 
	// 2. Initialize Express
	// 3. Routing "/" and "/top".
	// 4. Routing "public" directory.
	// You can use "style.css" by reading public folder.
	// 5. Add the index.ejs.
	// 6. Display "hello" on your console.
	// 7. [New] : At the "index.ejs", add the code for displaying element of list.
	const express = require("express");
	const app = express();
	const axios = require("axios");

	const url = "https://jsonplaceholder.typicode.com/users";

	app.get("/", (req,res) => {
		res.render("hello.ejs");
	});

	app.get("/top", (req,res) => {
		res.render("top.ejs");
	});

	app.get("/index", (req,res) => {
		res.render("index.ejs");

	});

	app.use( express.static("public"));

	app.listen(3000);

	/* Sample
        <% const items = [
			{id: 1, name: 'potatoes'},
			{id: 2, name: 'carrots'},
			{id: 3, name: 'onions'}
        ]; %>
    */

	/* Sample
			<% items.forEach((item) => { %>
            <li>
				<span class="id-column"><%= item.id %></span>
				<span class="name-column"><%= item.name %></span>
            </li>
			<% }); %>
		-->
	*/

// 06.  

	// 1. Import Express 
	// 2. Initialize Express
	// 3. [New] : Routing "/" for "top.ejs".
	// 4. Routing "public" directory.
	// 5. Add the index.ejs.



