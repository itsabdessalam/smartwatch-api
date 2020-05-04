const mongoose = require("mongoose");
module.exports = mongoose.model("User", {
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	password: {
		type: String,
		required: true
	},
	status: {
		type: String,
		enum: ["active", "inactive", "disabled", "locked", "expired"],
		default: "active"
	},
	orders: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Order"
		}
	],
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	lastTimeConnectedAt: {
		type: Date,
		default: Date.now
	},
	resetRequestedAt: {
		type: Date
	}
});
