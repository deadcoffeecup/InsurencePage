import React from "react";
import * as PRODUCTS_LIST from "../productsAPI";
import { Typography, List, Grid } from "@material-ui/core";

class ProductsTable extends React.Component {
  render() {
   { PRODUCTS_LIST } = this.props;
    return (
      <Grid spacing={16} container={true} item={true} xs={12} md={6}>
        <Typography variant="h2">Oferta</Typography>
        <List>
          {Object.values(this.props).map((products) => (
            <div key={product.id}>
              <h3>{products.name}</h3>
              <p>{products.description}</p>
            </div>
          ))}
        </List>
      </Grid>
    );
  }
}
export default ProductsTable;
