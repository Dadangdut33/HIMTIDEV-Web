const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/a", (req, res) => {
	res.send("<h3>Hello World! 1</h3> Nama aku dino");
});

app.get("/a", (req, res) => {
	res.send("nama aku dino");
});

app.get("/render", (req, res) => {
	res.render("index", { message: null });
});

// REQUEST
// app.get("/", (req, res) => {
// 	console.log("GET");
// 	res.send("Hello World!");
// });

// app.post("/", (req, res) => {
// 	console.log("POST");
// 	res.send("Got a POST request");
// });

// app.put("/", (req, res) => {
// 	console.log("PUT");
// 	res.send("Got a PUT request at /");
// });

// app.delete("/", (req, res) => {
// 	console.log("DELETE");
// 	res.send("Got a DELETE request at /");
// });

// start server
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
