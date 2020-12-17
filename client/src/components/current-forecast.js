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
        lat: '',
        timestamp: ''
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
                    lat: response.coord.lat,
                    timestamp: response.dt
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
            <div className="flex align-center justify-center">
            {extend.extend === false ? <button className="w-auto h-8 mb-4 ml-2 pl-4 pr-4 text-white block shadow-md rounded-2xl bg-blue-500 hover:bg-blue-700" onClick={handleClick}>Extended forecast</button> : null}
            </div>
        </div>
    )
}

export default CurrentForecast