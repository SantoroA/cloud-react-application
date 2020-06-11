import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { formatTime, formatWeekDay } from "./helpers";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState(null);
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2b3715c71ce846298a7fbee953bac1d5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
    axios
      .get(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`)
      .then(handleResponse);
  }
  function handleClick(e) {
    e.preventDefault();
    let apiKey = "2b3715c71ce846298a7fbee953bac1d5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;

    axios
      .get(`${apiUrl}q=${e.target.innerHTML}&appid=${apiKey}&units=metric`)
      .then(handleResponse);
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
    setInfo(
      <div>
        <div>
          <h1>
            {response.data.name}, {response.data.sys.country}
          </h1>
          <div className="row justify-content-center align-items-center">
            <div className="col-6">
              <img
                src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                alt={response.data.weather[0].description}
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6" id="temp-element">
                  {isFahrenheit
                    ? Math.round((response.data.main.temp * 9) / 5 + 32)
                    : Math.round(response.data.main.temp)}
                </div>
                <div className="col-6">
                  °
                  <a href="/" onClick={changeToCelsius}>
                    C
                  </a>
                  | °
                  <a href="/" onClick={changeToFahrenheit}>
                    F
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row secondary-info justify-content-center align-items-center">
          <div className="col-3 divider">
            {formatWeekDay(response.data.dt * 1000)} <br />
            {formatTime(response.data.dt * 1000)}
          </div>
          <div className="col-3 ">{response.data.weather[0].description}</div>
          <div className="col-3 ">
            Wind Speed <br />
            {response.data.wind.speed}m/s
          </div>
          <div className="col-3 ">
            Humidity <br />
            {response.data.main.humidity}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Weather container">
      <div className="defaultCities row">
        <div className="col-3 text-center">
          <a href="/" className="city-link" onClick={handleClick}>
            London
          </a>
        </div>
        <div className="col-3 text-center">
          <a href="/" className="city-link" onClick={handleClick}>
            Paris
          </a>
        </div>
        <div className="col-3 text-center">
          <a href="/" className="city-link" onClick={handleClick}>
            Rome
          </a>
        </div>
        <div className="col-3 text-center">
          <a href="/" className="city-link" onClick={handleClick}>
            New York
          </a>
        </div>
      </div>
      <div className="searchForm row align-items-center justify-content-center mt-4">
        <div className="col-2">
          <button className="btn btn-dark m-auto shadow-sm">
            <i className="fas fa-map-marker-alt"></i>
          </button>
        </div>
        <div className="col-10">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a City"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <button
                  type="submit"
                  className="btn btn-dark d-block m-auto shadow-sm"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Loader
        type="Puff"
        color="#584153"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      {info}
    </div>
  );
}
