import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-family: "Arial";
  font-weight: bold;
  color: black;
  grid-template-rows: 80%;
  font-size: 1.25rem;
  padding: 1em;
  margin: 0;

  :hover {
    color: grey;
    border-color: lightgray;
    border-style: solid;
  }
`;

const StyledNavBar = styled.nav`
  max-width: 100%;
  max-height: 3.25em;
  padding: 2em;
  padding-top: 0;
  flex-flow: row wrap;
  display: flex;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  background-color: #fff;
  transition: background-color 0.2s ease;
  justify-content: flex-start;
  position: sticky;

  @media all and (max-width: 800px) {
    justify-content: space-around;
  }

  @media all and (max-width: 500px) {
    flex-direction: column;
  }
`;

function Navbar() {
  return (
    <>
      <StyledNavBar>
        <Logo />
        <StyledLink to="/about">O mnie</StyledLink>
        <StyledLink to="/products">Oferta</StyledLink>
        <StyledLink to="/contact">Kontakt</StyledLink>
      </StyledNavBar>
    </>
  );
}

export default Navbar;
