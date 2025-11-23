import React from "react";
import image1 from "./assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";

function Cart({ name, id, price, image, qyt }) {
  return (
    <div className="w-full h-[120px] flex justify-between shadow-lg p-3 overflow-auto">
      <div className="w-[60%] h-full   flex ">
        <div className="w-[50%] h-full overflow-hidden rounded-b-lg">
          <img
            src={image1}
            alt=""
            className="W-[120px] h-[100px] object-cover"
          />
        </div>

        <div className="w-[40%] h-full flex flex-col gap-5 justify-center items-center shadow-lg ">
          <div className=" font-bold">{name}</div>
          <div className="w-[110px] h-[50px] bg-amber-100 flex rounded-b-3xl border-green-400 text-xl">
            <button className="w-[30%] h-full font-bold bg-amber-200 hover:bg-amber-600">
              -
            </button>
            <span className="w-[40%] h-full bg-amber-100 flex justify-center items-center hover:bg-amber-400">
              {qyt}
            </span>
            <button className="w-[30%] h-full bg-amber-50 font-bold  hover:bg-amber-600">
              +
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-start items-end gap-6">
        <span className=" text-xl text-green-400 font-semibold">Rs 200/-</span>
        <RiDeleteBin6Line className="w-[30px] h-[30px] text-red-400" />
      </div>
    </div>
  );
}
export default Cart;
