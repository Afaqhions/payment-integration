const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Define the payment route
router.post("/payment/",paymentController)


module.exports = router;