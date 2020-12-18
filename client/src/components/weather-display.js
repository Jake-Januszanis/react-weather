import React from 'react';
import Button from "./button";
import Error from "./error";
import Icon from "./icon";


const WeatherDisplay = ({weather}) => {

    function myFunction(date){    //Function to convert unix timestamp to actual date.
        let newTime = new Date(date * 1000)
        const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // timeZoneName: 'long'
      };
      return newTime.toLocaleDateString('en-CA', options);
      }
    

    if (weather.dataLoaded === true) {
    return(
        <div className="weather-display text-center">
        <form className="flex justify-center items-center" method="POST" action="server.js">
        <input className="inline w-2/3 h-8 block pl-2 mb-4 ml-8 sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-blue-300 max-w-lg" type='number' name='zipcode' placeholder="Enter new zipcode..." required></input>
        <Button />
        </form>
        <div className="weather-display-container text-center text-gray-700 flex-col justify-around mb-6 mt-5 pb-6">
        
        <h1 className="text-2xl font-semibold mb-1">Current Weather: </h1>
        <h1 className="font-medium">{myFunction(weather.timestamp)}</h1>
        <h1 className="text-xl font-medium mb-1">{weather.name}</h1>
        <h2 className="text-6xl font-bold">{Math.round(weather.temp)}&#176;F</h2>
        <Icon weatherIcon={weather.icon}/>
        <h3 className="text-xl">{weather.description}</h3>
        <h4 className="font-semibold"><span className="font-bold">Humidity:</span> {weather.humidity}%</h4>
        <h5 className="font-semibold"><span className="font-bold">Wind:</span> {Math.round(weather.wind)} mph</h5>
        </div>
        </div>
    )
} else {
    return(
        <Error />
    )
}}

export default WeatherDisplay;