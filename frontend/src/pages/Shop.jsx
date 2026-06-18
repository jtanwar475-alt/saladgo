import React, { useState } from 'react'
import { Search, Sliders } from 'lucide-react'

export default function Shop() {
  const [filters, setFilters] = useState({ category: '', priceRange: [0, 500] })
  const [searchTerm, setSearchTerm] = useState('')

  const products = [
    { id: 1, name: 'Fresh Tomatoes', price: 149, category: 'Vegetables' },
    { id: 2, name: 'Crispy Lettuce', price: 99, category: 'Vegetables' },
    { id: 3, name: 'Sweet Apples', price: 199, category: 'Fruits' },
    { id: 4, name: 'Banana Bunch', price: 79, category: 'Fruits' },
    { id: 5, name: 'Mixed Salad', price: 249, category: 'Salads' },
    { id: 6, name: 'Fresh Juice', price: 159, category: 'Juices' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-max section-padding">
        <h1 className="text-4xl font-bold mb-8">Shop</h1>

        {/* Search & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="md:col-span-3">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                className="input-field pl-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <button className="btn-secondary flex items-center justify-center gap-2">
            <Sliders size={20} /> Filters
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="card-product">
              <div className="bg-gradient-to-br from-green-100 to-orange-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl">🥬</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.category}</p>
              <p className="text-orange-600 font-bold text-lg mb-4">₹{product.price}</p>
              <button className="btn-primary w-full">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
