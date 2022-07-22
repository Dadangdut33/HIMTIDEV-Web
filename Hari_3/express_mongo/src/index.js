/**
 * Module dependencies.
 */

const app = require("./app");
const debug = require("debug")("expressv2:server");
const http = require("http");
const mongoose = require("mongoose");

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || "4000");
app.set("port", port);

/**
 * Create HTTP server.
 */
// diff https://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen
const server = http.createServer(app);

/**
 * Connect mongodb and start server.
 */
async function start() {
	console.log("Connecting to mongodb...");
	await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});
	console.log("Connected to mongodb");

	server.listen(port);
	server.on("error", onError);
	server.on("listening", onListening);
}

start();

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== "listen") {
		throw error;
	}

	const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	const addr = server.address();
	const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
	debug("Listening on " + bind);
	console.log("Listening on " + bind);
}
