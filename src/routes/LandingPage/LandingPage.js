import React, { Component } from 'react';
import './LandingPage.css';
import '../../components/About/About.css';
import About from '../../components/About/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';


class LandingPage extends Component {
  state = {
    isOpen: false,
    leftOpen: false,
    rightOpen: false
  }

  handleLeftClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      leftOpen: !this.state.leftOpen
    })
  }

  handleRightClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      rightOpen: !this.state.leftOpen
    })
  }

  handleChevClick = () => {
    this.setState({
      isOpen: false,
      leftOpen: false,
      rightOpen: false
    })
  }

  render() {
    
    let chevClass = this.state.isOpen ? "show-chev" : "hide-chev"

    let leftClass = this.state.leftOpen ? "expand-left" : "left-side"

    return (
      <>
      <div className="landing-container">

        <FontAwesomeIcon className={chevClass} icon={faChevronCircleLeft} onClick={() => this.handleChevClick()} />

        <div className={leftClass} onClick = {()=>this.handleLeftClick()}>
          <span className="about-tag">ABOUT</span>
          <div className="break"></div>
          <span className="adjectives">DEV</span>
          <span className="adjectives">ELOP</span>
          <span className="adjectives">ER</span>
        </div>
        
        {this.state.leftOpen ? 
          ( <About  /> ) : "" 
        }

        {!this.state.isOpen && !this.state.leftOpen ? (
        <div className="right-side">
          <span className="project-tag">PROJECTS</span>
          <div className="breaks"></div>
          <span className="adjective">CREA</span>
          <span className="adjective">TOR</span>
        </div>) : "" }
        
      </div>

      {!this.state.isOpen ? 
      (<img className="profile-img" src={require('../../profilecopy.jpg')} />) : "" }

      </>
    )
  }
}

export default LandingPage;