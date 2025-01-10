import React from 'react'
import './cart.css'

function Cart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log("cart",cart);
  return (
    <div>{String(cart)}</div>
  )
}

export default Cart