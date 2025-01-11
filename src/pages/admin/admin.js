import React from 'react'
import './admin.css'
import { useState, useEffect } from 'react';
import { API } from '../../contants';
import NavSmall from '../home/nav/navSmall';

function Admin() {
    const [products, setProducts] = useState(null);
    useEffect(() => {
      fetch(API + "products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);
    if (products === null) {
      return (
        <>
          <NavSmall />
          <Loading />
        </>
      );
    }
    
    return (
      <>
        <NavSmall />
        <DisplayList products = {products} />
      </>
    );
  }
  
  function Loading() {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
      

function DisplayList({products}){
    const pstItems = products.map(el =>
            <div className="card-d">
                <img src= {API + 'images/' + el.image}></img>
                <div className="text-d">
                    <p>{el.name}</p>
                    <p>Price: ₹{el.price}</p>
                    <p>Brand: {el.unit}</p>
                </div>
                <button className="btn-a" onClick={() => {removed(el._id)}}>Delete Item</button>
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

  async function removed(el){
   await fetch(API + 'products/' + el, { 
        method: 'DELETE', 
        headers: { 
            'Content-type': 'application/json'
        } 
    }); 
    window.location.reload();
  }

export default Admin