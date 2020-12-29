import React from "react";
import FiveDayDisplay from "./fiveDayDisplay";


const ExtendedForecast = ({day}) => {
return (
    day.slice(1,6).map(daily => {
        return <FiveDayDisplay key={daily.dt} days={daily} />
    })
)

}


export default ExtendedForecast;