const router = require("express").Router();
const homeContoller = require("../../controller/homeController/homeController.js");

router.get("*", homeContoller.homeGetContoller);

module.exports = router;
