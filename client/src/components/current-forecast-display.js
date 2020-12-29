import React, { useState } from 'react';
import FetchExtForecast from './fetch-extended-forecast'
import SearchInputButton from "./search-button";
import Error from "./error";
import Icon from "./icon";
import Footer from "./footer";



const CurrentForecastDisplay = ({weather}) => {

    const [state, updateExtend] = useState({
        extend: false
    }) 

    function handleClick() {
        updateExtend({extend: true});
    }
    
    //Function to convert unix timestamp to actual date*****
    function dateConvert(date){    
        let newTime = new Date(date * 1000)
        const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
      };
      return newTime.toLocaleDateString('en-CA', options);
      }
      
    //   Function for converting unix timestamp to current time*****
      function timeConvert(time){
          let timeObj = new Date(time * 1000)
          let hour = (timeObj.getHours() % 12);
          let minute = timeObj.getMinutes();
          return `${hour}:${minute}`
      }
    

    if (weather.dataLoaded === true) {
    return(
        <div className="h-screen max-w-3xl m-auto mb-24 md:mb-0">

        {/* Input//Button display for searching another zipcode */}
        <SearchInputButton />

        {/* Top part of current weather display */}
        <div className="relative h-5/6 lg:h-4/5 rounded-xl text-center bg-blue-400 text-gray-50 justify-around mr-6 ml-6 mt-5 mb-10">
        <h1 className="text-2xl md:text-4xl font-medium mb-1 pt-10 pb-2">{weather.name}</h1>
        <h1 className="pb-6 md:text-lg">{dateConvert(weather.timestamp)}</h1>
        <Icon weatherIcon={weather.icon}/>
        <h2 className="text-6xl md:text-7xl font-bold pt-4 pb-2">{Math.round(weather.temp)}&#176;F</h2>
        <h3 className="text-xl md:text-2xl">{weather.description}</h3>
       

        {/* //Bottom half of display card && grid  */}
        <div className="text-xl md:text-2xl font-thin h-2/6 rounded-xl absolute bottom-0 w-full grid grid-cols-2 grid-rows-2 border-2 border-solid">

        <h4 className="border-r-2 border-solid"><span className="block font-bold">Humidity:</span> {weather.humidity}%</h4>
        <h4 className=""><span className="block font-bold">Wind:</span> {Math.round(weather.wind)} mph</h4>
        <h4 className="border-r-2 border-t-2 border-solid"><span className="block font-bold">Sunrise: </span>{timeConvert(weather.sunrise)}am</h4>
        <h4 className="border-t-2 border-solid"><span className="block font-bold">Sunset: </span>{timeConvert(weather.sunset)}pm</h4>
        </div>
        </div>

        {/* ****Conditional statements for displaying extended forecast display**** */}
            {state.extend === true ? <FetchExtForecast latitude={weather.lat} longitude={weather.long}/> : null}
            {state.extend === false ? <button className="ml-auto mr-auto w-auto h-8 mb-4 pl-4 pr-4 text-white block shadow-md rounded-2xl bg-blue-500 hover:bg-blue-700" onClick={handleClick}>Extended forecast</button> : null}
        
        <Footer />
        </div>
    )
} else {
    return(
        <Error />
    )
}}

export default CurrentForecastDisplay;