const jwt = require("jsonwebtoken");
const { jwt: jwtConfig } = require("../config/auth");
const { secret: jwtSecret, tokenHeader } = jwtConfig.options;
const { withAuth } = require("../config/routes");
const { startsWith } = require("../utils/helpers");
const router = require("express").Router();

const auth = (request, response, next) => {
	if (
		request.originalUrl &&
		!withAuth.some(route => startsWith(request.originalUrl, route))
	) {
		next();
		return;
	}

	const token = request.headers[tokenHeader];

	if (!token) {
		return response.status(401).json({
			statusCode: 401,
			error: "Unauthorized",
			message: "Missing authentication."
		});
	}

	jwt.verify(token, jwtSecret, (error, decoded) => {
		if (error) {
			return response.status(401).json({
				statusCode: 401,
				error: "Unauthorized",
				message: "Failed to authenticate token."
			});
		}
		next();
	});
};

module.exports = auth;
