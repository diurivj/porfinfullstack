import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function FoodDetail(props) {
  const [food, setFood] = useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/foods/${props.match.params.id}`)
      .then(({ data }) => {
        setFood(prevState => {
          return {
            ...prevState,
            ...data.food
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [props.match.params.id])

  const deleteFood = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        axios
          .delete(`http://localhost:3000/api/foods/${props.match.params.id}`)
          .then(({ data }) => {
            Swal.fire('Deleted!', data.msg, 'success')
            props.history.push('/foods')
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        return
      }
    })
  }

  return (
    <div>
      <h2>{food.name}</h2>
      <p>{food.dishType}</p>
      <p>{food.flavor}</p>
      <p>${food.price}.00</p>
      <button onClick={deleteFood}>Delete</button>
      <button onClick={() => props.history.push('/foods')}>Go back</button>
    </div>
  )
}

export default FoodDetail
