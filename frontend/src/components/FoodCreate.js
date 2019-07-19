import React from 'react'
import useForm from './useForm'

function FoodCreate() {
  const [form, handleInput] = useForm()

  console.log(form)
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
      <button>Create</button>
    </div>
  )
}

export default FoodCreate
