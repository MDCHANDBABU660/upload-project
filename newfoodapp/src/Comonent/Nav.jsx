import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { dataContex } from "../context/UserContext";
import { food_items } from "../page/Food";
import { useDispatch, useSelector } from "react-redux";
function Nav() {
  let { input, setInput, posi, setPosi, showcart, setshowcart } =
    useContext(dataContex);
  useEffect(() => {
    let newShow = food_items.filter(
      (itme) =>
        itme.food_name.includes(input) ||
        itme.food_name.toLowerCase().includes(input)
    );
    setPosi(newShow);
  }, [input]);
  let items = useSelector((state) => state.cart);
  console.log(items);

  return (
    <div className="w-full h-[100] flex justify-between px-6  md:px-8">
      <div className="w-[50px] h-[50px] bg-white flex justify-center  items-center mt-4 rounded-b-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>
      <form
        className="bg-white w-[45%] h-[50px] shadow-xl flex items-center px-4 gap-4 mt-4 md:w-[60%] "
        onSubmit={(e) => e.preventDefault()}
      >
        <IoMdSearch className=" w-[20px] h-[2ppx] " />
        <input
          type="text"
          placeholder="Search your diss"
          className="w-[100%] outline-none text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className="w-[50px] h-[50px] bg-white flex justify-center  items-center mt-4 rounded-b-md shadow-xl relative 
       "
        onClick={() => setshowcart(true)}
      >
        <span className=" absolute top-0 font-bold right-1 text-green-500">
          {items.length}
        </span>
        <RiShoppingBag4Line className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}

export default Nav;
