const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { jwt: jwtConfig } = require("../config/auth");
const { secret: jwtSecret, expiresIn } = jwtConfig.options;

module.exports = {
	createToken(user, reset = false) {
		const { _id: id, name, email } = user;

		return jwt.sign({ id, name, email, reset }, jwtSecret, {
			algorithm: "HS256",
			expiresIn
		});
	},
	decodeToken(token) {
		try {
			return jwt.verify(token, jwtSecret);
		} catch (error) {
			return {};
		}
	},
	hashPassword(password) {
		const salt = bcrypt.genSaltSync(10);
		return bcrypt.hashSync(password, salt);
	},
	verifyPassword(password, hash) {
		return bcrypt.compareSync(password, hash);
	}
};
