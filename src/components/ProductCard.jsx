import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({p}){
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm">
      <div className="h-36 bg-gradient-to-br from-slate-200 to-slate-300 rounded mb-2 overflow-hidden flex items-center justify-center">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{p.name}</h3>
        <p className="font-semibold my-1">₹{p.price}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
        <div className="mt-2">
          <Link to={'/product/'+p.id} className="inline-block bg-gray-900 text-white px-3 py-2 rounded-md">View</Link>
        </div>
      </div>
    </div>
  )
}
