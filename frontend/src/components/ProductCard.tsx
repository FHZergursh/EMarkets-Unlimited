import React from 'react'
import type { Products } from '../types/Products'
import missingimage from "../icons/missingimage.png"

interface ProductProps {
  product: Products
}


const ProductCard = ({product} : ProductProps) => {
  return (
    <div className='bg-blue-200 w-full h-full flex flex-col items-center'>
      <h1 className='text xl'>{product.name}</h1>
      <img src={missingimage} />
    </div>
  )
}

export default ProductCard