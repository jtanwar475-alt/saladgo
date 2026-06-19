import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Share2, Heart, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img 
              src="/logo.svg" 
              alt="SALADGO" 
              className="h-16 w-auto mb-3"
            />
            <p className="text-gray-400 mt-2">Eat Fresh, Live Healthy</p>
            <p className="text-gray-500 text-sm mt-2">
              Premium fresh produce and healthy food solutions for your lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-green-500 transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/b2b" className="text-gray-400 hover:text-green-500 transition">
                  B2B Supply
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  Cut Vegetables
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  Fresh Fruits
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  Salads
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition">
                  Juices & Smoothies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} />
                <span>9929622655</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                <a href="mailto:info@saladgo.in" className="hover:text-green-500 transition">
                  info@saladgo.in
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span>saladgo.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2026 SALADGO. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">
                <Heart size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
