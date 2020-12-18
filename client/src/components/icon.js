import React from 'react'
import sunIcon from "../icons/sunny.svg";
import partCloudy from "../icons/cloudy.svg";
import rain from "../icons/rainy.svg";
import storm from "../icons/storm.svg";
import snow from "../icons/snowing.svg";
import clearMoon from "../icons/moon.svg";

function Icon ({weatherIcon}) {
    switch(weatherIcon) {
        case "01d":
            return <img className="m-auto" src={sunIcon}></img>;

        case "01n":
            return <img className="m-auto" src={clearMoon}></img>;

        case "02d":
        case "02n":
        case "03d":
        case "03n":
        case "04d":
        case "04n":
            return <img className="m-auto" src={partCloudy}></img>;

        case "09d":
        case "09n":
        case "10d":
        case "10n":
        case "50d":
        case "50n":
            return <img className="m-auto" src={rain}></img>

        case "11d":
        case "11n":
            return <img className="m-auto" src={storm}></img>;

        case "13d":
        case "13n":
            return <img className="m-auto" src={snow}></img>
        
        default:
            return(<h1>?</h1>)
    } 

}

export default Icon;