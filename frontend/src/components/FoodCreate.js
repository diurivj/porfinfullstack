import React from 'react'
import useForm from './useForm'
import axios from 'axios'
import Swal from 'sweetalert2'

function FoodCreate(props) {
  const [form, handleInput] = useForm()

  const createFood = () => {
    axios
      .post(`http://localhost:3000/api/foods`, form)
      .then(({ data }) => {
        console.log(data)
        Swal.fire('Created', 'Food created', 'success')
        props.history.push(`/foods/${data.food._id}`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <p>
        <label>Name</label>
        <input type="text" name="name" placeholder="Name" onChange={e => handleInput(e)} />
      </p>
      <p>
        <label>Dish type</label>
        <input type="text" name="dishType" placeholder="Dish type" onChange={e => handleInput(e)} />
      </p>
      <p>
        <label>Flavor</label>
        <input type="text" name="flavor" placeholder="Flavor" onChange={e => handleInput(e)} />
      </p>
      <p>
        <label>Price</label>
        <input type="text" name="price" placeholder="Price" onChange={e => handleInput(e)} />
      </p>
      <button onClick={createFood}>Create</button>
    </div>
  )
}

export default FoodCreate
