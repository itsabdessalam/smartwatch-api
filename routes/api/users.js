const router = require("express").Router();
const UserController = require("../../controllers/UserController");

router.route("/").get(UserController.getAllUsers);

// router
// 	.route("/:id")
// 	.get(UserController.getUserByID)
// 	.put(UserController.updateUserByID)
// 	.delete(UserController.deleteUserByID);

module.exports = router;
