import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../Assets/image-2.png'
export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Welcome"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Welcome
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Webinars"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Webinars
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Footer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}