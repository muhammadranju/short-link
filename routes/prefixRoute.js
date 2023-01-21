const router = require("express").Router();

router.use(require("./linksRoutes/linksRoutes.js"));
router.use(require("./homeRoutes/homeRoutes.js"));

module.exports = router;
