import React, { useState } from 'react'
import type { Products } from '../types/Products'
import { useNavigate } from 'react-router';
import missingImage from '../icons/missingimage.png'

interface ProductProps {
  product: Products
}


const ProductCard = ({product} : ProductProps) => {
  const [icon] = useState(product.imageurl)
  const navigate = useNavigate()

    const gotoProduct = async () => {
    await navigate(`/product/${product.productid}`)
  }
  



  return (
    <div className='bg-blue-200 w-full h-full flex flex-col items-center' onClick={gotoProduct}>
      <h1 className='text xl'>{product.name}</h1>
      {icon.length === 0 ? (
        <img src={missingImage} alt='product icon'/>
      ) : (
        <img src={icon} alt ='product icon' />
      )}
      <div>img len is {icon.length}</div>
    </div>
  )
}

export default ProductCard