const os = require("os");
const baseURL = `https://thebestdate.life/?u=568k60a&o=g1bpe97&t=`;

const liveGetURLController = (req, res) => {
    try {
        const urlLink = baseURL + req.params.query_parameters;
        // res.redirect(link);
        return res.status(200).send(`<h1>${urlLink}</h1>`);
    } catch (error) {
        console.log(error);
    }
};
const liveGetController = (req, res) => {
    console.log(req.hostname);
    return res.status(200).send(`<h1>Hello Bor...!</h1>
    <p>Your URL is <strong>${
        req.originalUrl
    }</strong>,Now you type your url end of <strong>(${
        req.hostname + req.originalUrl
    })</strong>/</p>
    `);
};

module.exports = {
    liveGetURLController,
    liveGetController,
};
