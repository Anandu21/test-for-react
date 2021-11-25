import React from 'react'
import './View.css'
import poster from './poster.png'

function View() {

  return (

    <div className="divView">
      
      <h2>Welcome To Ad Button</h2>
      <br/>
      <a href="https://www.amazon.in/">www.amazon.com</a>
      <div className="divViewTwo">
      <img className="image1" src={poster} alt="image not found"/>
      
      </div>
      
    </div>
  )
}

export default View
