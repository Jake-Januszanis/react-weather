
import React, { useState, useEffect} from "react";
import ExtendedDisplay from "./extended-display";
import Error from './error';


const FetchForecast = ({latitude, longitude}) => {
    console.log(longitude)
    console.log(latitude)
    const [state, updateState] = useState({
        isDataLoaded: false,
        latitude: latitude,
        longitude: longitude
    })
    const getExtendedForecast = async() => {
        const response = await fetch(`/extended-forecast/${state.latitude}/${state.longitude}`);
        const body = await response.json();
            if (body.status !== 200) {
                console.log(body.message);
                } return body;
            }

    
    useEffect(() => {
        getExtendedForecast()
        .then(res => updateState({data: res.daily, isDataLoaded: true}))
        
        }, [])

        return(
            <div>
            {state.isDataLoaded === true ? <ExtendedDisplay day={state.data}/> : <h1>Loading please wait...</h1>}
            {/* { state.isDataLoaded === true ? <ExtendedDisplay props={state} /> : <Error /> } */}
            </div>
        )
}

export default FetchForecast;