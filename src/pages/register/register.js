import React from 'react'
import { API } from '../../contants';
import './register.css'

function Register() {
  return (
      <div>
        <div className="main">
          <h1>Register</h1>
          <div className="form">
          <p>
              <label className="input-heading" for="price">
                Your Name:
              </label>
              <br></br>
              <input
                className="input-box"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            
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
            <button id="btn" onClick={handleSubmit}>
              Submit
            </button>
            <br></br>
            Already have account? <a href="/login">Login</a>
          </div>
        </div>
      </div>
    );
  }
  
  function handleSubmit(){
  
      let user = {
        name: document.getElementById('name').value, 
        phone: parseInt(document.getElementById('phone').value), 
        password: document.getElementById('password').value
      };


  
      localStorage.setItem("phone", user.phone)
  
      fetch( API + 'users', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then(
        (res) => {
          switch(res.status){
            case 200:
              //localStorage.setItem("id", res.statusText)
              window.location.replace('/login');
              //console.log(res.statusText)
              break;
            default:
              alert('Network error! Please try again after some time')
          }
        }
      );
  
  }

export default Register