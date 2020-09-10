import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <>
      <div className="landing-container">
        <div className="left-side"></div>
        <div className="right-side"></div>
      </div>
      <img className="profile-img" src={require('../../profilecopy.jpg')} />
      </>
    )
  }
}

export default LandingPage;