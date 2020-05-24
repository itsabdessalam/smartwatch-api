const router = require("express").Router();
const OrderController = require("../../controllers/OrderController");
const validatePayload = require("../../middleware/validatePayload");

router
	.route("/")
	.post(validatePayload("createOrder"), OrderController.createOrder);

module.exports = router;
