import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Foods() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/foods')
      .then(({ data }) => {
        setFoods(prevState => {
          return [...prevState, ...data.foods]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h2>Ironfoods</h2>
      {foods.map(food => {
        return (
          <div key={food._id}>
            <p>{food.name}</p>
            <Link to={`/foods/${food._id}`}>
              <button>See detail</button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Foods
