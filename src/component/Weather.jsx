import React, { useEffect } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";

const Weather = () => {
const search = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`

    const responce = await fetch(url)
    const data = await responce.json
    console.log(data)
  } catch (error) {
    
  }
}

useEffect(()=>{
  search("london")
},[])
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="search"></input>
      </div>
      <img src={"search_icon"}></img>
      <div>
        <img src={"clear_icon"} alt="" className="weather-icon" />
        <p>16°</p>
        <p>London</p>
        <div className="weather-data">
          <div className="col">
            <img src={"humidity_icon"}></img>
            <div>
              <p>91%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={"wind_icon"}></img>
            <div>
              <p>3.6km</p>
              <span>wind speed</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Weather;
