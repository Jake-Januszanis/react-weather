import React, { useState, useEffect } from "react";
import CurrentForecastDisplay from "./current-forecast-display";
import WeatherDisplay from "./current-forecast-display";


function CurrentForecast () {

    const [weatherData, setState] = useState({
       dataLoaded: false,
       temp:'',
        name: '',
        description: '',
        humidity: '',
        wind: '',
        long: '',
        lat: '',
        timestamp: ''
    })

    // Call function and update state with response from server
        useEffect(()=> {
            callBackendAPI() 
                .then(response => setState({
                    temp: response.main.temp,
                    name: response.name,
                    description: response.weather[0].description,
                    humidity: response.main.humidity,
                    wind: response.wind.speed,
                    dataLoaded: true,
                    long: response.coord.lon,
                    lat: response.coord.lat,
                    timestamp: response.dt,
                    icon: response.weather[0].icon,
                    sunrise: response.sys.sunrise,
                    sunset: response.sys.sunset
                }))
                .catch(error => console.log(error));
                }, [])


        // function for getting weather data from weather api
        const callBackendAPI = async() => {
            const response = await fetch('/api-weather');
            const body = await response.json();
                if (body.status !== 200) {
                    console.log(body.message);
                    } return body;
                }
       
    return(
        <div> 
            {weatherData.dataLoaded === true ? <CurrentForecastDisplay weather={weatherData}/> : <h1 className="animate-spin text-center text-2xl">...</h1>}
        </div>
    )
}

export default CurrentForecast