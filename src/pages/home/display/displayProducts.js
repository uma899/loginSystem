import React from "react";
import './displayProducts.css'
import { API } from "../../../contants";

function DisplayProducts({products}){
    const pstItems = products.map(el =>
            <div className="card-d">
                <img src= {API + 'images/' + el.image}></img>
                <div className="text-d">
                    <p>{el.name}</p>
                    <p>Price: ₹{el.price}</p>
                    <p>Brand: {el.unit}</p>
                </div>
                <button className="btn-a" onClick={() => {addToCart(el._id)}}>Add to Cart</button>
                <button className="btn-a"><a href={'/product/'+el._id}>View Details</a></button>
            </div>
        );
    return(
      <>
      <div className="main-d">
        <h1 className="h-d">Latest Products</h1>
        <div className="grid-d">
          {pstItems}
        </div>
        </div>
      </>
    )
  }

function addToCart(id){
    //if(localStorage.getItem('cart') !== null){
/*         let temp = [];
        temp = temp.push(id)
        localStorage.setItem('cart', temp) */
        //let cart = [];
        let temp = JSON.parse(localStorage.getItem('cart')) || []; // Get existing cart or create an empty array
        temp.push(id)
        //cart.push(temp[0]); // Add the item ID to the cart array
        //cart[0].push(id)
        localStorage.setItem('cart', JSON.stringify(temp));
/*     }

    else{
        localStorage.setItem('cart', [])
    } */
}

export default DisplayProducts;  