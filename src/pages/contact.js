import React from "react";
import { Layout } from "../components/Layout";
import AppointmentForm from "../components/AppointmentForm";

const ContactPage = () => {
  return (
    <Layout>
      <title>Kontakt - Gołębiewski Ubezpieczenia</title>
      <AppointmentForm />
      <p>
        Administratorem Pana/Pani danych jest firma Adrian Gołębiewski MetLife z
        siedzibą w Gdańsku, ul. Rogalińska 11A, 80-809 Gdańsk.
      </p>
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
