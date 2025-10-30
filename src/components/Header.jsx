import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/cartSlice'

export default function Header() {
  const navigate = useNavigate()
  const count = useSelector(selectCartCount)
  const [menuOpen, setMenuOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem('user') || 'null')

  function logout() {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
         
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            🛍️ Trans Curatorsrm 
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-gray-800">
            <Link
              to="/cart"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium"
            >
              <span>🛒</span>
              <span>Cart ({count})</span>
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Hi, {user.name}</span>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
          >
            {menuOpen ? '✖️' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-800 border-t border-gray-200 pt-4">
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium"
            >
              🛒 Cart ({count})
            </Link>

            {user ? (
              <>
                <span className="text-gray-700">Hi, {user.name}</span>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full"
                  onClick={() => {
                    logout()
                    setMenuOpen(false)
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
