import React from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Api";
import "./App.css";
import CurrentWeather from "./Components/Current-Weather/CurrentWeather";
import Search from "./Components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
  };

  return (
    <div className="Container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
