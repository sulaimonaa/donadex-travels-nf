import React from "react";
import FlightCards from "./flights/flight-cards";

const flightPark = [
    {
        destination: 'Abuja',
        description: 'Round Trip',
        path: require('../assets/flight1.jpg'),
        price: 56000
    },
    {
        destination: 'Benin',
        description: 'Round Trip',
        path: require('../assets/flight1.jpg'),
        price: 56000
    },
    {
        destination: 'Benin',
        description: 'One Way',
        path: require('../assets/flight1.jpg'),
        price: 56000
    }
]

const PopularFlights = () => {
    return(
        <div className="bg-gray-900">
            <FlightCards 
                flightItems={flightPark}
            />
        </div>
    )
}

export default PopularFlights;