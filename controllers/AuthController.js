const User = require("../models/User");
const {
	hashPassword,
	verifyPassword,
	createToken,
	decodeToken
} = require("../utils/auth");
const userExists = require("../validators/userExists");
const { normalizeUserFields } = require("../utils/normalizer");

module.exports = {
	async register(request, response, next) {
		try {
			const { name, email, password } = request.body;
			const alreadyRegistered = await userExists({ name, email });

			if (alreadyRegistered) {
				return response.status(400).json({
					statusCode: 400,
					error: "Bad request",
					message: "User already exists"
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
	async login(request, response, next) {
		try {
			const { email, password } = request.body;
			const user = await User.findOne({ email, status: "active" });

			if (!user) {
				return response.status(401).json({
					statusCode: 401,
					error: "Unauthorized",
					message: "Invalid credentials"
				});
			}

			const isValidPassword = verifyPassword(password, user.password);

			if (!isValidPassword) {
				return response.status(401).json({
					statusCode: 401,
					error: "Unauthorized",
					message: "Invalid credentials"
				});
			}

			user.lastTimeConnectedAt = new Date().toString();

			await user.save();

			return response.status(200).json({
				statusCode: 200,
				data: {
					token: createToken(user),
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
	async ping(request, response, next) {
		return response.status(200).json({
			statusCode: 200,
			data: {},
			message: ""
		});
	}
};
