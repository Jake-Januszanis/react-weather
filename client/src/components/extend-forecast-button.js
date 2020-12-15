import React from 'react';


const ExtendButton = () => {
    return (
        <div>
        <form method="POST" action="/fetch-forecast">
        <button className="w-auto h-8 mb-4 ml-2 text-white block shadow-md rounded-2xl bg-blue-500 hover:bg-blue-700">Check 5 day forecast</button>
        </form>
        </div>
    )
}

export default ExtendButton;