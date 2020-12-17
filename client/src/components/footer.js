 import React from 'react';
 import gitIcon from "../icons/github.svg";
 import homeIcon from "../icons/home.svg"


 const Footer = () => {


    return (
        <div>
        <div className="text-center bg-gray-200">
        <a href="/" title="Home"><img className="inline-block"src={homeIcon}></img></a>
        <a href="https://github.com/Jake-Januszanis/react-weather" target="_blank" title="Github Repo"><img className="inline-block"src={gitIcon}></img></a>
        </div>
        <div className="text-center text-xs">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
 }

 export default Footer;