require("dotenv").config();
const exprss = require("express");
const morgan = require("morgan");
const app = exprss();
const PORT = process.env.PORT || 5400;
const middlewares = [morgan("dev")];

app.use(middlewares);

app.get("/", (req, res) => {
    res.redirect("https://google.com/muhammadranju");
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}}`);
});
