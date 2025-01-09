import React from "react";
import { useState, useEffect } from "react";
import { API } from "../../contants";
import "./welcome.css"


function Welcome() {
  const userId = localStorage.getItem("id");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(API + "users/" + userId)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  //console.log("data:",userData);

  while (!userData) {
    return (
      <>
        <h2>Loading...</h2>
        <a href="/login">Login again</a>
      </>
    );
  }
  return (
    <div>
        <div className="header">
            <div>
                <h1>Logo</h1>
            </div>
            <button onClick={handle}>
            <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e8eaed"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z"/></svg>
            </button >
            
        </div>
        <div className="welcome">
            <h1>Welcome_ {JSON.stringify(userData.name)}!</h1>
            <h2>Your current details:</h2>
            <h3>Phone: {JSON.stringify(userData.phone)}</h3>
            <h3>Password: {JSON.stringify(userData.password)}</h3>

        </div>
    </div>
  );
}

function handle(){
  localStorage.setItem("id", null);
  window.location.replace('/login');
}

export default Welcome;
