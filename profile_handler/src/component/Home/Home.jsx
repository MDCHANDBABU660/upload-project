import React from "react";
import "./Home.css";
import man from "../../assets/man.png";
// import TypingEffect from "react-typing-effect";
function Home() {
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">MD CHAND</div>
          <div className="line3">
            Software developer
            <div />
            {/* <TypingEffect
              text={["WEB DEVELOPER", "SOFTWARE DEVLOPER", "EDITOR"]}
              speed={500}
              eraseSpeed={50}
              eraseDelay={500}
              cursor="-"
            /> */}
            <button className="homebtn">HERE ME</button>
          </div>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Home;
