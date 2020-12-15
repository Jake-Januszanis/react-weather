import React from 'react';


const FiveDayDisplay = ({days}) => {
    console.log(days)

function myFunction(date){            //Function to convert unix timestamp to actual date.
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
    return(
        <>
        <div className="w-full items-center flex flex-col text-center">
        <div className="flex flex-col pl-8 pr-8 w-full lg:max-width-1/6">
        <h2 className = "text-xl font-medium">{myFunction(days.dt)}</h2>
        <h2>{days.weather[0].main}</h2>
        <h1>{Math.round(days.temp.max)}&#176;F</h1>
        <h4>Humidity: {days.humidity}%</h4>
        <h5 className="mb-6 pb-6 border-b-8 border-dotted">Wind: {Math.round(days.wind_speed)} mph</h5>
        </div>
        </div>
        </>
    )
}

export default FiveDayDisplay;


 