import React from 'react';

const CartCountry = (props) => {
    const selected = props.selected;
    let population =0;
    const totalSelected = selected.length;
    for (let i = 0; i < selected.length; i++) {
         population = selected[i].population + population;
        
    }
    return (
        <div>
            <p>Coutnry added: {totalSelected}</p>
            <p>Total Population: {population}</p>
        </div>
    );
};

export default CartCountry;