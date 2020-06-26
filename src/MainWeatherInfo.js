import React from "react";
import { formatTime, formatWeekDay } from "./helpers";
import Loader from "react-loader-spinner";
import ReactAnimatedWeather from "react-animated-weather";

export default function MainWeatherInfo(props) {
  let weather = props.weatherInfo;
  return (
    <div className="main container">
      <div className="default-cities row">
        <div className="col-3 text-center">
          <a
            href="/"
            className="city-link"
            name="London"
            onClick={props.handleClick}
          >
            London
          </a>
        </div>
        <div className="col-3 text-center">
          <a
            href="/"
            className="city-link"
            name="Paris"
            onClick={props.handleClick}
          >
            Paris
          </a>
        </div>
        <div className="col-3 text-center">
          <a
            href="/"
            className="city-link"
            name="Rome"
            onClick={props.handleClick}
          >
            Rome
          </a>
        </div>
        <div className="col-3 text-center">
          <a
            href="/"
            className="city-link"
            name="New York"
            onClick={props.handleClick}
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
          <form onSubmit={props.handleSubmit}>
            <div className="row">
              <div className="col-9  pl-4">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a City"
                  onChange={props.updateCity}
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

      {weather ? (
        <div>
          <div>
            <h1>{`${weather.name}, ${weather.sys.country}`}</h1>
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
                  <div className="col align-items-right pr-0" id="temp-element">
                    {props.isFahrenheit
                      ? `${Math.round((weather.main.temp * 9) / 5 + 32)}`
                      : `${Math.round(weather.main.temp)}`}
                  </div>
                  <div className="col align-items-left pl-0">
                    °
                    <a href="/" onClick={props.changeToCelsius}>
                      C
                    </a>
                    | °
                    <a href="/" onClick={props.changeToFahrenheit}>
                      F
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row secondary-info justify-content-center align-items-center">
            <div className="col-md-3 mb-2 mb-md-0 ">
              {formatWeekDay(weather.dt * 1000)} {formatTime(weather.dt * 1000)}
            </div>
            <div className="col-md-3 mb-2 mb-md-0 description">
              {weather.weather[0].description}
            </div>
            <div className="col-md-3 mb-2 mb-md-0  ">
              Wind Speed: {weather.wind.speed}m/s
            </div>
            <div className="col-md-3 mb-2 mb-md-0 ">
              Humidity: {weather.main.humidity}%
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
  );
}
