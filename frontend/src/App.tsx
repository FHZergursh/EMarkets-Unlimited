import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './pages/Product'

const App = () => {
  return (
    <div> 
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path='/product/:productid' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App