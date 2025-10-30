import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/cartSlice'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = PRODUCTS.find(p => p.id === Number(id))
  const dispatch = useDispatch()

  if (!product) return <p className="text-center text-gray-600 text-lg mt-10">Product not found</p>

  function addToCart() {
    dispatch(addItem({ id: product.id, name: product.name, price: product.price }))
    navigate('/cart')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
              <p className="text-2xl text-green-600 font-bold mb-4">₹{product.price}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
              <button
                onClick={addToCart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
