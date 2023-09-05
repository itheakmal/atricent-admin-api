const orderService = require("../Services/OrderService")

/**
 * Get all orders
 * @returns {Promise<Orders[]>} - All orders
 */
const getOrders = async (req, res) => {
  try {
    const orders = await orderService.getOrders()
    // console.log('orders', orders)
    return res.json(orders)

  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

const updateOrder = async (req, res) => {
  try {
    console.log('req.body', req.body)
    const orders = await orderService.updateOrder(req.body)
    // console.log('orders', orders)
    return res.json(orders)

  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

const orderDetails = async (req, res) => {
  try {
    // console.log('req.params.order',req.params.order)
    const orderDetail = await orderService.orderDetail(req.params.order)
    // console.log('orderDetail', orderDetail)
    return res.json(orderDetail)

  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};


module.exports = {
  getOrders,
  updateOrder,
  orderDetails
}