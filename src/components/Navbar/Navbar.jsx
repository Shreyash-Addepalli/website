import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <a href="#" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={logo} alt="logo" />{" "}
              <span className="dep_" style={{ paddingLeft: `12px` }}>
                de_plan
              </span>
            </a>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="#" className="nav-links" onClick={closeMobileMenu}>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-links" onClick={closeMobileMenu}>
                  Proto
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-links" onClick={closeMobileMenu}>
                  Ostrom
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
