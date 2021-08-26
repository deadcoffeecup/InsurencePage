import * as React from "react";
import AppointmentForm from "../components/AppointmentForm";
import ProductsTable from "../components/ProductsTable";

const IndexPage = () => {
  return (
    <main>
      <title>Gołębiewski ubezpieczenia</title>
      <AppointmentForm />
      <footer>
        MetLife Towarzystwo Ubezpieczeń na Życie i Reasekuracji S.A., ul.
        Przemysłowa 26, 00-450 Warszawa, zarejestrowane przez Sąd Rejonowy dla
        m.st. Warszawy, XII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod
        nr KRS 0000028131; NIP 526-030-50-06; wysokość kapitału zakładowego:
        21.490.000,00 złotych, wpłacony w całości. MetLife TUnŻiR S.A. jest
        spółką z grupy MetLife, Inc.
      </footer>
    </main>
  );
};

export default IndexPage;
