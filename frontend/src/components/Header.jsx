import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, LogIn, LogOut, User } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { cart, getTotalItems } = useCart()
  const { user, isAuthenticated, logout } = useAuth()

  const toggleMenu = () => setIsOpen(!isOpen)
  const totalItems = getTotalItems()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-green-50">
      <nav className="container-max flex items-center justify-between h-24 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-80 transition duration-200">
          <img 
            src="/logo.svg" 
            alt="SALADGO" 
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition">
            Home
          </Link>
          <Link to="/shop" className="text-gray-700 hover:text-green-600 font-medium transition">
            Shop
          </Link>
          <Link to="/b2b" className="text-gray-700 hover:text-green-600 font-medium transition">
            B2B Supply
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition">
            Contact
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative text-gray-700 hover:text-green-600 transition">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* User Menu */}
          <div className="relative hidden sm:block">
            {isAuthenticated ? (
              <div>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
                >
                  <User size={24} />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout()
                        setIsUserMenuOpen(false)
                      }}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-green-600 transition">
                <LogIn size={24} />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container-max py-4 flex flex-col gap-4">
            <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link to="/shop" onClick={toggleMenu} className="text-gray-700 hover:text-green-600 font-medium">
              Shop
            </Link>
            <Link to="/b2b" onClick={toggleMenu} className="text-gray-700 hover:text-green-600 font-medium">
              B2B Supply
            </Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-green-600 font-medium">
              About
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-green-600 font-medium">
              Contact
            </Link>
            {isAuthenticated && (
              <Link to="/dashboard" onClick={toggleMenu} className="text-gray-700 hover:text-green-600 font-medium">
                Dashboard
              </Link>
            )}
            {!isAuthenticated && (
              <Link to="/login" onClick={toggleMenu} className="text-gray-700 hover:text-green-600 font-medium">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

