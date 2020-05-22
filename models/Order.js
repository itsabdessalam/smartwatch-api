const mongoose = require("mongoose");
module.exports = mongoose.model("Order", {
	products: {
		type: Array,
		default: []
	},
	status: {
		type: String,
		enum: [
			"pending",
			"failed",
			"canceled",
			"on_hold",
			"completed",
			"refunded"
		],
		default: "pending"
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	address: {
		line1: String,
		line2: String,
		country: String,
		city: String,
		postalCode: String
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
});
