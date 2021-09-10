import React from "react";
import { StyledHeader } from "../components/Layout";
import Layout from "../components/Layout";
import styled from "styled-components";

const StyledSection = styled.section`
  text-align: center;
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
  text-align: center;
  font-size: 1.5em;
`;
const AboutPage = () => {
  return (
    <Layout>
      <title>O mnie - Gołębiewski Ubezpieczenia</title>
      <StyledSection>
        <StyledHeader>Kilka słów o mnie</StyledHeader>
        <StyledWrapper>
          Jestem agentem ubezpieczeniowym, którego biuro mieści się w Gdańsku.
          Moja oferta to polisy ubezpieczeniowe firmy MetLife. Oferowane
          ubezpieczenia są atrakcyjne, a także dopasowywane do oczekiwań,
          potrzeb oraz możliwości finansowych Klientów. Pakiety ubezpieczeniowe
          MetLife umożliwiają ubezpieczenie Klientów indywidualnych, rodzin, a
          także firm. Oferta obejmuje przede wszystkim ubezpieczenia na życie
          oraz ubezpieczenia zdrowotne, które są dogodnym zabezpieczeniem w
          przypadku przejściowych urazów, chorób zagrażających życiu lub
          zdrowiu, lub w wypadku nagłej utraty życia. Zapewniam miłą i
          kompetentną obsługę, atrakcyjne ceny oraz terminowość. Serdecznie
          zapraszam do kontaktu.
        </StyledWrapper>
      </StyledSection>
    </Layout>
  );
};
export default AboutPage;
