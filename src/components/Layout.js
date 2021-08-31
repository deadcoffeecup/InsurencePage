import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";

const GlobalStyle = createGlobalStyle`
  body{
   font-family: "Monospace";
   background-color: #232129;
   color: ${(props) => (props.theme === "purple" ? "purple" : "white")};
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

export function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <GlobalStyle theme="white" />
      {children}
    </React.Fragment>
  );
}
