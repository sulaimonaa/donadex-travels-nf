import React, { useState } from "react"
// import { useForm } from "react-hook-form"

export const NoPassengers = (props) => {

    return(
        <h2>{props.totalPax} Passengers</h2>
    )
}


const Passengers = ({ updateTotalPax, updatedAdult, updatedChildren, updatedInfant }) => {

    const [passengerSelection, setPassengerSelection] = useState(false);
    const [adultCount, setAdultCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);

    const incAdultCount = () => {
        setAdultCount(adultCount + 1);
        updatedAdult(adultCount + 1);
        updateTotalPax(adultCount + 1 + childrenCount + infantCount);
    }
    const decAdultCount = () => {
        let countAdult = adultCount - 1;
        if (countAdult < 1) {
            setAdultCount(1)
        } else {
        setAdultCount(adultCount - 1);
        }
        updatedAdult(adultCount - 1);
        updateTotalPax(adultCount - 1 + childrenCount + infantCount);
    }
    // children
    const incChildrenCount = () => {
        setChildrenCount(childrenCount + 1);
        updatedChildren(childrenCount + 1);
        updateTotalPax(adultCount + childrenCount + 1 + infantCount);
    }
    const decChildrenCount = () => {
        let countChildren = childrenCount - 1;
        if (countChildren < 0) {
            setChildrenCount(0)
        } else {
        setChildrenCount(childrenCount - 1);
        }
        updatedChildren(childrenCount - 1);
        updateTotalPax(adultCount + childrenCount - 1 + infantCount);
    }
    // infant
    const incInfantCount = () => {
        setInfantCount(infantCount + 1);
        updatedInfant(infantCount + 1);
        updateTotalPax(adultCount + childrenCount + infantCount + 1);
    }
    const decInfantCount = () => {
        let countInfant = infantCount - 1;
        if (countInfant < 0) {
            setInfantCount(0)
        } else {
        setInfantCount(infantCount - 1);
        }
        updatedInfant(infantCount - 1);
        updateTotalPax(adultCount + childrenCount + infantCount - 1);
    }
    const setPassenger = () => {
        setPassengerSelection(true);
    }

    const remPaxSelection = () => {
        setPassengerSelection(false);
    }

    const totalPax = adultCount + childrenCount + infantCount;
    
    return (
        <>
        <div type="number" className="flex gap-2 text-white font-bold" onClick={setPassenger}><NoPassengers totalPax={totalPax}/></div>
        
        <div className={passengerSelection ? 'block absolute top-10 left-0 bg-white rounded-sm p-4' : 'hidden'}>
        <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-0 w-24">
                    <h4>Adults</h4>
                    <p className=" flex text-[10px]">&gt; 12 years</p>
                </div>
                <div className="flex items-center justify-center">
                    <span className="bg-gray-100 w-10 h-10 rounded-sm justify-center font-bold flex items-center" onClick={decAdultCount}>-</span>
                </div>
                <div>
                    {adultCount}
                </div>
                <div className="flex items-center justify-center">
                    <span className="bg-sky-300 w-10 h-10 rounded-sm justify-center font-bold flex items-center" onClick={incAdultCount}>+</span>
                </div>
            </div>
            <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-0 w-24">
                    <h4>Children</h4>
                    <p className=" flex text-[10px]">2 - 12 years</p>
                </div>
                <div className="flex items-center justify-center">
                    <span className="bg-gray-100 w-10 h-10 rounded-sm justify-center font-bold flex items-center" onClick={decChildrenCount}>-</span>
                </div>
                <div>
                    {childrenCount}
                </div>
                <div className="flex items-center justify-center">
                    <span className="bg-sky-300 w-10 h-10 rounded-sm justify-center font-bold flex items-center" onClick={incChildrenCount}>+</span>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div className="flex flex-col gap-0 w-24">
                    <h4>Infants</h4>
                    <p className=" flex text-[10px]">&lt; 12 years</p>
                </div>
                <div className="flex items-center justify-center">
                    <span className="bg-gray-100 w-10 h-10 rounded-sm justify-center font-bold flex items-center" onClick={decInfantCount}>-</span>
                </div>
                <div>
                    {infantCount}
                </div>
                <div className="flex items-center justify-center">
                    <span className="bg-sky-300 w-10 h-10 rounded-sm justify-center font-bold flex items-center" onClick={incInfantCount}>+</span>
                </div>
            </div>
            <div className="flex justify-end">
                <button className="bg-sky-500 py-2 px-4 text-white font-bold rounded-md" type="button" onClick={remPaxSelection}>Done</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Passengers;