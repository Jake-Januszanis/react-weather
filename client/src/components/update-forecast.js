import React, { useState, useEffect } from "react";
import WeatherDisplay from "./weather-display";

function CurrentForecast () {
    const [state, setState] = useState({
        temp: '',
        name: '',
        description: '',
        humidity: '',
        wind: '',
        dataLoaded: false
    }) 

    
    const callBackendAPI = async() => {
        const response = await fetch('/api-weather');
        const body = await response.json();
        if(body.status !== 200) {
          console.log(body.message)
        }
        console.log(`City: ${body.name}, Temp: ${body.main.temp}, Wind:${body.wind.speed}`)
        return body;
    }
        useEffect(()=> {
            callBackendAPI()
                .then(response => setState({
                    temp: response.main.temp,
                    name: response.name,
                    description: response.weather[0].description,
                    humidity: response.main.humidity,
                    wind: response.wind.speed,
                    dataLoaded: true

                }))
                .catch(error => console.log(error));
                }, [])

    return(
        <div>
            <WeatherDisplay weather={state}/>
        </div>
    )
}

export default CurrentForecast; 