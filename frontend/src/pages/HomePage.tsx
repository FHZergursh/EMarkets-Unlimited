import React from 'react'
import ProductsGrid from '../components/ProductsGrid'

const HomePage = () => {
  return (
    <body className='min-h-screen flex flex-col justify-between'>
      <main className='grow'> <ProductsGrid /></main>
    </body>
  )
}

export default HomePage