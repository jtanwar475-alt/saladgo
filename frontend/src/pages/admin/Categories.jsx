import React, { useState } from 'react'
import { Plus, Edit, Trash2 } from 'lucide-react'

export default function AdminCategories() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Vegetables', slug: 'vegetables', products: 24, status: 'active' },
    { id: 2, name: 'Fruits', slug: 'fruits', products: 18, status: 'active' },
    { id: 3, name: 'Salads', slug: 'salads', products: 12, status: 'active' },
    { id: 4, name: 'Juices', slug: 'juices', products: 8, status: 'active' },
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', slug: '' })

  const handleAdd = () => {
    if (formData.name && formData.slug) {
      setCategories([...categories, {
        id: categories.length + 1,
        ...formData,
        products: 0,
        status: 'active'
      }])
      setFormData({ name: '', slug: '' })
      setShowAddForm(false)
    }
  }

  const handleDelete = (id) => {
    setCategories(categories.filter(c => c.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Category Management</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} /> Add Category
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-500">
          <h3 className="text-lg font-bold mb-4">Add New Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Category Name"
              className="input-field"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Slug (URL friendly)"
              className="input-field"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button onClick={handleAdd} className="btn-primary">Save Category</button>
            <button onClick={() => setShowAddForm(false)} className="btn-outline">Cancel</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{category.products} products</p>
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-200 transition">
                <Edit size={16} className="inline mr-2" /> Edit
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className="flex-1 px-3 py-2 bg-red-100 text-red-600 rounded-lg text-sm font-semibold hover:bg-red-200 transition"
              >
                <Trash2 size={16} className="inline mr-2" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
