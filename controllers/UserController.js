const User = require("../models/User");
const Order = require("../models/Order");

const { normalizeUserFields } = require("../utils/normalizer");

module.exports = {
	async getAllUsers(request, response, next) {
		try {
			let users = await User.find({})
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
			const { id } = request.params;
			const user = await User.findOne({
				_id: id,
				status: "active"
			}).populate({ path: "orders", model: Order });

			return response.status(200).json({
				statusCode: 200,
				data: {
					user: normalizeUserFields(user)
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
	async getUserOrdersByID(request, response, next) {
		try {
			const { id } = request.params;

			const orders = await Order.find({ user: id });

			return response.status(200).json({
				statusCode: 200,
				data: {
					orders
				},
				message: ""
			});
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
