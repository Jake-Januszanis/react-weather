import React, { useState, useEffect } from "react";
import ExtendButton from "./extend-forecast-button";
import FetchForecast from "./fetch-forecast";
import WeatherDisplay from "./weather-display";


function CurrentForecast () {
    const [state, setState] = useState({
       dataLoaded: false,
       temp:'',
        name: '',
        description: '',
        humidity: '',
        wind: '',
        long: '',
        lat: ''
    })
    const [extend, updateExtend] = useState({
        extend: false
    }) 
    function handleClick() {
        updateExtend({extend: true});
    }

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
                    lat: response.coord.lat
                }))
                .catch(error => console.log(error));
                }, [])

        const callBackendAPI = async() => {
            const response = await fetch('/api-weather');
            const body = await response.json();
                if (body.status !== 200) {
                    console.log(body.message);
                    } return body;
                }
       
    return(
        <div>
            {state.dataLoaded === true ? <WeatherDisplay weather={state}/> : <h1 className="text-center">...loading please wait</h1>}
            {extend.extend === true ? <FetchForecast latitude={state.lat} longitude={state.long}/> : null}
            <button onClick={handleClick}>Check 5 day forecast</button>
            
        </div>
    )
}

export default CurrentForecast