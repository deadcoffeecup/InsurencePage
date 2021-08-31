import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";

const GlobalStyle = createGlobalStyle`
  body{
   font-family: "Monospace";
   background-color: #f2f2f2; //Metlife Gray
   color: ${(props) => (props.theme === "black" ? "black" : "gray")};
   padding:0;
   margin:0;
}`;
export const StyledWrapper = styled.div`
  position: relative;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;
`;
export const Header = styled.h1`
  position: relative;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <GlobalStyle theme="black" />
      {children}
    </React.Fragment>
  );
}
