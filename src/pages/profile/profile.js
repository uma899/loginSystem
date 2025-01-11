import React from 'react'
import { useState, useEffect } from 'react'
import GetData from '../../getdata/getdata'
import { API } from '../../contants'
import './profile.css'
import NavSmall from '../home/nav/navSmall';
function Profile() {
          const [profile, setProfile] = useState();
          useEffect(() => {
            fetch(API + 'users/' + localStorage.getItem('id'))
              .then((response) => response.json())
              .then((data) => setProfile(data));
          }, []);
    console.log(profile, "sf", API + 'users/' + localStorage.getItem('id'))
  if(profile !== undefined){
    return (
    <div>
      <NavSmall />
      <div className='main-pro'>
        <p>Name: {profile.name}</p>
        <p>Phone: {profile.phone}</p>
        <p>Password: {profile.password}</p>
        <button
          className="btn-a"
          onClick={() => {
            alert("Currently unavailable");
          }}
        >
          Change Details
        </button>
        <button
          className="btn-a"
          onClick={() => {
            alert("Currently unavailable");
          }}
        >
          Your Cart
        </button>
      </div>
    </div>
  )
}

return(
  <>
    Loading...
  </>
)

}

export default Profile