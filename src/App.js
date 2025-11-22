import "./App.css";
import { useState } from "react";
import Loing from "./New.js/Loing";

function App() {
  let [store, setstore] = useState([]);
  let noteReaload = (event) => {
    let giveSV = event.target.toname.value;
    if (!store.includes(giveSV)) {
      setstore([...store, giveSV]); // Add the new value to the store
    } else {
      alert("giveSV already exists");
    }

    event.preventDefault();
  };

  let addall = store.map((valu, index) => {
    return (
      <TodoLisrItems
        key={index}
        valu={valu}
        indexNumber={index}
        store={store}
        setstore={setstore}
      />
    );
  });

  return (
    <div className="App">
      {/* <Loing /> */}
      <div id="div">
        <h1 id="h1">Todo list</h1>
        <form onSubmit={noteReaload}>
          <input type="text" name="toname" /> <button>Submit</button>
        </form>
      </div>
      <div className="style">
        <ul>{addall}</ul>
      </div>
    </div>
  );
}

export default App;

function TodoLisrItems({ valu, indexNumber, store, setstore }) {
  let [line, setLine] = useState(false);

  let deletRow = () => {
    let newStore = store.filter((v, i) => i !== indexNumber);
    setstore(newStore);
  };
  let Linethrow = () => {
    setLine(!line);
  };
  return (
    <li className={line ? "complettodo" : ""} onClick={Linethrow}>
      {indexNumber + 1} {valu} <span onClick={deletRow}>&times;</span>
    </li>
  );
}
