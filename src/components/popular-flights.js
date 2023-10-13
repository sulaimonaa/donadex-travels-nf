import React from "react";
import FlightCards from "./flights/flight-cards";

const flightPark = [
    {
        destination: 'Abuja',
        description: 'Enjoy seemless flight to abuja, the land of possibilities',
        path: require('../assets/flight1.jpg'),
        price: 56000
    },
    {
        destination: 'Benin',
        description: 'Enjoy seemless flight to benin, the land of possibilities',
        path: require('../assets/flight1.jpg'),
        price: 56000
    },
    {
        destination: 'Benin',
        description: 'Enjoy seemless flight to benin, the land of possibilities',
        path: require('../assets/flight1.jpg'),
        price: 56000
    }
]

const PopularFlights = () => {
    return(
        <FlightCards 
            flightItems={flightPark}
        />
    )
}

export default PopularFlights;