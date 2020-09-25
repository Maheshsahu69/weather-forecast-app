import React from 'react';
import './WeatherBody.css';
import Days from './Days';
import Icon from './Icon';
import Temp from './Temp'

const WeatherBody = (props) =>{
    return(
        <div className="weatherBody card">
            <Days day={props.day}/>
            <Icon icon={ props.icon}/>
            <Temp minTemp={props.minTemp} maxTemp={props.maxTemp} description={props.description}/>
        </div>
    )
}
export default WeatherBody ;