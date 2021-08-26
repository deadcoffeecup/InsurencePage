import React from "react";
import productsList from "../productsAPI";
import { Typography } from "@material-ui/core";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";

class ProductsTable extends React.Component {
  render() {
    return (
      <GridContainer>
        <Typography variant="h2">Oferta</Typography>
        <GridItem spacing={16} container={true} item={true} xs={12} md={6}>
          {Object.values(productsList).map((products) => (
            <div key={products.id}>
              <h3>{products.name}</h3>
              <p>{products.description}</p>
            </div>
          ))}
        </GridItem>
      </GridContainer>
    );
  }
}
export default ProductsTable;
