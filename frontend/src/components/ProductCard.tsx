import React from 'react'

interface ProductProps {
  name: string
}


const ProductCard = ({name} : ProductProps) => {
  return (
    <div className='bg-blue-200 w-[15vw] h-[25vh]'>{name}</div>
  )
}

export default ProductCard