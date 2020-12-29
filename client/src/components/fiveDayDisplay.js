import React from 'react';
import Icon from './icon'


const FiveDayDisplay = ({days}) => {
 
//Function to convert unix timestamp to actual date.
function dateConvert(date){            
  let newTime = new Date(date * 1000)
  const options = {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
};
return newTime.toLocaleDateString('en-CA', options);
}
    return (
        <div className="flex justify-center text-gray-100 pb-10 ">
            <div className="flex flex-row pb-10 grid grid-cols-2 w-5/6 max-w-lg border-solid border-2 border-white shadow-xl rounded-xl mb-8 gap-2 bg-blue-400 justify-items-center content-center">

                {/* //CARD TITLE AKA THE DATE */}
                <div className="grid text-center col-span-2">
                    <h2 className="text-2xl md:text-4xl font-medium pb-4 border-b-4 border-dotted border-white pt-2">{dateConvert(days.dt)}</h2>
                </div>
                
                {/* Bottom left half of card */}
                <div className="grid col-start-1 text-center content-evenly">
                    <h2><Icon weatherIcon={days.weather[0].icon} /></h2>
                    <h2 className="text-xl md:text-2xl">{days.weather[0].description}</h2>
                </div>

                {/* Bottom right half of card */}
                <div className="grid col-start-2 text-md md:text-lg content-between">
                    <p><span className="font-semibold">Day:</span> {Math.round(days.temp.max)}&#176;F</p>
                    <p><span className="font-bold">Night:</span> {Math.round(days.temp.min)}&#176;F</p>
                    <p><span className="font-bold">Humidity:</span> {days.humidity}%</p>
                    <p><span className="font-bold">Wind:</span> {Math.round(days.wind_speed)} mph</p>
                    <p><span className="font-bold">Chance of Precipitation:</span> {days.pop}% </p>
                </div>
                
            </div>
            </div>
        
    )
}

export default FiveDayDisplay;


 