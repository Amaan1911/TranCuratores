import React from 'react'
import { Link } from 'react-router-dom'

export default function Success(){
    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 text-center">
                <div className="mb-6">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                        <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">🎉 Payment Successful!</h2>
                <p className="text-lg text-gray-600 mb-8">Your order has been placed successfully. Thank you for shopping with us!</p>
                <Link
                    to="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}
