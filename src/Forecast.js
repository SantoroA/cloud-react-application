import React from "react";
import { formatWeekDay } from "./helpers";
import Loader from "react-loader-spinner";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast(props) {
  let forecast = props.forecastInfo.list;
  return (
    <div className="forecast container">
      {props.forecastInfo ? (
        <div className="row justify-content-around">
          <div className="col-4 col-md-2 mb-4 mb-md-0">
            <p>{formatWeekDay(forecast[8].dt * 1000)}</p>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#584153"}
              size={"50%"}
              animate={true}
            />
            <p>
              {props.isFahrenheit
                ? `${Math.round((forecast[8].main.temp * 9) / 5 + 32)}°F`
                : `${Math.round(forecast[8].main.temp)}°C`}
              <br />
              {forecast[8].weather[0].main}
            </p>
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
