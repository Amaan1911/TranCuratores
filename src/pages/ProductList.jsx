import React from 'react'
import { PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function ProductList(){
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {PRODUCTS.map(p=> <ProductCard key={p.id} p={p} img={p.image} />)}
      </div>
    </div>
  )
}
