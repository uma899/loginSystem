import React from 'react'
import './sp.css'
import { API } from "../../../contants";
function SingleProduct({product}) {
  return (
    <div className='main-single'>
        <p>ID: {product._id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Price: {product.image}</p>
    <img src= {API + 'images/' + product.image}></img> 
        <p>Brand:{product.unit}</p>
    </div>
  )
}

export default SingleProduct
