require("dotenv").config();
const exprss = require("express");
const morgan = require("morgan");
const app = exprss();
const PORT = process.env.PORT || 5400;
const middlewares = [morgan("dev")];

app.use(middlewares);
const urlLinks = (req, res, next) => {
    try {
        console.log(req.params);
        return next();
    } catch (error) {
        console.log(error);
    }
};
const names = "name";

app.get(`/links/:id`, (req, res) => {
    const link = `https://thebestdate.life/?u=568k60a&o=g1bpe97&t=${req.params.id}`;

    console.log(link);
    // res.redirect(link);
    // res.redirect(`https://google.com?t=${req.params.id}`);
    res.send(link);
});
app.get(`/links`, (req, res) => {
    res.redirect(`/`);
});
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello real app" });
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}}`);
});
