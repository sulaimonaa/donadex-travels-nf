import Passengers from "./Passengers"

export const NoPassengers = () => {
    const paxCount = {...Passengers};
    const paxN = paxCount.adultCount;
    return(
        <h2>{paxN}</h2>
    )
}