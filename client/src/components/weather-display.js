import React from 'react';
import Button from "./button";
import Error from "./error";
import Icon from "./icon";


const WeatherDisplay = ({weather}) => {
    
    function dateConvert(date){    //Function to convert unix timestamp to actual date.
        let newTime = new Date(date * 1000)
        const options = {
        weekday: 'long',
        // year: 'numeric',
        month: 'short',
        day: 'numeric'
      };
      return newTime.toLocaleDateString('en-CA', options);
      }
      
      function timeConvert(time){
          let timeObj = new Date(time * 1000)
          let hour = (timeObj.getHours() % 12);
          let minute = timeObj.getMinutes();
          return `${hour}:${minute}`
      }
    

    if (weather.dataLoaded === true) {
    return(
        <div className="h-screen">
        <Button />
        <div className="relative h-5/6 rounded-xl text-center bg-blue-400 text-gray-50 justify-around mr-6 ml-6 mt-5">
        <h1 className="text-2xl font-medium mb-1 pt-10 pb-2">{weather.name}</h1>
        <h1 className="pb-6">{dateConvert(weather.timestamp)}</h1>
        <Icon weatherIcon={weather.icon}/>
        <h2 className="text-6xl font-bold pt-2 pb-2">{Math.round(weather.temp)}&#176;F</h2>
        <h3 className="text-xl">{weather.description}</h3>
       

        {/* //Bottom half of display card && grid  */}

        <div className="h-2/6 rounded-xl absolute bottom-0 w-full grid grid-cols-2 grid-rows-2 border-2 border-solid">

        <h4 className="text-xl font-thin border-r-2 border-solid"><span className="block font-bold">Humidity:</span> {weather.humidity}%</h4>
        <h4 className="text-xl font-thin"><span className="block font-bold">Wind:</span> {Math.round(weather.wind)} mph</h4>
        <h4 className="text-xl font-thin border-r-2 border-t-2 border-solid"><span className="block font-bold">Sunrise: </span>{timeConvert(weather.sunrise)}am</h4>
        <h4 className="text-xl font-thin border-t-2 border-solid"><span className="block font-bold">Sunset: </span>{timeConvert(weather.sunset)}pm</h4>
        </div>
        </div>
        </div>
    )
} else {
    return(
        <Error />
    )
}}

export default WeatherDisplay;