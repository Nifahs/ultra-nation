import React from 'react';
import '../Countries/Countries.css'

const Countries = (props) => {
    // console.log(props);
    const {name, region, population, flag, capital} = props.country;
    const handleClick = props.handleClick;

    return (
        <div className ='country-container'>
            <div className = 'country-card'>
            <img src={flag} alt=""/>
            <h4>Country: {name}</h4>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={()=>handleClick(props.country)} className="add-country-btn">Check Country</button>
            </div>

        </div>
    );
};

export default Countries;