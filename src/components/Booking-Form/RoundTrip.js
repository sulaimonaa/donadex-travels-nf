import { useForm } from "react-hook-form";
import Passengers from "./Passengers";
import { useState } from "react";


const RoundTrip = () => {
    const { register, handleSubmit, setValue } = useForm();

    const [totalPax, setTotalPax] = useState(1);
    const [adultPax, setAdultCount] = useState(1);
    const [childrenPax, setChildrenCount] = useState(0);
    const [infantPax, setInfantCount] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
  };

  const updateTotalPax = (newTotalPax) => {
    setTotalPax(newTotalPax);
    setValue("No of Passengers", newTotalPax); // Update the hidden field
  };

  const updatedAdult = (newTotalAdult) => {
    setAdultCount(newTotalAdult);
    setValue("No of Adult", newTotalAdult); // Update the hidden field
  };

  const updatedChildren = (newTotalChidren) => {
    setChildrenCount(newTotalChidren);
    setValue("No of Children", newTotalChidren); // Update the hidden field
  };

  const updatedInfant = (newTotalInfant) => {
    setInfantCount(newTotalInfant);
    setValue("No of Infants", newTotalInfant); // Update the hidden field
  };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3">
            <div className="bg-sky-500/25 p-2 rounded-sm">
                <select type="text" {...register("selectedOption", )} className=" bg-transparent text-white font-bold">
                    <option value='Economy'>Economy</option>
                    <option value='Premium Economy'>Premium Economy</option>
                    <option value='Business'>Business</option>
                    <option value='First Class'>First Class</option>
                </select>
            </div>
            <div className="bg-sky-500/25 p-2 rounded-sm relative">
                <Passengers 
                  updateTotalPax={updateTotalPax} 
                  updatedAdult={updatedAdult} 
                  updatedChildren={updatedChildren}
                  updatedInfant={updatedInfant}
                />
            </div>
        </div>
      
      <input type="hidden" {...register("Flight Type",)} defaultValue="Round Trip" />
      <input type="hidden" {...register("Total Passengers -h",)} value={totalPax} />
      <input type="hidden" {...register("No of Adult - h",)} value={adultPax} />
      <input type="hidden" {...register("No of Children - h",)} value={childrenPax} />
      <input type="hidden" {...register("No of Infant - h",)} value={infantPax} />
      <button type="submit">Submit</button>
      </form>
    )
  }

  export default RoundTrip;