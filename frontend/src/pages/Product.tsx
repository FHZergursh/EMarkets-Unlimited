import React, { useEffect, useState } from 'react'
import type { Products } from '../types/Products'
import { useParams } from 'react-router'
import missingImage from '../icons/missingimage.png'


const Product = () => {
  const {productid} = useParams()
  const [product, setProduct] = useState<Products>()
  const [loading, setLoading] = useState(true)
  const [imageurl, setimageurl] = useState("")

  useEffect(() => {
    const getProducts = async () => {
      console.log("Get products ran")
      try {
        const res = await fetch(`http://localhost:3000/api/products/${productid}`)
        const data = await res.json()
        console.log(data)
        setProduct(data.data)
        setimageurl(data.data.imageurl) //error handling was a pain unless I put it in its own for some reason
        setLoading(false)

      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  
  }, [productid])



  
  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  else return (
    <div>
      <div className='w-screen h-screen'>
        <div className='flex justify-start ml-[5vw] gap-[10vw]'> 
          <div className='bg-red-200 w-[30%] h-fit'>
            {imageurl.length === 0 ? (
              <img src={missingImage} alt='product image' />
              ) : (
              <img src={imageurl} alt='product image' />
              )}
          </div>
          <div className='bg-blue-200 h-fit'>information, put this on right
            <div>Test, id is {productid}</div>
            <div>Product name is {product?.name}</div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Product

