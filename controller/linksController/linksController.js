const baseURL = `https://thebestdate.life/?u=568k60a&o=g1bpe97&t=`;
const demoGetURlController = (req, res) => {
    try {
        const demo = baseURL + req.params.query_parameters;
        return res.status(200).send(demo);
    } catch (error) {
        console.log(error);
    }
};

const liveGetURLController = (req, res) => {
    try {
        const urlLink = baseURL + req.params.query_parameters;
        // res.redirect(link);
        return res.status(200).send(`<h1>${urlLink}</h1>`);
    } catch (error) {
        console.log(error);
    }
};
const liveGetController = (_req, res) => {
    // return res.status(200).send("Hello demo");
    return res.status(200).redirect(`/demo`);
};
const demoGetController = (_req, res) => {
    // return res.status(200).redirect(`/demo`);
    return res.status(200).send(`Hello from `);
};

module.exports = {
    demoGetURlController,
    liveGetURLController,
    liveGetController,
    demoGetController,
};
