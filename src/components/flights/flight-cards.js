import React from "react";
const FlightCards = ({flightItems}) => {
    return(
        <>
        <div className="py-10 w-4/5 mx-auto">
            <h2 className="text-2xl text-white">Popular Flights</h2>
        
        <div className="flex flex-col md:flex-row sm:grid-cols-2 justify-center gap-3 lg:grid-cols-4 py-10 px-2 md:px-0">
            {flightItems.map((item, index) => (
            <div className="card w-full md:w-96 glass" key={index}>
                <figure><img src={process.env.PUBLIC_URL + item.path} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.destination}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">&#x20A6;{item.price}</button>
                    </div>
                </div>
            </div>))}
        </div>
        </div>
        </>
    )
}

export default FlightCards;