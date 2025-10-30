import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { clearCart, selectCartItems, selectCartTotal } from '../store/cartSlice'

export default function Checkout(){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const [processing, setProcessing] = useState(false)
  const [card, setCard] = useState({number:'',exp:'',cvc:''})
  const [msg, setMsg] = useState('')

  function pay(e){
    e.preventDefault()
    setMsg('')
    if(cart.length===0){
         setMsg('Cart empty'); 
         return
         }

    setProcessing(true)
    setTimeout(()=>{
      setProcessing(false)
      if(card.number.replace(/\s+/g,'') === '4242424242424242'){
      
        dispatch(clearCart())
        navigate('/success', { replace: true })
        
        alert('Payment successful (simulated). Order placed.')
        navigate('/')
      } else {
        setMsg('Payment failed. Use test card 4242 4242 4242 4242')
      }
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">💳 Checkout</h1>

          <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Order Summary</h2>
            <p className="text-2xl font-bold text-green-600">Total: ₹{total}</p>
          </div>

          <form onSubmit={pay} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="4242 4242 4242 4242 (test card)"
                value={card.number}
                onChange={e => setCard({...card, number: e.target.value})}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="MM/YY"
                  value={card.exp}
                  onChange={e => setCard({...card, exp: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="123"
                  value={card.cvc}
                  onChange={e => setCard({...card, cvc: e.target.value})}
                  required
                />
              </div>
            </div>

            {msg && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 font-medium">{msg}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {processing ? '🔄 Processing Payment...' : '💳 Pay Now (Simulated)'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
