import React from "react";
import ProductsTable from "../components/ProductsTable";
import { Layout, Header } from "../components/Layout";

const ProductsPage = () => {
  return (
    <Layout>
      <title>Ofera - Gołębiewski Ubezpieczenia</title>
      <Header>Oferta</Header>
      <ProductsTable />
    </Layout>
  );
};
export default ProductsPage;
