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
		street: String,
		number: Number,
		city: {
			type: String,
			required: true
		},
		zipCode: {
			type: String,
			required: true
		}
	},
	lastTimeConnectedAt: {
		type: Date,
		default: Date.now
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
