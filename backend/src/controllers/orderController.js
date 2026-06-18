import Order from '../models/Order.js'

export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod, deliveryAddress } = req.body

    const order = await Order.create({
      userId: req.user.id,
      items,
      totalAmount,
      paymentMethod,
      deliveryAddress,
      status: 'pending',
    })

    res.status(201).json({
      message: 'Order created successfully',
      order,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.user.id },
      order: [['createdAt', 'DESC']],
    })

    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id)

    if (!order || order.userId !== req.user.id) {
      return res.status(404).json({ message: 'Order not found' })
    }

    res.json(order)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body
    const order = await Order.findByPk(req.params.id)

    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    await order.update({ status })

    res.json({
      message: 'Order updated successfully',
      order,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id)

    if (!order || order.userId !== req.user.id) {
      return res.status(404).json({ message: 'Order not found' })
    }

    if (['shipped', 'delivered', 'cancelled'].includes(order.status)) {
      return res.status(400).json({ message: 'Cannot cancel this order' })
    }

    await order.update({ status: 'cancelled' })

    res.json({
      message: 'Order cancelled successfully',
      order,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
