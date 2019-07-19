import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <img width="40%" height="auto" src="https://miro.medium.com/max/700/1*GLhjQ8nTMry_g9thlc7z8g.jpeg" alt="logo" />
      <h1>Ironfoods</h1>
      <Link to="/foods">
        <button>c'all the foods</button>
      </Link>
    </div>
  )
}

export default Home
