import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <p className="text-center small">
        This website was coded by Aline Santoro and is open-sourced on
        <a href="https://github.com/SantoroA/cloud-react-application">
          GitHub
        </a>{" "}
        and hosted on
        <a href="https://suspicious-brattain-a20b89.netlify.app/">Netlify</a>.
      </p>
    </div>
  );
}

export default App;
