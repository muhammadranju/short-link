const router = require("express").Router();
const controller = require("../../controller/linksController/linksController.js");

router.get(`/horney/:query_parameters`, controller.liveGetURLController);

router.get(`/horney`, controller.liveGetController);

module.exports = router;
