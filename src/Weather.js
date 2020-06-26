import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { formatTime, formatWeekDay } from "./helpers";
import Loader from "react-loader-spinner";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [forecastCity, setForecastCity] = useState("");
  const [cityDisplay, setCityDisplay] = useState(null);
  const [celsiusTemp, setCelsiusTemp] = useState(null);
  const [fahrenheitTemp, setFahrenheitTemp] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);
  const [weekDay, setWeekDay] = useState(null);
  const [time, setTime] = useState(null);

  const [isFahrenheit, setIsFahrenheit] = useState(false);
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setForecastCity(city);
    console.log(forecastCity);
    let apiKey = "2b3715c71ce846298a7fbee953bac1d5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
    axios
      .get(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`)
      .then(handleResponse);
  }
  function handleClick(e) {
    e.preventDefault();
    setForecastCity(e.target.name);
    console.log(forecastCity);
    let apiKey = "2b3715c71ce846298a7fbee953bac1d5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;

    axios
      .get(`${apiUrl}q=${e.target.name}&appid=${apiKey}&units=metric`)
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
    setCelsiusTemp(Math.round(response.data.main.temp));
    setFahrenheitTemp(Math.round((response.data.main.temp * 9) / 5 + 32));
    setHumidity(response.data.main.humidity);
    setWindSpeed(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
    setTime(formatTime(response.data.dt * 1000));
    setWeekDay(formatWeekDay(response.data.dt * 1000));
    setCityDisplay(`${response.data.name}, ${response.data.sys.country}`);
  }

  return (
    <div className="Weather">
      <div className="main container">
        <div className="default-cities row">
          <div className="col-3 text-center">
            <a
              href="/"
              className="city-link"
              name="London"
              onClick={handleClick}
            >
              London
            </a>
          </div>
          <div className="col-3 text-center">
            <a
              href="/"
              className="city-link"
              name="Paris"
              onClick={handleClick}
            >
              Paris
            </a>
          </div>
          <div className="col-3 text-center">
            <a href="/" className="city-link" name="Rome" onClick={handleClick}>
              Rome
            </a>
          </div>
          <div className="col-3 text-center">
            <a
              href="/"
              className="city-link"
              name="New York"
              onClick={handleClick}
            >
              New York
            </a>
          </div>
        </div>
        <div className="searchForm row align-items-center justify-content-center mt-4">
          <div className="col-2">
            <button
              className="btn btn-dark m-auto shadow-sm"
              id="button-current-city"
            >
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
          <div className="col-10">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9  pl-4">
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
                    id="button-search-city"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {celsiusTemp ? (
          <div>
            <div>
              <h1>{cityDisplay}</h1>
              <div className="row my-4 justify-content-center align-items-center">
                <div className="col-6 pr-0">
                  <ReactAnimatedWeather
                    icon={"CLEAR_DAY"}
                    color={"#584153"}
                    size={"70%"}
                    animate={true}
                  />
                </div>
                <div className="col-6">
                  <div className="row">
                    <div
                      className="col align-items-right pr-0"
                      id="temp-element"
                    >
                      {isFahrenheit ? fahrenheitTemp : celsiusTemp}
                    </div>
                    <div className="col align-items-left pl-0">
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
              <div className="col-md-3 mb-2 mb-md-0 ">
                {weekDay} {time}
              </div>
              <div className="col-md-3 mb-2 mb-md-0 description">
                {description}
              </div>
              <div className="col-md-3 mb-2 mb-md-0  ">
                Wind Speed: {windSpeed}m/s
              </div>
              <div className="col-md-3 mb-2 mb-md-0 ">
                Humidity: {humidity}%
              </div>
            </div>
          </div>
        ) : (
          <Loader
            type="Hearts"
            color="#584153"
            height={100}
            width={100}
            //   timeout={3000}
          />
        )}
      </div>

      <Forecast forecastCity={forecastCity} isFahrenheit={isFahrenheit} />
    </div>
  );
}
