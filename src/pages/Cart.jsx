import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal, removeItem, updateQty } from '../store/cartSlice'

export default function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">
          Cart is empty.{" "}
          <Link to="/" className="text-blue-600 hover:underline font-medium">
            Shop now
          </Link>
        </p>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-2xl p-6 divide-y divide-gray-200">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center py-4">
                <div className="flex-1 w-full">
                  <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                  <div className="mt-2 text-gray-600">
                    ₹{item.price} ×
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(updateQty({ id: item.id, qty: Number(e.target.value) }))
                      }
                      className="ml-3 border border-gray-300 rounded-lg px-3 py-1 w-20 text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="mt-3 sm:mt-0 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-2xl p-6">
            <p className="text-xl font-semibold text-gray-800 mb-4 sm:mb-0">
              Total: <span className="text-green-600">₹{total}</span>
            </p>
            <button
              onClick={() => navigate('/checkout')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}
