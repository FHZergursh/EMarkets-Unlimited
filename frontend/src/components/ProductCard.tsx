import React, { useState } from 'react'
import type { Products } from '../types/Products'
import missingimage from "../icons/missingimage.png"
import { useNavigate } from 'react-router';

interface ProductProps {
  product: Products
}


const ProductCard = ({product} : ProductProps) => {
  const [icon, setIcon] = useState(product.imageurl)
  const navigate = useNavigate()

  const checkMissingIcon = () => {
    console.log("Worked!")
    if (product.imageurl.length === 0)
    {
      console.log("Thingy is empty")
      setIcon(missingimage)
    }
  } 

    const gotoProduct = async () => {
    await navigate(`/product/${product.productid}`)
  }
  



  return (
    <div className='bg-blue-200 w-full h-full flex flex-col items-center' onClick={gotoProduct}>
      <h1 className='text xl'>{product.name}</h1>
      <img src={product.imageurl} onLoad={checkMissingIcon} />
    </div>
  )
}

export default ProductCard