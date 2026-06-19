import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Star, Heart, Share2, Minus, Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { productService } from '../services/api'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [reviews, setReviews] = useState([])
  const { addToCart } = useCart()
  const { addToast } = useToast()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productService.getProductById(id)
        setProduct(response.data)
        setLoading(false)
      } catch (error) {
        addToast('Failed to load product', 'error')
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    addToCart(product, quantity)
    addToast(`${product.name} added to cart!`, 'success')
    setQuantity(1)
  }

  if (loading) {
    return (
      <div className="container-max section-padding">
        <div className="animate-pulse space-y-4">
          <div className="bg-gray-200 h-96 rounded-lg"></div>
          <div className="bg-gray-200 h-8 rounded"></div>
          <div className="bg-gray-200 h-20 rounded"></div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container-max section-padding text-center">
        <p className="text-gray-600">Product not found</p>
      </div>
    )
  }

  return (
    <div className="container-max section-padding">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
          {product.image ? (
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={`https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.round(product.rating) ? 'fill-orange-500 text-orange-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.rating} rating)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-green-600">₹{product.price}</span>
              {product.discountPrice && (
                <span className="text-lg text-gray-500 line-through">₹{product.discountPrice}</span>
              )}
            </div>
            {product.stock > 0 && (
              <span className="badge badge-success">In Stock ({product.stock} left)</span>
            )}
          </div>

          <p className="text-gray-700 text-lg">{product.description}</p>

          <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
            <div>
              <p className="text-gray-600 text-sm">Unit</p>
              <p className="font-semibold">{product.unit}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Weight</p>
              <p className="font-semibold">{product.weight} {product.unit}</p>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus size={20} />
                </button>
                <span className="px-6 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="btn-primary w-full"
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="flex-1 border-2 border-green-600 text-green-600 py-3 rounded-lg hover:bg-green-50 transition flex items-center justify-center gap-2">
              <Heart size={20} /> Wishlist
            </button>
            <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
              <Share2 size={20} /> Share
            </button>
          </div>
        </div>
      </motion.div>

      {/* Reviews Section */}
      <div className="mt-20 pt-12 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.length === 0 ? (
            <p className="text-gray-600">No reviews yet. Be the first to review!</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="card">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < review.rating ? 'fill-orange-500 text-orange-500' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))
          )}
        </div>

        {/* Add Review Form */}
        <div className="mt-8 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Write a Review</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Rating</label>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className="p-1"
                  >
                    <Star size={24} className="text-gray-300 hover:text-orange-500 transition" />
                  </button>
                ))}
              </div>
            </div>
            <textarea
              placeholder="Share your thoughts about this product..."
              className="input-field h-24"
            />
            <button type="submit" className="btn-primary">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
