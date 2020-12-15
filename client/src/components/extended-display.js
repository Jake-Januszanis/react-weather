import React from "react";


const ExtendedDisplay = ({day}) => {

// const arr = [1607972400, 1608058800, 1608145200, 1608231600, 1608318000];
const arr = day.map(eachDay => eachDay.dt);

const convertDate = arr.map(myFunction);

function myFunction(date){
  let newTime = new Date(date * 1000)
  const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  // timeZoneName: 'long'
};
  
console.log(newTime.toLocaleDateString('en-CA', options));
}




    return(
        <div>
            <h1>ExtendedDisplay Component</h1>
            <p>{day[0].dt}</p>
            <p>{day[1].dt}</p>
            <p>{day[2].dt}</p>
            <p>{day[3].dt}</p>
            <p>{day[4].dt}</p>
        </div>
    )
}

export default ExtendedDisplay;