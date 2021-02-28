import React from 'react';
import './Country.css';

//country={country} দিয়ে country.js যে send করছে props দিয়ে টা received করছে
const Country = (props) => {
    // console.log(props);

    const {name, capital, flag, region} = props.country;  //this is called Destructuring
    const handleAddCountry = props.handleAddCountry; //received handleAddCountry 
    return (
        <div className="country-area">
            <h3>This is a country <span>{name}</span></h3>
            <h4>Capital: {capital} </h4>
            <h4>Region: {region}</h4>
            <p><img src={flag} alt=""/></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;