import React from "react";
import WeatherCodes from "./WeatherCodes";
import { formaForecastWeekDay } from "./helpers";
import Loader from "react-loader-spinner";
import ReactAnimatedWeather from "react-animated-weather";
import "./Forecast.css";

export default function Forecast(props) {
  let forecast = props.forecastInfo;
  return (
    <div className="Forecast container">
      {props.forecastInfo ? (
        <div className="row justify-content-around">
          {forecast.map((day, i) => (
            <div key={i} className="col-sm mx-5 mx-sm-0 mb-4 mb-md-0 px-1">
              <div className="info-box shadow-sm ">
                <p className="forecastWeekDay">
                  {formaForecastWeekDay(day.dt * 1000)}
                </p>
                <ReactAnimatedWeather
                  icon={WeatherCodes[day.weather[0].icon]}
                  color={"#584153"}
                  size={50}
                  animate={true}
                />
                <p>
                  {props.isFahrenheit
                    ? `${Math.round((day.main.temp * 9) / 5 + 32)}°F`
                    : `${Math.round(day.main.temp)}°C`}
                  <br />
                  {day.weather[0].main}
                </p>
              </div>
            </div>
          ))}
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
