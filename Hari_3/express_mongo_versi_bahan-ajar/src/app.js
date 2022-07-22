const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/render/index");
const reqRouter = require("./routes/render/req");
const sessionRouter = require("./routes/render/session");
const protectedRouter = require("./routes/render/protected");
const authRouter = require("./routes/api/v1/auth");
const userRouter = require("./routes/api/v1/user");
const rpcRouter = require("./routes/api/v1/rpc");
const restRouter = require("./routes/api/v1/rest");
const MongoStore = require("connect-mongo");

const app = express();
// load environment variables from .env file
require("dotenv").config();
const ttl = 24 * 60 * 60 * 1000; // 1 day (HOUR * MINUTE * SECOND * MILLISECOND)
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		cookie: { maxAge: ttl, secure: process.env.NODE_ENV === "production" },
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({
			mongoUrl: process.env.MONGODB_URI,
			collectionName: "sessions",
			ttl: ttl,
		}),
	})
);

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(logger("dev")); // log to console
app.use(express.json()); // https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // parse cookies
app.use(express.static(path.join(__dirname, "../public"))); // serve static

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
app.use("/req", reqRouter);
app.use("/session", sessionRouter);
app.use("/protected", protectedRouter);
app.use("/api/v1/rpc", rpcRouter);
app.use("/api/v1/rest", restRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

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
