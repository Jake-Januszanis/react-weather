import { urlencoded } from 'body-parser';
import React from 'react';
import bgImg from "../images/weather-bg.jpg";


// App homepage 
function Form () {

    const styles = {
        Image: `url(${bgImg})`,
        Position: "center",
        cover: "cover"
    };

    return(
        <div className="h-screen flex justify-center align-center items-center" style={ {backgroundImage: styles.Image, backgroundPosition: styles.Position, backgroundSize: styles.cover }}>
            <form className="h-1/4 w-full max-w-md rounded-2xl bg-white flex flex-col justify-center items-center ml-4 mr-4" method="POST" action="server.js">
            <label className="text-2xl pb-4 text-gray-500 italic">Enter 5 digit zipcode</label>
                <input className="max-w-md w-6/12 h-7 block pl-2 mb-4 sm:text-sm border-gray-300 border-2 rounded-md focus:outline-none focus:ring-2 focus:border-blue-100" type='number' name='zipcode' placeholder="Zipcode..."required></input>
                <button className="max-w-xs w-auto h-8 mb-8 mt-2 pl-4 pr-4 text-white text-sm md:text-xl shadow-md rounded-2xl bg-blue-500 hover:bg-blue-700"  type="submit">Check Weather</button>            
            </form>
            
        </div>
    )
}

export default Form;

