const homeGetContoller = (_req, res) => {
    // return res.status(200).json({ message: "Hello real app" });
    return res.status(200).redirect(`/horney`);
};

module.exports = {
    homeGetContoller,
};
