const router = require("express").Router();
const AuthController = require("../../controllers/AuthController");
const validatePayload = require("../../middleware/validatePayload");

router.route("/login").post(validatePayload("login"), AuthController.login);
router
	.route("/register")
	.post(validatePayload("register"), AuthController.register);

module.exports = router;