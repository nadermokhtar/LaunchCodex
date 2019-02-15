import React from "react";

const Weather = props => (

    <div>
      {props.city && props.country && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
      {props.temperature && <p>Temp: {props.temperature}</p>}
      {props.humidity && <p> Humidity %: {props.humidity} </p>}
      {props.description && <p> Conditions: {props.description} </p>}
      {props.error && <p> Error: {props.error}</p>}
    </div>

);

export default Weather;