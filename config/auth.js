const defaultsTo = require("defaults-to");
const env = require("./env");

module.exports = {
	jwt: {
		options: {
			secret: defaultsTo(env.JWT_SECRET, ""),
			expiresIn: defaultsTo(env.JWT_EXPIRATION, 900000),
			tokenHeader: defaultsTo(env.JWT_TOKEN_HEADER, "token")
		}
	}
};
