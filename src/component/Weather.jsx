import React from 'react'
import "./Weather.css"
import search_Icon from "../assets/search.png"


const Weather = () => {
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input type='text'placeholder='search'></input>
      </div>
      <img src={'search_icon'}></img>
      <div>
        <img src='' alt='' />
      </div>

    </div>
  )
}

export default Weather
