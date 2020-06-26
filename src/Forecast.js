import React from "react";
import Loader from "react-loader-spinner";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast(props) {
  return (
    <div className="forecast container">
      {props.forecastCity ? (
        <div className="row justify-content-around">
          <div className="col-4 col-md-2 mb-4 mb-md-0">
            <p>Tue</p>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#584153"}
              size={"50%"}
              animate={true}
            />
            <p>19°C</p>
          </div>
          <div className="col-4 col-md-2 mb-4 mb-md-0">
            <p>Wed</p>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#584153"}
              size={"50%"}
              animate={true}
            />
            <p>19°C</p>
          </div>
          <div className="col-4 col-md-2 mb-4 mb-md-0">
            <p>Thu</p>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#584153"}
              size={"50%"}
              animate={true}
            />
            <p>19°C</p>
          </div>
          <div className="col-4 col-md-2 mb-4 mb-md-0">
            <p>Fri</p>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#584153"}
              size={"50%"}
              animate={true}
            />
            <p>19°C</p>
          </div>
          <div className="col-4 col-md-2 mb-4 mb-md-0">
            <p>Sat</p>
            <ReactAnimatedWeather
              icon={"CLEAR_DAY"}
              color={"#584153"}
              size={"50%"}
              animate={true}
            />
            <p>19°C</p>
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
