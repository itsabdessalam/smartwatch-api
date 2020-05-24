const router = require('express').Router();
const OrderController = require('../../controllers/OrderController');

router.route('/').post(OrderController.createOrder);

module.exports = router;
