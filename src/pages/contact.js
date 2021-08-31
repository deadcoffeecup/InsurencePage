import React from "react";
import { Layout } from "../components/Layout";
import AppointmentForm from "../components/AppointmentForm";

const ContactPage = () => {
  return (
    <Layout>
      <title>Kontakt - Gołębiewski Ubezpieczenia</title>
      <p>
        Chcesz dowiedzieć się więcej? Spodobała Ci się oferta? Masz jakieś
        pytania? Napisz już teraz lub zadzwoń!
      </p>
      <AppointmentForm />

      <p>
        Adrian Gołębiewski | Agencja MetLife ul.Grunwaldzka 212, 80-266 Gdańsk
        Nr KNF 11249833/A
      </p>
      <p>adrian.golebiewski@agencja.metlife.pl</p>
      <p>507 318 688</p>
    </Layout>
  );
};
export default ContactPage;
