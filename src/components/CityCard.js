import React from 'react';

const cities=[
    {
        name: "Sydney",
        temp:"22"
    },
    {
        name: "Shanghai",
        temp:"22"
    },
    {
        name: "New York",
        temp:"22"
    },
    {
        name: "London",
        temp:"22"
    }
]


function CityCard() {
    return (
        <div style={{display: "flex"}}>
            {cities.map(city=>(
                <div style={{margin: "10px"}}>
                   <div>
                      <div>{city.name}</div>
                      <div>{city.temp}</div>
                   </div>
                </div>
            ))}
        </div>

    )
}

export default CityCard;