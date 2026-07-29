import React from 'react'
import ProductsGrid from '../components/ProductsGrid'

const HomePage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <main className='grow'> 
        <ProductsGrid />
      </main>
    </div>
  )
}

export default HomePage