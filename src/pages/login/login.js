import React from "react";
import "./login.css";
import { API } from "../../contants";


function Login() {
  console.log(localStorage.getItem('phone'))
  return (
    <div>
      <div className="main">
        <h1>Login</h1>
        <div className="form">
          <p>
            <label className="input-heading" for="price">
              Phone:
            </label>
            <br></br>
            <input
              className="input-box"
              type="text"
              id="phone"
              name="phone"
              required
              defaultValue={localStorage.getItem('phone')}
            />
          </p>

          <p>
            <label className="input-heading" for="price">
              Password:
            </label>
            <br></br>
            <input
              className="input-box"
              type="text"
              id="password"
              name="password"
              required
            />
          </p>

          <p id="invalid"></p>
          <button id="btn" onClick={handleSubmit}>
            Submit
          </button>
          <p>Don't have account? <a href="/register">Register</a></p>
        </div>
        
      </div>
    </div>
  );
}

function handleSubmit(){

    let user = {
      phone: document.getElementById('phone').value, 
      password: document.getElementById('password').value
    };

    console.log(user)

    fetch( API + 'users/verify', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(
      (res) => {
        let invalid = document.getElementById('invalid');
        switch(res.status){
          case 200:
            localStorage.setItem("id", res.statusText)
            alert(res.statusText);
            console.log("response",res)
            window.location.replace('/welcome');
            break;
          case 401:
            invalid.innerHTML = 'Invalid credentials'
            //alert('Invalid credentials')
            console.log(res)
            break;
          case 404:
            invalid.innerHTML = 'User not found'
            //alert('User not found')
            break;
          default:
            alert('Network error! Please try again after some time')
        }
      }
    );

}

export default Login;
