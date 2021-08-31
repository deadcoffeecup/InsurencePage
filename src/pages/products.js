import React from "react";
import ProductsTable from "../components/ProductsTable";
import { Layout, StyledWrapper } from "../components/Layout";

const ProductsPage = () => {
  return (
    <Layout>
      <title>Ofera - Gołębiewski Ubezpieczenia</title>
      <h1>Przyjrzyj się naszej ofercie</h1>
      <StyledWrapper>
        <ProductsTable />
      </StyledWrapper>
    </Layout>
  );
};
export default ProductsPage;
