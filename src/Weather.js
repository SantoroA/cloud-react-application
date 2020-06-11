import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { formatTime, formatWeekDay } from "./helpers";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState(null);
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
  function handleResponse(response) {
    setInfo(
      <div>
        <div>
          <h1>
            {response.data.name}, {response.data.sys.country}
          </h1>
          <div className="row">
            <div className="col-6">
              <img
                src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                alt={response.data.weather[0].description}
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  {Math.round(response.data.main.temp)}
                </div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row secondary-info">
          <div class="col-3 divider">
            {formatWeekDay(response.data.dt * 1000)} <br />
            {formatTime(response.data.dt * 1000)}
          </div>
          <div class="col-3 ">{response.data.weather[0].description}</div>
          <div class="col-3 ">
            Wind Speed <br />
            {response.data.wind.speed}m/s
          </div>
          <div class="col-3 ">
            Humidity <br />
            {response.data.main.humidity}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Weather container">
      <div className="searchForm row align-items-center justify-content-center mt-4">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="search"
            placeholder="Enter a City"
            onChange={updateCity}
          />
          <input
            className="btn btn-dark m-auto shadow-sm"
            type="submit"
            value="Search"
          />
        </form>
      </div>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <h1>Hello from Weather</h1>
      {info}
    </div>
  );
}
