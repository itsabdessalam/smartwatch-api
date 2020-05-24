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
    if (!order) {
      return {};
    }

    const target = {};

    target.id = order._id;
    target.status = order.status;
    target.products = order.products;
    target.total = order.products.reduce(
      (accumulator, next) => accumulator + next.quantity * next.amount,
      0,
    );
    target.user = order.user;
    target.address = order.address;
    target.createdAt = order.createdAt;
    target.updatedAt = order.updatedAt;

    return target;
  },
};
