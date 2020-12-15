import React from "react";
import FiveDayDisplay from "./fiveDayDisplay";


const ExtendedDisplay = ({day}) => {
return (
    day.slice(1,6).map(daily => {
        return <FiveDayDisplay key={daily.dt} days={daily} />
    })
)
const unixArr = day.map(eachDay => eachDay.dt);

// const convertDate = unixArr.map(myFunction);

// function myFunction(date){
//   let newTime = new Date(date * 1000)
//   const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   // timeZoneName: 'long'
// };
// const timeStamp = newTime.toLocaleDateString('en-CA', options)
// console.log(timeStamp);
}


export default ExtendedDisplay;