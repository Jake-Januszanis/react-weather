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
        const response = await fetch('/current-forecast');
        const body = await response.json();
        if(body.status !== 200) {
          console.log(body.message)
        }
        console.log(`City: ${body.name}, Temp: ${body.main.temp}, Wind:${body.wind.speed}`)
        return body;
    }
        useEffect(()=> {
            callBackendAPI()
                .then(res => setState({
                    temp: res.main.temp,
                    name: res.name,
                    description: res.weather[0].description,
                    humidity: res.main.humidity,
                    wind: res.wind.speed,
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