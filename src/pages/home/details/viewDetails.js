import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { API } from '../../../contants'
import NavSmall from '../nav/navSmall'
import SingleProduct from './singleproduct'

function ViewDetails() {
    let id = useParams()
    console.log(id)
    const [product, setProduct] = useState(null);
    useEffect(() => {
      fetch(API + "products/" + id.id)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }, []);
    //console.log(product)
    if (product === null) {
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
        <SingleProduct product = {product} />
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

  
export default ViewDetails