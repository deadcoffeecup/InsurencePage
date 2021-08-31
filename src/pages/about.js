import React from "react";
import { StyledWrapper, Layout } from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <title>O mnie - Gołębiewski Ubezpieczenia</title>
      <h2 class="text-white mt-0">Kilka słow o mnie</h2>
      <StyledWrapper>
        Jestem agentem ubezpieczeniowym, którego biuro mieści się w Gdańsku.
        Moja oferta to polisy ubezpieczeniowe firmy MetLife. Oferowane
        ubezpieczenia są atrakcyjne, a także dopasowywane do oczekiwań, potrzeb
        oraz możliwości finansowych Klientów. Pakiety ubezpieczeniowe MetLife
        umożliwiają ubezpieczenie Klientów indywidualnych, rodzin, a także firm.
        Oferta obejmuje przede wszystkim ubezpieczenia na życie oraz
        ubezpieczenia zdrowotne, które są dogodnym zabezpieczeniem w przypadku
        przejściowych urazów, chorób zagrażających życiu lub zdrowiu, lub w
        wypadku nagłej utraty życia. Zapewniam miłą i kompetentną obsługę,
        atrakcyjne ceny oraz terminowość. Serdecznie zapraszam do kontaktu.
      </StyledWrapper>
    </Layout>
  );
};
export default AboutPage;
