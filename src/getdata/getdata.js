import React from 'react'
import { useState, useEffect } from 'react';
import { API } from '../contants';

function GetData(t) {
      const [products, setProducts] = useState(null);
      useEffect(() => {
        fetch(API + t)
          .then((response) => response.json())
          .then((data) => setProducts(data));
      }, []);
  return products
}

export default GetData