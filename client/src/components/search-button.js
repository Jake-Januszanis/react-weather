import React from 'react';
import searchIcon from '../icons/search.svg';

function SearchInputButton () {
    
    return(
        <form className="flex justify-center items-center mt-8 mb-6" method="POST" action="server.js">
        <input className="inline w-2/3 h-8 block pl-2 ml-8 border-2 border-gray-50  mobile:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-blue-100 max-w-lg" type='number' name='zipcode' placeholder="Enter new zipcode..." required></input>
        <button className="w-9 h-8 ml-2 text-white block shadow-md rounded-2xl bg-blue-500 hover:bg-blue-700" type="submit" title="Search"><img src={searchIcon} alt="Search icon"></img></button> 
        </form>
    )}
export default SearchInputButton;