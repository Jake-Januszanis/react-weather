import React from 'react';


const FiveDayDisplay = ({days}) => {
    console.log(days)

//Function to convert unix timestamp to actual date.
function myFunction(date){            
  let newTime = new Date(date * 1000)
  const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
return newTime.toLocaleDateString('en-CA', options);
}
    return(
        <>  
        <div className="flex align-center justify-center">
            <div className="grid grid-cols-2 w-5/6 max-w-lg border-solid border-2 border-black shadow-xl rounded mb-8 gap-2 bg-gray-300 justify-items-center content-center">

                {/* //CARD TITLE AKA THE DATE */}
                <div className="grid text-center col-span-2">
                    <h2 className="text-2xl font-medium pb-4 border-b-4 border-dotted border-black pt-2">{myFunction(days.dt)}</h2>
                </div>
                
                {/* Bottom left half of card */}
                <div className="grid col-start-1">
                    <h1 className="text-5xl font-bold">{Math.round(days.temp.max)}&#176;F</h1>
                    <h2>Icon: {days.weather[0].icon}</h2>
                    <h2>{days.weather[0].description}</h2>
                </div>

                {/* Bottom right half of card */}
                <div className="grid col-start-2 text-md pb-6">
                    <h1><span className="font-bold">Day:</span> {Math.round(days.temp.max)}&#176;F</h1>
                    <h1><span className="font-bold">Night:</span> {Math.round(days.temp.min)}&#176;F</h1>
                    <h4><span className="font-bold">Humidity:</span> {days.humidity}%</h4>
                    <h5><span className="font-bold">Wind:</span> {Math.round(days.wind_speed)} mph</h5>
                    <h5><span className="font-bold">Precipitation:</span> {days.pop}% </h5>
                </div>
                
            </div>
            </div>
        
        
        </>
    )
}

export default FiveDayDisplay;


 