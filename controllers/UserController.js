const User = require("../models/User");
const { normalizeUserFields } = require("../utils/normalizer");

module.exports = {
	async getAllUsers(request, response, next) {
		try {
			let users = await User.find({})
				.populate("orders")
				.where("status")
				.equals("active")
				.exec();

			if (users.length) {
				users = users.map(user => normalizeUserFields(user));
			}

			return response.status(200).json({
				statusCode: 200,
				data: {
					users
				},
				message: ""
			});
		} catch (error) {
			return response.status(500).json({
				statusCode: 500,
				error: "Internal error",
				message: error.message
			});
		}
	},
	async getUserByID(request, response, next) {
		try {
		} catch (error) {}
	},
	async updateUserByID(request, response, next) {
		try {
		} catch (error) {}
	},
	async deleteUserByID(request, response, next) {
		try {
		} catch (error) {}
	}
};
