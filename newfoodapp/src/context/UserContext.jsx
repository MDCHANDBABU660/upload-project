import React, { createContext, useState } from "react";
import { food_items } from "../page/Food";
export const dataContex = createContext();
function UserContext({ children }) {
  let [posi, setPosi] = useState(food_items);
  let [input, setInput] = useState("");
  let [showcart, setshowcart] = useState(false);

  let data = {
    input,
    setInput,
    posi,
    setPosi,
    showcart,
    setshowcart,
  };
  return (
    <div>
      <dataContex.Provider value={data}>{children}</dataContex.Provider>
    </div>
  );
}

export default UserContext;
