import React, { useEffect, useState } from 'react'
import type { Products } from '../types/Products'
import { useParams } from 'react-router'


const Product = () => {
  const {productid} = useParams()
  const [product, setProduct] = useState<Products>()

  useEffect(() => {
    const getProducts = async () => {
      console.log("Get products ran")
      try {
        const res = await fetch(`http://localhost:3000/api/products/${productid}`)
        const data = await res.json()
        console.log(data)
        setProduct(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  
  }, [])

  return (
    <div>
      <div>Test, id is {productid}</div>
      <div>Product name is {product?.name}</div>


    </div>
  )
}

export default Product