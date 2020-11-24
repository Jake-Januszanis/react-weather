import React from 'react';

const WeatherDisplay = (props) => {
    
    console.log(props.weather)
    return(
        <div className="weather-display">
        <div className="weather-display-container">
        <h1>Todays Forecast: </h1>
        <h1>{props.weather.name}</h1>
        <h2>Temp: {Math.round(props.weather.temp)}&#176;F</h2>
        <h3>{props.weather.description}</h3>
        <h4>humidity: {props.weather.humidity}</h4>
        <h5>Wind: {props.weather.wind} mph</h5>
        </div>
        </div>
    )
}

export default WeatherDisplay;