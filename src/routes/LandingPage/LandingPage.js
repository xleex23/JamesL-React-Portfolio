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

        {/* <div className="about-text">
          There are only a few things in life that can replicate the emotion invoked by having a set of code work properly, and I chase those moments.
          <br></br>
          Hi! My name is James Lee and I am a passionate software developer.  Throughout my experiences in life, whether personal or professional, I've learned the most important aspect about achieving any goal comes from the appreciation of the process that manifests ideas into life.  Coding has definitely highlighted this aspect and I fell in love with the process instantaneously.  Being a part of a select society that have the ability to create, design, and resolve issues is what drove me to choosing this career path.  Come along with me and let's embark on this exciting journey together...
        </div> */}


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