import React, { useState } from "react";
import "../navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggler = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    // // toggleicon
    // toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle'):
    // setToggleIcon('nav__toggler')
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        sadique
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav__toggler" onClick={navToggler}>
        <i className="fa-solid fa-bars toggleIcon"></i>
      </div>
    </nav>
  );
}
