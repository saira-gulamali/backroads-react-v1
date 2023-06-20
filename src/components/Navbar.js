import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* pageLinks */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* {iconLinks} */}
          <ul className="nav-icons">
            {socialLinks.map((item) => {
              return (
                <li>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={item.icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
