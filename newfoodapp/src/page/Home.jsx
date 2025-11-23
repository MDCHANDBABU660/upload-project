import React, { useContext, useState } from "react";
import Nav from "../Comonent/Nav";
import Categories from "../Comonent/Category"; // Correct import for Categories

// import Categories from "../Comonent/Category";
import Code from "../Comonent/code";
import { food_items } from "./Food"; // Ensure food_items is correctly imported

import UserContext, { dataContex } from "../context/UserContext";
import Cart from "../cart";
import { CgOverflow } from "react-icons/cg";
import { useSelector } from "react-redux";
import ErrorBoundary from "../Comonent/ErrorBoundary";
import Newcart from "./Newcart";

function Home() {
  let { posi, setPosi, input, showcart, setshowcart } = useContext(dataContex);
  function filter(Categories) {
    if (Categories === "All") {
      setPosi(food_items);
    } else {
      let newArry = food_items.filter(
        (itme) => itme.food_category === Categories
      );
      setPosi(newArry);
    }
  }
  let items = useSelector((state) => state.Cart);

  // console.log("Categories:", Categories);
  // console.log("posi:", posi);

  return (
    <div className="bg-slate-400 w-full min-h-[100vh]">
      <Nav />
      {!input ? (
        <div className=" flex  flex-wrap justify-center items-center gap-5 w-[100%] ">
          {(Categories || []).map((itme) => {
            return (
              <div
                key={itme.id}
                className="w-[130px] h-[130px] gap-5 p-5 bg-white flex flex-col items-start justify-start text-[20px] mt-5 shadow-xl rounded-md 
             hover:bg-yellow-200 cursor-pointer transition-all duration-200"
                onClick={() => filter(itme.name)}
              >
                {itme.icon}
                {itme.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className=" flex flex-wrap justify-center items-center gap-3 mt-5 px-[15px] py-[15px]">
        {(posi || []).map((itme) => {
          return (
            <Code
              key={itme.id}
              id={itme.id}
              food_name={itme.food_name}
              food_category={itme.food_category}
              food_type={itme.food_type}
              food_quantity={itme.food_quantity}
              food_image={itme.food_image}
              price={itme.price}
            />
          );
        })}
      </div>

      {/* <Newcart /> */}
      <div
        className={`w-full md:w-[40vw] h-[100%] fixed  top-0 right-0 bg-white p-5 transition-all duration-500 ${
          showcart ? "right-0" : "right-[-100%]"
        }`}
      >
        <header className=" text-4xl flex justify-between">
          <div className=" text-green-400">item order</div>
          <span
            className=" font-bold text-4xl text-amber-400 hover:bg-amber-800 cursor-pointer"
            onClick={() => setshowcart(false)}
          >
            x
          </span>
        </header>
        <div>
          {(items || []).map((x) => {
            <Cart id={x.id} name={x.name} price={x.price} image={x.image} />;
          })}
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Home;
