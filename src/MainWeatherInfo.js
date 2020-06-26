import React from "react";
import { formatTime, formatWeekDay } from "./helpers";
import Loader from "react-loader-spinner";
import ReactAnimatedWeather from "react-animated-weather";
import "./MainWeatherInfo.css";
import WeatherCodes from "./WeatherCodes";

export default function MainWeatherInfo(props) {
  let weather = props.weatherInfo;
  return (
    <div className="MainWeatherInfo container">
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
            onClick={props.getPosition}
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
                  icon={WeatherCodes[weather.weather[0].icon]}
                  color={"#584153"}
                  size={100}
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
                    <a
                      href="/"
                      className={
                        props.isFahrenheit
                          ? "unactiveLink pr-1"
                          : "activeLink pr-1"
                      }
                      onClick={props.changeToCelsius}
                    >
                      °C
                    </a>
                    |
                    <a
                      href="/"
                      className={
                        props.isFahrenheit
                          ? "activeLink pl-1"
                          : "unactiveLink pl-1"
                      }
                      onClick={props.changeToFahrenheit}
                    >
                      °F
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row secondary-info justify-content-around">
            <div className="info-box align-items-center mx-4 mx-md-1 col-md mb-2 mb-md-0 shadow-sm">
              {formatWeekDay(weather.dt * 1000)} {formatTime(weather.dt * 1000)}
            </div>
            <div className="info-box align-items-center mx-4 mx-md-1 col-md mb-2 mb-md-0 shadow-sm description">
              {weather.weather[0].description}
            </div>
            <div className="info-box mx-4 align-items-center mx-md-1 col-md mb-2 mb-md-0 shadow-sm ">
              Wind Speed: {weather.wind.speed}m/s
            </div>
            <div className="info-box mx-4 align-items-center mx-md-1  col-md mb-2 mb-md-0 shadow-sm">
              Humidity: {weather.main.humidity}%
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2>Please insert a city</h2>
          <Loader
            type="Hearts"
            color="#584153"
            height={100}
            width={100}
            //   timeout={3000}
          />
        </>
      )}
    </div>
  );
}
