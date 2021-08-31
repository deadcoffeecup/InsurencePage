import React from "react";
import styled from "styled-components";

import productsList from "../productsAPI";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  grid-template-rows: 30% 30% 30% 30%;
  column-gap: 10px;
  row-gap: 15px;
  justify-content: center;
  text-align: center;
`;
const StyledElement = styled.div`
  background-color: white;
  margin: 1rem;
  padding: 1rem;
  /* border-color: black; */
  /* border-style: solid; */
  /* border-radius: 20px; */
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
`;

const ProductsTable = () => {
  return (
    <>
      <StyledContainer spacing={16} container={true} item={true} xs={12} md={6}>
        {Object.values(productsList).map((products) => (
          <StyledElement key={products.id}>
            <h3>{products.name}</h3>
            <p>{products.description}</p>
          </StyledElement>
        ))}
      </StyledContainer>
    </>
  );
};

export default ProductsTable;
