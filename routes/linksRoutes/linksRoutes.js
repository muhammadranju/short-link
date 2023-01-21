const router = require("express").Router();
const controller = require("../../controller/linksController/linksController.js");

router.get(`/demo/:query_parameters`, controller.demoGetURlController);

router.get(`/horney/:query_parameters`, controller.liveGetURLController);

router.get(`/horney`, controller.liveGetController);

router.get(`/demo`, controller.demoGetController);

module.exports = router;
