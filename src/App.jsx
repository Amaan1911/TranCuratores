import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import { useAuth } from './context/AuthContext'

function ProtectedRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

function AuthRoute({ children }) {
  const { user } = useAuth()
  return user ? <Navigate to="/" /> : children
}

export default function App(){
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      {user && <Header />}
      <main>
        <Routes>
          <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
          <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />
          <Route path="/" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
          <Route path="/product/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="/success" element={<ProtectedRoute><Success /></ProtectedRoute>} />
        </Routes>
      </main>
    </div>
  )
}
