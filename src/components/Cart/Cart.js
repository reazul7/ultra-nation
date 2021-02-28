import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
        
    // }

    //for loop কাজটাই reduce দিয়ে করছে
    const totalPopulation = cart.reduce( (sum, country) => sum + country.population,0)
    return (
        <div>
            <h2>This is a Cart: {cart.length}</h2>
            <h6>Total Population: {totalPopulation}</h6>
        </div>
    );
};

export default Cart;