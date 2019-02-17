import React, { Component } from 'react';
import Weather from "../components/Wearther"

const API_KEY = "c31d034bd01aeb553b868c53771bd742"

class WeatherApp extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }



  componentWillReceiveProps() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.coordinates.lat}&lon=${this.props.coordinates.lng}&appid=${API_KEY}&units=imperial`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        temperature: body.main.temp,
        city: body.name,
        humidity: body.main.humidity,
        country: body.sys.country,
        description: body.weather[0].description,
        error: ''})}
  )
}

  render() {
    return (
      <div  >
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={
            this.state.humidity
          }
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default WeatherApp;