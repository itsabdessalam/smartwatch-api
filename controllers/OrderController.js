const User = require('../models/User');
const Order = require('../models/Order');

module.exports = {
  async createOrder(request, response, next) {
    try {
      const { user: id, products, address } = request.body;
      const user = await User.findOne({
        _id: id,
        status: 'active',
      });

      if (!user || !products) {
        return response.status(400).json({
          statusCode: 400,
          error: 'Bad request',
          message: 'Invalid payload',
        });
      }

      const order = await new Order({
        user: user._id,
        address,
        products,
      }).save();

      user.orders.push(order._id);

      await user.save();

      return response.status(201).json({
        statusCode: 201,
        data: {
          user,
        },
        message: '',
      });
    } catch (error) {
      return response.status(500).json({
        statusCode: 500,
        error: 'Internal error',
        message: error.message,
      });
    }
  },
  async getAllOrders(request, response, next) {
    try {
    } catch (error) {}
  },
  async getOrderByID(request, response, next) {
    try {
    } catch (error) {}
  },
  async updateOrderByID(request, response, next) {
    try {
    } catch (error) {}
  },
  async deleteOrderByID(request, response, next) {
    try {
    } catch (error) {}
  },
};
