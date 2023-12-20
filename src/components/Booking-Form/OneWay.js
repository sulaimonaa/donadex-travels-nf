import { useForm } from "react-hook-form";
import Passengers from "./Passengers";
import { useState } from "react";


const RoundTrip = () => {
    const { register, handleSubmit, setValue } = useForm();

    const [totalPax, setTotalPax] = useState(1);

  const onSubmit = (data) => {
    console.log(data);
  };

  const updateTotalPax = (newTotalPax) => {
    setTotalPax(newTotalPax);
    setValue("No of Passengers", newTotalPax); // Update the hidden field
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
                <Passengers updateTotalPax={updateTotalPax}/>
            </div>
        </div>
      
      <input type="hidden" {...register("Flight Type",)} defaultValue="One-way Trip" />
      <input type="hidden" {...register("No of Passengers",)} defaultValue={totalPax} />
      <button type="submit">Submit</button>
      </form>
    )
  }

  export default RoundTrip;