import React from 'react';
import searchIcon from '../icons/search.svg';

function Button () {
    
    return(
        <button className="w-9 h-8 mb-4 ml-2 text-white block shadow-md rounded-2xl bg-blue-500 hover:bg-blue-700"  type="submit" title="Search"><img src={searchIcon} alt="Search icon"></img></button>
    )
}

export default Button;