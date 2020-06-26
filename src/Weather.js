import React, { useState } from "react";
import MainWeatherInfo from "./MainWeatherInfo";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [forecastInfo, setForecastInfo] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleApi();
    handleForecastApi();
  }
  function handleApi() {
    let apiKey = "2b3715c71ce846298a7fbee953bac1d5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
    axios
      .get(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`)
      .then(handleResponse);
  }
  function handleForecastApi() {
    let apiKey = "2b3715c71ce846298a7fbee953bac1d5";
    let forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?";
    axios
      .get(`${forecastApiUrl}q=${city}&appid=${apiKey}&units=metric`)
      .then(handleForecastResponse);
  }
  function handleClick(e) {
    e.preventDefault();
    let apiKey = "2b3715c71ce846298a7fbee953bac1d5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
    let forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?";
    axios
      .get(`${apiUrl}q=${e.target.name}&appid=${apiKey}&units=metric`)
      .then(handleResponse);
    axios
      .get(`${forecastApiUrl}q=${e.target.name}&appid=${apiKey}&units=metric`)
      .then(handleForecastResponse);
  }
  function changeToCelsius(e) {
    e.preventDefault();
    setIsFahrenheit(false);
  }
  function changeToFahrenheit(e) {
    e.preventDefault();
    setIsFahrenheit(true);
  }
  function handleResponse(response) {
    setWeatherInfo(response.data);
  }
  function handleForecastResponse(response) {
    setForecastInfo(response.data);
    console.log(response.data);
  }

  return (
    <div className="Weather">
      <MainWeatherInfo
        weatherInfo={weatherInfo}
        updateCity={updateCity}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        isFahrenheit={isFahrenheit}
        changeToCelsius={changeToCelsius}
        changeToFahrenheit={changeToFahrenheit}
      />
      <Forecast forecastInfo={forecastInfo} isFahrenheit={isFahrenheit} />
    </div>
  );
}
