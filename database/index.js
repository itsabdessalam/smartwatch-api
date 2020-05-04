const mongoose = require("mongoose");
const { getDatabaseURL } = require("./helpers");
const { mongodb: config } = require("../config/database");
const env = require("../config/env");

module.exports = {
	async connect() {
		const url = getDatabaseURL(config, "+srv");

		try {
			await mongoose.connect(url, config.options);
			console.log("🚀 Successfully connected to database !");
		} catch (error) {
			console.log(error);
			process.exit(1);
		}
	}
};
