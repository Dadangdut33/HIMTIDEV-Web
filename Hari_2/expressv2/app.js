const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const rpcRouter = require("./routes/api/v1/rpc");
const restRouter = require("./routes/api/v1/rest");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev")); // log to console
app.use(express.json()); // https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // parse cookies
app.use(express.static(path.join(__dirname, "public"))); // serve static

function checkRequest(req, res, next) {
	console.log("> Body:");
	console.log(req.body); // masuknya kesini kalo dia post
	console.log("> Params:");
	console.log(req.params); // masuknya kesini kalo dia :var
	console.log("> Query:");
	console.log(req.query); // masuknya ke sini GET

	next();
}

app.use(checkRequest);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1/rpc", rpcRouter);
app.use("/api/v1/rest", restRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
