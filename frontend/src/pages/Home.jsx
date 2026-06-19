import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Leaf, Zap, Truck, Star, ArrowRight } from 'lucide-react'

export default function Home() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-green-50 to-orange-50 py-20 md:py-32">
        <div className="container-max">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariant}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-green-600">Fresh</span> &
                <br />
                <span className="text-orange-500">Healthy</span> Food
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Premium cut vegetables, fruits, salads, juices, and smoothies delivered fresh to your doorstep.
              </p>
              <div className="flex gap-4">
                <Link to="/shop" className="btn-primary">
                  Shop Now <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/about" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div variants={itemVariant} className="rounded-2xl h-96 overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop"
                alt="Fresh Farm Quality"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding">
        <div className="container-max">
          <motion.h2 className="text-4xl font-bold text-center mb-12">
            Our Categories
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Cut Vegetables', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop' },
              { name: 'Fresh Fruits', img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop' },
              { name: 'Salads', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop' },
              { name: 'Juices', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop' },
              { name: 'Smoothies', img: 'https://images.unsplash.com/photo-1618083479302-1e1f2e67dc84?w=300&h=300&fit=crop' },
              { name: 'Sprouts', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop' },
              { name: 'Exotic Veggies', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop' },
              { name: 'Organic', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop' },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                className="card-product cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-40 rounded-lg mb-4 overflow-hidden bg-gray-100">
                  <img 
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-center text-gray-900">{cat.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SALADGO */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose SALADGO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: 'Fresh & Organic', desc: 'Farm fresh produce delivered daily' },
              { icon: Zap, title: 'Quick Delivery', desc: 'Fast and reliable delivery service' },
              { icon: Star, title: 'Premium Quality', desc: 'Best quality vegetables and fruits' },
            ].map((item, idx) => (
              <motion.div key={idx} className="card text-center" whileHover={{ y: -5 }}>
                <item.icon className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-12">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { id: 1, name: 'Fresh Tomatoes', price: 149, img: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=300&fit=crop' },
              { id: 2, name: 'Crispy Lettuce', price: 99, img: 'https://images.unsplash.com/photo-1599599810694-2202a3c0b2f7?w=300&h=300&fit=crop' },
              { id: 3, name: 'Sweet Apples', price: 199, img: 'https://images.unsplash.com/photo-1585518419395-fc97c02c4e27?w=300&h=300&fit=crop' },
              { id: 4, name: 'Fresh Carrots', price: 129, img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop' },
            ].map((prod) => (
              <motion.div
                key={prod.id}
                className="card-product"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-48 rounded-lg mb-4 overflow-hidden bg-gray-100">
                  <img 
                    src={prod.img}
                    alt={prod.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{prod.name}</h3>
                <p className="text-orange-600 font-bold mt-2">₹{prod.price}</p>
                <button className="btn-primary w-full mt-4 text-sm py-2">
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-orange-500 text-white py-16">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Eat Fresh?</h2>
          <p className="text-xl mb-8">Join thousands of customers enjoying healthy, fresh food daily</p>
          <Link to="/shop" className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Start Shopping Now
          </Link>
        </div>
      </section>
    </div>
  )
}
