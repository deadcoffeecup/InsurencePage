import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Nie ma takiej strony</title>
      <h1>Zgubiłeś się?</h1>
      <p>
        <br />
        <Link to="/contact">Zadzwoń</Link>.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
