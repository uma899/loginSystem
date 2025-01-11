import React from "react";
import { useState, useEffect } from "react";
import NavSmall from "./nav/navSmall";
//import './home.css'
import { API } from "../../contants";
import DisplayProducts from "./display/displayProducts";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch(API + "products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  //console.log('ID:', (localStorage.getItem("id")).length)
  console.log('I-D:', (localStorage.getItem("id")))
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
      <DisplayProducts products = {products} />
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

export default Home;
