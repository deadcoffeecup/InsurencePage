import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "./Logo";

const StyledNavBar = styled.nav`
  flex-flow: row;
  display: flex;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  background-color: #fff;
  transition: background-color 0.2s ease;
  position: sticky;
  top: 0;
  border: 0;
  border-bottom: 2rem;
  border-style: solid;
  border-color: #0061a0;

  @media all and (max-width: 750px) {
    flex-direction: column;
  }
  ::after {
    display: inline block;
    background-color: #0061a0;
    height: 3rem;
    width: 100%;
    position: absolute;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-family: "Arial";
  font-weight: bold;
  color: black;
  font-size: 1.25rem;
  padding: 0.75rem;
  margin: 1rem;

  @media all and (max-width: 750px) {
    display: none;
  }

  :hover {
    color: #0061a0;
  }
`;

function Navbar() {
  return (
    <StyledNavBar>
      <Logo />
      <StyledLink to="/about">O mnie</StyledLink>
      <StyledLink to="/products">Oferta</StyledLink>
      <StyledLink to="/contact">Kontakt</StyledLink>
    </StyledNavBar>
  );
}

export default Navbar;
