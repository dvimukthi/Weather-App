import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="City">Belgrade</p>
        <p className="weatherDescription">Sunny</p>
      </div>
      <img alt="weather" className="weather-icon" src="icons/01d.png" />
    </div>
  );
};

export default CurrentWeather;
