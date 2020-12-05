import React from 'react';

function Form () {

    return(
        <div>
            <form className="h-auto flex flex-col justify-center items-center" method="POST" action="../server.js">
                <label className="text-4xl mb-6 text-gray-600">Enter 5 digit zipcode</label>
                <input className="max-w-md w-6/12 h-7 block pl-2 mb-4 sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-blue-300" type='number' name='zipcode' placeholder="Enter zipcode..."required></input>
                <button className="max-w-xs w-3/12 h-8 mb-8 text-white text-sm md:text-xl block shadow-md rounded-2xl bg-blue-500 hover:bg-blue-700"  type="submit">Check Weather</button>
            </form>
            
        </div>
    )
}

export default Form;