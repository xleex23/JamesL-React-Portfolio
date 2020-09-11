import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <>
      <div className="landing-container">
        <div className="left-side">
          <span className="about-tag">ABOUT</span>
          <div className="break"></div>
          <span className="adjectives">DEV</span>
          <span className="adjectives">ELOP</span>
          <span className="adjectives">ER</span>
        </div>
        <div className="right-side">
          <span className="project-tag">PROJECTS</span>
          <div className="breaks"></div>
          <span className="adjective">CREA</span>
          <span className="adjective">TOR</span>
        </div>
      </div>
      <img className="profile-img" src={require('../../profilecopy.jpg')} />
      </>
    )
  }
}

export default LandingPage;