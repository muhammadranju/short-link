const morgan = require("morgan");
const exprss = require("express");

const middlewares = [
    exprss.json(),
    exprss.urlencoded({ extended: true }),
    morgan("dev"),
];

module.exports = middlewares;
