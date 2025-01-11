import React, { useState, useEffect } from "react";
import "./cart.css";
import GetData from "../../getdata/getdata";
import { API } from "../../contants";
import NavSmall from "../home/nav/navSmall";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  //let cartItems = [];
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log("cart", cart);
  //if(cart !== undefined || cart !== null){
  /*       cart.forEach((id) => {
        cartItems.push(GetData(`products/${id}`))
      });
 */

  /*       async function getitems(){
        cart.map((id) => {
          const response = GetData(`products/${id}`);
          cartItems.push(response); 
        })
      }

      getitems(); */

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const idsToFetch = cart; // Replace with your actual IDs

        // Use Promise.all to fetch data concurrently
        const promises = idsToFetch.map(async (id) => {
          try {
            const response = await fetch(API + `products/${id}`);
            const jsonData = await response.json();
            return jsonData;
          } catch (err) {
            // Handle individual fetch errors gracefully
            console.error(`Error fetching data for ID ${id}:`, err);
            return null;
          }
        });

        const results = await Promise.all(promises);
        setData(results.filter((item) => item !== null)); // Filter out any failed fetches
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  //console.log("carti",data);

  if (data.length !== 0) {
    const cartDisplay = data.map((el) => (
      <div className="card-d">
        <div className="img-d">
          <img src={API + "images/" + el.image}></img>
        </div>
        <div className="text-d">
          <p>{el.name}</p>
          <p>Price: ₹{el.price}</p>
          <p>Brand: {el.unit}</p>
        </div>
        <button
          className="btn-a"
          onClick={() => {
            removeFromCart(el._id);
          }}
        >
          Remove product
        </button>
        <button className="btn-a">
          <a href={"/product/" + el._id}>View Details</a>
        </button>
      </div>
    ));
    return (
      <>
      <NavSmall />
        <div className="main-d">
          <div className="grid-d">
          {cartDisplay}
          </div>
        <button
          className="btn-a"
          onClick={() => {
            emptyCart();
          }}
        >
          Empty Cart
        </button>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Continue shopping</h1>
      <a href="/">Our Products</a>
    </>
  );
}

function removeFromCart(t) {
  let temp = JSON.parse(localStorage.getItem('cart'));
  //if(!(temp.find((element) => element == id))){
    temp.pop(t)
  //}
  
  //cart.push(temp[0]); // Add the item ID to the cart array
  //cart[0].push(id)
  localStorage.setItem('cart', JSON.stringify(temp));
  window.location.reload();
}

function emptyCart() {
  localStorage.setItem("cart", JSON.stringify([]));
  window.location.reload();
}

export default Cart;
