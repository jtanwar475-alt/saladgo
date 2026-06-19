import React, { useState } from 'react'
import { Search, Sliders } from 'lucide-react'

export default function Shop() {
  const [filters, setFilters] = useState({ category: '', priceRange: [0, 500] })
  const [searchTerm, setSearchTerm] = useState('')

  const products = [
    { id: 1, name: 'Fresh Tomatoes', price: 149, category: 'Vegetables', img: 'https://images.unsplash.com/photo-1568695041386-6e725ebd4b78?w=300&h=300&fit=crop' },
    { id: 2, name: 'Crispy Lettuce', price: 99, category: 'Vegetables', img: 'https://images.unsplash.com/photo-1599599810694-2202a3c0b2f7?w=300&h=300&fit=crop' },
    { id: 3, name: 'Sweet Apples', price: 199, category: 'Fruits', img: 'https://images.unsplash.com/photo-1585518419395-fc97c02c4e27?w=300&h=300&fit=crop' },
    { id: 4, name: 'Banana Bunch', price: 79, category: 'Fruits', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=300&fit=crop' },
    { id: 5, name: 'Mixed Salad', price: 249, category: 'Salads', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop' },
    { id: 6, name: 'Fresh Juice', price: 159, category: 'Juices', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
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
              <div className="h-48 rounded-lg mb-4 overflow-hidden bg-gray-100">
                <img 
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
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
