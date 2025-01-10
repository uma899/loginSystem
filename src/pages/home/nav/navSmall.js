import React, { useState } from 'react'
import './navSmall.css'

function NavSmall() {
  const [menu, setMenu] = useState('hidden');

  return (
    <>
      <div className="main-nav" >
        <div onClick={() => {setMenu('visible'); console.log(menu)}} className="icon-nav">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </div>
        <div className="logo-nav">
            <p>Electronics</p>
        </div>
        <div className="login-nav">
            <a href="/login">Login</a>
        </div>
    </div>

    <div id="menu-nav" style={{contentVisibility: menu}} className="menu-nav">
        <div id="close" onClick={() => {setMenu('hidden')}}  ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
        <div className="menu-opt-nav">
            <a href='/'>Our Products</a>
            <a>Who we are?</a>
            <a>Reach Us</a>
            <a href='/addproduct'>Say something</a>

            <a href="/register">Sign-in</a>
            <a href="/login">Sign-up</a>
            <a href="/cart">Cart</a>
        </div>
        <div className="bottom-nav">
            <a>Support</a>
            <div className="logo-nav">
                <p>Electronics</p>
            </div>
        </div>
    </div>

    <div>
        Some body..
    </div>
    </>
  )
}





export default NavSmall