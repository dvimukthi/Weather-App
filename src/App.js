import React from "react";
import "./App.css";
import CurrentWeather from "./Components/Current-Weather/CurrentWeather";
import Search from "./Components/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="Container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
