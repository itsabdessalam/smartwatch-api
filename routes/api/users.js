const router = require("express").Router();
const UserController = require("../../controllers/UserController");

router.route("/").get(UserController.getAllUsers);
router.route("/:id([0-9a-fA-F]{24})").get(UserController.getUserByID);
router
	.route("/:id([0-9a-fA-F]{24})/orders")
	.get(UserController.getUserOrdersByID);

module.exports = router;
