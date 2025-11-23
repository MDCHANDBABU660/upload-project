// import { Connect } from "vite";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import Nav from "./component/Nav/Nav";
import Project from "./component/Projects/Project";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
