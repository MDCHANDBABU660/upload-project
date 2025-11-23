import React from "react";
import "./Projects.css";
import Card from "../Card/Card";
import va from "../../assets/va.png";
import fa from "../../assets/fw.png";
import ai from "../../assets/tti.png";
function Project() {
  return (
    <div className="project">
      <h1 id="para">2+ YEARS EXPREIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card title="VIRTUAL ASSISTANT" image={va} />
        <Card title="AI POWERED FITNESS WEBSITE" image={fa} />
        <Card title="AI CHATBOT" image={ai} />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Project;
