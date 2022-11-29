import styled from "styled-components";
import { createElement as $ } from "react";

function Navbar() {
  return $(
    Totalnavbar,
    { className: "nav" },
    $(LogoA, { className: "nav__brand" }, "sadique"),
    $(
      NavElementUl,
      { className: "nav__menu" },
      $(
        NavItemLi,
        { className: "nav__item" },
        $(ElementsA, { className: "nav__link" }, "Home")
      ),
      $(
        NavItemLi,
        { className: "nav__item" },
        $(ElementsA, { className: "nav__link" }, "skills")
      ),
      $(
        NavItemLi,
        { className: "nav__item" },
        $(ElementsA, { className: "nav__link" }, "portfolio")
      )
    )
  );
}

export default Navbar;

// styling
const Totalnavbar = styled.div`
  background-color: rgb(189, 50, 0);
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  margin: 0 auto;
`;
// logo
const LogoA = styled.div`
  text-transform: uppercase;
  font-weight: bold;
`;
// ul
const NavElementUl = styled.ul`
  display: flex;
`;
// li
const NavItemLi = styled.li`
  /* border: 2px solid red; */
`;
// a
const ElementsA = styled.a`
  margin: auto 2rem;
  /* color: blue; */
  text-transform: uppercase;
`;
