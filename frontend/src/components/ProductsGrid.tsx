import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { type Products } from '../types/Products'

const ProductsGrid = () => {
  const [products, setProducts] = useState<Products[]>([])

useEffect(() => {
  const getProducts = async () => {
    console.log("Get products ran")
    try {
      const res = await fetch("http://localhost:3000/api/products")
      const data = await res.json()
      console.log(data)
      setProducts(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  getProducts()

}, [])



  return (
    <div>
      <h1 className='text-3xl text-center mb-2'>Emarkets Unlimited</h1>
      <div className='max-h-full bg-gray-200 flex justify-center '>
        <div className='w-[75%] h-[75%] bg-red-200'>
          <div className='grid grid-cols-4 gap-y-5 gap-x-10 pl-[5%]'>
            {products.map ((item) => (
              <div>
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductsGrid