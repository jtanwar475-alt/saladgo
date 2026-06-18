import React from 'react'
import { Trash2, Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Cart() {
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: 'Fresh Tomatoes', price: 149, qty: 2 },
    { id: 2, name: 'Crispy Lettuce', price: 99, qty: 1 },
  ])

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max section-padding">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 pb-4 border-b">
                    <div className="bg-gray-200 w-20 h-20 rounded-lg flex items-center justify-center text-2xl">
                      🥬
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">₹{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Minus size={18} />
                      </button>
                      <span className="w-8 text-center">{item.qty}</span>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Plus size={18} />
                      </button>
                    </div>
                    <button className="text-red-600 p-1">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center py-8">Your cart is empty</p>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6 pb-6 border-b">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="font-semibold">₹50</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span className="font-semibold">₹{Math.round(total * 0.05)}</span>
              </div>
            </div>
            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total</span>
              <span className="text-green-600">₹{total + 50 + Math.round(total * 0.05)}</span>
            </div>
            <Link to="/checkout" className="btn-primary w-full block text-center">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
