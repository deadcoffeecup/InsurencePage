import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import { StyledHeader } from "../components/Layout";
import AppointmentForm from "../components/AppointmentForm";

const StyledSection = styled.section`
  text-align: left;
  grid-template-columns: 35% 65%;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  display: grid;
  background-color: white;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  margin: 4rem 20%;
`;
const StyledWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
`;

const ContactPage = () => {
  return (
    <Layout>
      <title>Kontakt - Gołębiewski Ubezpieczenia</title>
      <StyledSection>
        <StyledHeader>Adrian Gołębiewski</StyledHeader>
        <StyledWrapper>
          Agencja MetLife ul.Grunwaldzka 212, 80-266 Gdańsk Nr KNF 11249833/A
          <p>adrian.golebiewski@agencja.metlife.pl</p>
          <p>507 318 688</p>
        </StyledWrapper>
      </StyledSection>

      <AppointmentForm />
    </Layout>
  );
};
export default ContactPage;
