import React, { useEffect, useState } from 'react'
import type { Products } from '../types/Products'
import { useParams } from 'react-router'


const Product = () => {
  const {productid} = useParams()
  const {product, setProduct} = useState<Products>()
  
  



  return (
    <div>
      <div>Test, id is {productid}</div>


    </div>
  )
}

export default Product