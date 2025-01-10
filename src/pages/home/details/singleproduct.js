import React from 'react'
import './sp.css'
function SingleProduct({product}) {
  return (
    <div className='main-single'>
        <p>ID: {product._id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Price: {product.image}</p>
        <p>Brand: <a>{product.unit}</a></p>
    </div>
  )
}

export default SingleProduct