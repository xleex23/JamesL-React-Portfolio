import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link className= "main-head-link" to="/">
          J1.LEE
        </Link>
        <div className="social-links">
          <a href="https://www.facebook.com/xleex24" className= "facebook social-icon" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a href="https://www.instagram.com/j1lee27/" className="instagram social-icon" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="https://www.linkedin.com/in/jameswlee109/" className="linkedIn social-icon" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </nav>
    )
  }
};

export default Nav;