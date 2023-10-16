import React from "react";

const FlightCards = ({flightItems}) => {
    return(
        <>
        <div className="py-10 w-4/5 mx-auto">
            <h2 className="text-2xl text-white font-bold">Latest Flight Deals</h2>
        
        <div className="flex flex-wrap flex-col md:flex-row sm:grid-cols-2 justify-center gap-3 lg:grid-cols-4 py-10 px-2 md:px-0">
            {flightItems.map((item, index) => (
            <div className="relative bg-gray-100 w-full md:w-96 glass" key={index}>
                <img src={item.path} alt="car!"/>
                    <h2 className="absolute top-4 pl-2 text-white font-bold">{item.destination}</h2>
                    
                    <div className="absolute px-2 bottom-4 w-full items-center flex justify-between gap-2">
                    <p className="text-white font-bold">{item.description}</p>
                    <button className="bg-sky-900 text-white rounded-sm px-4 py-2 font-bold">&#x20A6;{item.price}</button>
                    </div>
                <div className='w-full h-full bg-gray-900/25 absolute top-0 left-0'></div>
            </div>))}
        </div>
        </div>
        </>
    )
}

export default FlightCards;