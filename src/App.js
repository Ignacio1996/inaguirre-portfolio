import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="top-container">
        <h1>inaguirre</h1>
        <h3>Ignacio Nicolas Aguirre</h3>
      </div>
      <div className="skills-container">
        <div className="skill-box">
          <h4>Entrepreneur</h4>
          <div className="skill-info-container">
            <h2>Snowball Financial Education LLC</h2>
            <p>
              Learn to manage your financial life with real-life based financial
              simulations
            </p>
            <button
              onClick={() => console.log("App.js 17 | open snowball")}
              className="snowball-button-link"
            >
              Check it out!
            </button>
          </div>
        </div>
        <div className="skill-box">
          <h4>Software Developer</h4>
        </div>
        <div className="skill-box">
          <h4>Writer</h4>
        </div>
      </div>
    </div>
  );
};

export default App;
