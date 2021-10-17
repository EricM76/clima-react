import React from 'react';

const días = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]


const Card = ({fecha,tempMax, tempMin, icon}) => {
    const getWeekDay = (fecha) => {
        return días[new Date(fecha).getDay()]
      }
    return (
        <div className="card">
        <h5>{getWeekDay(fecha)}</h5>
        <h6>{fecha}</h6>
        <img src={`./icons/${icon}.png`} alt="Clima diario" className="imagebottom" />
        <div className="minmax">
            <p>
                <span className="tempmax" />
                {tempMax}°
            </p>
            <p>
                <span className="tempmin" />
                {tempMin}°
            </p>
        </div>
    </div>
    );
}

export default Card;
