import React from "react";

const Weather = props => (
  <div className="weather  ">
    {props.city && props.country && (
      <p>
        <i className="fas fa-compass" /> {props.city}, {props.country}
      </p>
    )}
    {props.temperature && (
      <p>
        <i className="fas fa-thermometer-half" /> {props.temperature} °F
      </p>
    )}
    {props.humidity && (
      <p>
        <i className="fas fa-tint" /> {props.humidity} %{" "}
      </p>
    )}
    {props.description && <p> Conditions: {props.description} </p>}
    {props.error && <p> Error: {props.error}</p>}
  </div>
);

export default Weather;
