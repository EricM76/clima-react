import React from 'react';

const Top = ({current, location}) => {
    return (
        <div className="top">
        <img src={`./icons/${current.weather.icon}.png`} alt="Clima principal" className="image" />
        <p className="temp">{current.temp}</p>
        <h2 className="city">{location.city_name}, {location.country_code}</h2>
        <div className="temphr">Max: {current.max_temp} °C, Min: {current.min_temp} °C, H: {current.rh} %</div>
      </div>
    );
}

export default Top;
