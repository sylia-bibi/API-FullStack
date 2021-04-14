const express = require("express");
const router = express.Router();
const orders = require('../controllers/orders.controller');

router.post('/order',orders.createOrder);
router.get('/orders', orders.getOrders);
router.get('/order/:id',orders.getOneOrder);
router.get('/ordersuser/:id',orders.getOrderForUser);
router.delete('/deleteorder/:id', orders.deleteOrder);

module.exports = router;
