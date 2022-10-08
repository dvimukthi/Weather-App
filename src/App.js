import React from "react";
import "./App.css";
import CurrentWeather from "./Components/Current-Weather/CurrentWeather";
import Search from "./Components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `/weather?lat={lat}&lon={lon}&appid={API key}`
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
