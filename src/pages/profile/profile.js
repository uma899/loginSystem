import React from 'react'
import GetData from '../../getdata/getdata'
import { API } from '../../contants'
function Profile() {
    const profile = GetData('users/' + localStorage.getItem('id'));
    console.log(localStorage.getItem('id'))
  return (
    <div>
        Hello {/* {profile.name} */}
    </div>
  )
}

export default Profile