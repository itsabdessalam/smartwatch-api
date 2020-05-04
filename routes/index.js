const router = require("express").Router();
const { prefix } = require("../config/app");

router.use(prefix, require("./api"));
module.exports = router;
