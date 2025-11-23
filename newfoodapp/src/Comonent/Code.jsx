import React from "react";
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { AddItme } from "../redux/cartSlice";
function Code({
  id,
  food_name,
  food_category,
  food_type,
  food_quantity,
  food_image,
  price,
}) {
  // Ensure food_image is passed correctly

  let dispatch = useDispatch();

  return (
    <div className="w-[300px] h-[350px] bg-white px-4 flex flex-col gap-3 ">
      <div className="w-[100%] h-[60%] overflow-hidden ">
        {/* <img src={food_image} alt={food_name} className="object-cover" /> */}

        <img src={food_image} className=" object-cover" />
      </div>
      <div className=" text-[30px]  font-bold">{food_name}</div>
      <div className=" flex justify-between w-full">
        <div className=" text-xl font-medium">{price}</div>
        <div>
          <LuLeafyGreen />
          <span>{food_type}</span>
        </div>
      </div>
      <button
        className=" text-2xl bg-green-400  hove:bg-amber-600 shadow-[20px] mb-4
      "
        onClick={() =>
          dispatch(
            AddItme({
              id: id,
              name: food_image,
              image: food_image,
              price: price,
              qty: 1,
            })
          )
        }
      >
        save
      </button>
    </div>
  );
}

export default Code;
