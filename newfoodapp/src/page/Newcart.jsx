import React, { useContext } from "react";
import { dataContex } from "../context/UserContext";
import { useSelector } from "react-redux";
import ErrorBoundary from "../Comonent/ErrorBoundary";
import Cart from "../cart";

function Newcart() {
  let { showcart, setshowcart } = useContext(dataContex);
  let items = useSelector((state) => state.Cart);

  return (
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
        {/* {items.map((x) => {
          <Cart
            id={x.id}
            name={x.name}
            price={x.price}
            qyt={x.qyt}
            image={x.Image}
          />;
        })} */}
        <Cart />
      </div>
    </div>
  );
}

export default Newcart;
