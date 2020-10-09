import React, { useEffect, useState } from 'react';

import './App.css';
import CartCountry from './components/CartCountry/CartCountry';
import Countries from './components/Countries/Countries';


function App() {

  const [countries, setCountries]= useState([])
  // console.log(countries);
  const[selected, setSelected] = useState([])

  useEffect(()=>{

    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=> res.json())
    .then(data=> setCountries(data))

  },[])
  const handleClick =(country)=> {
    // console.log('You clicked', country);
    const newSelected = [...selected, country];
    setSelected(newSelected);
  }
  return (
    <div className="App">
      
      <h1>Country Loaded: {countries.length}</h1>
      <p>Selected Coutries: {selected.length}</p>
      <CartCountry selected={selected}></CartCountry>
      
      
        {countries.map(country=>
           <Countries 
            country ={country}
            handleClick={handleClick}
           ></Countries> )}
      
    </div>
  );
}

export default App;
