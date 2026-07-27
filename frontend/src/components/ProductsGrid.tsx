import React from 'react'
import ProductCard from './ProductCard'

const ProductsGrid = () => {
  return (
    <div>
      <h1 className='text-3xl text-center mb-2'>Emarkets Unlimited</h1>
      <div className='max-h-full bg-gray-200 flex justify-center '>
        <div className='w-[75%] h-[75%] bg-red-200'>
          <div className='grid grid-cols-4 gap-y-5 pl-[5%]'>
            <ProductCard name="Item 1" />
            <ProductCard name="Item 2" />
            <ProductCard name="Item 3" />
            <ProductCard name='Item 4' />
            <ProductCard name="Item 5" />
            <ProductCard name="Item 6" />
            <ProductCard name="Item 7" />
            <ProductCard name='Item 8' />
            <ProductCard name='Item 9' />
            <ProductCard name="Item 10" />
            <ProductCard name="Item 11" />
            <ProductCard name='Item 12' />
            <ProductCard name='Item 13' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductsGrid