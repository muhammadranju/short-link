require("dotenv").config();
const exprss = require("express");
const app = exprss();

const middlewares = require("./middlewares.js");

app.use(middlewares);
app.use(require("../routes/prefixRoute.js"));

module.exports = app;
