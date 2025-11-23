import React from "react";
import "./About.css";
import Card from "../Card/Card";
import mern from "../../assets/mern.png";
import java from "../../assets/java.png";
import dsa from "../../assets/dsa.png";
function About() {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetail">
          <div className="personinfo">
            <h1>Personla Info</h1>
            <ul>
              <li>
                <span>Name</span> : MD CHAND babu
              </li>
              <li>
                <span>Age</span> : 23
              </li>
              <li>
                <span>Gender</span> : Male
              </li>
              <li>
                <span>Language</span> : Hindi,English
              </li>
            </ul>
          </div>
          <div className="Education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : BA + full stack devloper
              </li>
              <li>
                <span>BRANCH</span> : HISTORY
              </li>
              <li>
                <span>CGPA</span> : 8.2
              </li>
            </ul>
          </div>
          <div className="Skill">
            <h1>Skill</h1>
            <ul>
              <li>PYTHON STACK WEB DEVLOPER</li>
              <li>JAVASCRIPT</li>
              <li>REACT.JS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="PYTHON FULL STACK DEVLPER" image={mern} />
        <Card title="JAVASCRIPT" image={java} />
        <Card title="JAVA" image={dsa} />
      </div>
    </div>
  );
}

export default About;
