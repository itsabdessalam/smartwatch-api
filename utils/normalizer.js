module.exports = {
	normalizeUserFields(user) {
		if (!user) {
			return {};
		}

		const target = {};

		target.status = user.status;
		target.orders = user.orders;
		target.id = user._id;
		target.name = user.name;
		target.email = user.email;
		target.createdAt = user.createdAt;
		target.updatedAt = user.updatedAt;
		target.lastTimeConnectedAt = user.lastTimeConnectedAt;

		return target;
	},
	normalizeOrderFields(order) {
		return order;
	}
};
