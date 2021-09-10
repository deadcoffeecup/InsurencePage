import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Navbar from "./Navbar";

const GlobalStyle = createGlobalStyle`
  body{
   font-family: "Arial";
   background-color: #f2f2f2; //Metlife Gray
   padding:0;
   margin:0;
   height: auto;
  
}`;

export const StyledHeader = styled.div`
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  font: bold 3em arial;
  background-color: #0061a0;
  padding: 2rem;
`;

const StyledFooter = styled.footer`
  margin-top: 5%;
  padding: 1rem;
  bottom: 0;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  text-align: center;
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <GlobalStyle theme="pink" />
      {children}
      <StyledFooter>
        MetLife Towarzystwo Ubezpieczeń na Życie i Reasekuracji S.A., ul.
        Przemysłowa 26, 00-450 Warszawa, zarejestrowane przez Sąd Rejonowy dla
        m.st. Warszawy, XII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod
        nr KRS 0000028131; NIP 526-030-50-06; wysokość kapitału zakładowego:
        21.490.000,00 złotych, wpłacony w całości. MetLife TUnŻiR S.A. jest
        spółką z grupy MetLife, Inc.
      </StyledFooter>
    </React.Fragment>
  );
}
