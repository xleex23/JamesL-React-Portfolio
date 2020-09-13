import React, { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landing-container">
          {/* Left */}
          <div className="split left-side">
            <h2 className="about-tag">ABOUT</h2>

            <div className="adjs developer-container">
              <span className="adjective">
                DEVELOPER<span className="dot">.</span>
              </span>
              {/* <span className="adjective">DEV</span>
              <span className="adjective">ELOP</span>
              <span className="adjective">ER</span> */}
            </div>
          </div>

          {/* Center - profile image */}
          <img className="profile-img" src={require("../../profilecopy.jpg")} />

          {/* Right */}
          <div className="split right-side">
            <h2 className="project-tag">PROJECTS</h2>

            <div className="adjs creator-container">
              <span className="adjective">
                CREATOR<span className="dot">.</span>
              </span>
              {/* <span className="adjective">CREA</span>
              <span className="adjective">TOR</span> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
