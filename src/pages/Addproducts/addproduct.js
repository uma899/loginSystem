import React from 'react'
import './addproduct.css'
import { API } from '../../contants'

function Addproduct() {
  return (
    <div>
        <div class="main-add">
		<h1>Add Product</h1>
		<form action={API} method="post" enctype="multipart/form-data">
			<p>
			  <label class = "input-heading-add" for="name">Item:</label>
			  <br></br>
			  <input class = "input-box-add" type="text" id="name" name="name"  required/>
			</p>
			<p>
			  <label class = "input-heading-add" for="price">Price:</label>
			  <br></br>
			  <input class = "input-box-add" type="tel" id="price" name="price" required />
			</p>
			
			<p>
			  <label class = "input-heading-add" for="price">Brand:</label>
			  <br></br>
			  <input class = "input-box-add" type="text" id="vendor" name="unit" required />
			</p>
			<input type="file" name="img" />
			<button id='btn-add' type='submit'>Submit</button>
		  </form>
	</div>
    </div>
  )
}

export default Addproduct