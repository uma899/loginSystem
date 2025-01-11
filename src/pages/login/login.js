import React from "react";
import "./login.css";
import { API } from "../../contants";
import NavSmall from "../home/nav/navSmall";


function Login() {
  console.log(localStorage.getItem('phone'))
  return (
    <div>
      <NavSmall />
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

    //async function fetching() {
      fetch( API + 'users/verify', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(
      (res) => {
        let invalid = document.getElementById('invalid');
        //switch(res.status){
         // case 200:
            return res.json()
/*             break;
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
        } */
      }
    )
    .then((d) => {
      console.log(d);
      localStorage.setItem("id", d.id);
      window.location.replace("/");
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      // Display an appropriate error message to the user
      let invalid = document.getElementById('invalid');
      invalid.innerHTML = 'An error occurred during login.'; 
    });
  //}
  //fetching();

}

export default Login;
