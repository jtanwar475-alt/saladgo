import React, { useState } from 'react'
import { Plus, Edit, Trash2, Search } from 'lucide-react'

export default function AdminProducts() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Fresh Tomatoes', category: 'Vegetables', price: 149, stock: 150, status: 'active' },
    { id: 2, name: 'Organic Lettuce', category: 'Vegetables', price: 89, stock: 200, status: 'active' },
    { id: 3, name: 'Sweet Apples', category: 'Fruits', price: 199, stock: 80, status: 'active' },
    { id: 4, name: 'Banana Bunch', category: 'Fruits', price: 79, stock: 120, status: 'active' },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', category: '', price: '', stock: '' })

  const handleAddProduct = () => {
    if (formData.name && formData.category && formData.price && formData.stock) {
      setProducts([...products, {
        id: products.length + 1,
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        status: 'active'
      }])
      setFormData({ name: '', category: '', price: '', stock: '' })
      setShowAddForm(false)
    }
  }

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id))
  }

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} /> Add Product
        </button>
      </div>

      {/* Search */}
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

      {/* Add Form */}
      {showAddForm && (
        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-500">
          <h3 className="text-lg font-bold mb-4">Add New Product</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              className="input-field"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              className="input-field"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              className="input-field"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
            <input
              type="number"
              placeholder="Stock"
              className="input-field"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button onClick={handleAddProduct} className="btn-primary">Save Product</button>
            <button onClick={() => setShowAddForm(false)} className="btn-outline">Cancel</button>
          </div>
        </div>
      )}

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Product Name</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Category</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Price</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Stock</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Status</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="py-4 px-6 font-medium text-gray-900">{product.name}</td>
                <td className="py-4 px-6 text-gray-600">{product.category}</td>
                <td className="py-4 px-6 font-semibold text-green-600">₹{product.price}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.stock > 50 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.stock} units
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    {product.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition">
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
