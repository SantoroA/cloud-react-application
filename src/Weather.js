import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiKey = "2b3715c71ce846298a7fbee953bac1d5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
  axios
    .get(`${apiUrl}q=${props.city}&appid=${apiKey}&units=metric`)
    .then(handleResponse);
  return (
    <div>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <h1>Hello from Weather</h1>
    </div>
  );
}
