const User = require("../models/User");
const { hashPassword, createToken, decodeToken } = require("../utils/auth");
const userExists = require("../validators/userExists");

module.exports = {
	async register(request, response, next) {
		try {
			const { name, email, password } = request.body;
			const alreadyRegistered = await userExists({ name, email });

			if (alreadyRegistered) {
				return response.status(400).json({
					statusCode: 400,
					error: "Bad request",
					message: "User already exists."
				});
			}

			const user = await new User({
				name,
				email,
				password: hashPassword(password)
			}).save();

			return response.status(201).json({
				statusCode: 201,
				data: {
					token: createToken(user),
					user: user.toObject()
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
	async login(request, response, next) {}
};
