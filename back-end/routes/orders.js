
const express = require('express')
const { createOrder, getOrderList } = require('../controllers/ordersControllers')
const fetchuser = require('../middlewares/featchUser')
const router =express.Router()

router.post("/createorder",fetchuser,createOrder);

router.get("/orderlist",fetchuser,getOrderList);

module.exports=router;