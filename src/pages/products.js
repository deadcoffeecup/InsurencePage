import React from "react";
import ProductsTable from "../components/ProductsTable";
import { StyledHeader, StyledSection } from "../components/Layout";
import Layout from "../components/Layout";

const ProductsPage = () => {
  return (
    <Layout>
      <title>Ofera - Gołębiewski Ubezpieczenia</title>
      <StyledHeader>Oferta</StyledHeader>
      <ProductsTable />
    </Layout>
  );
};
export default ProductsPage;
