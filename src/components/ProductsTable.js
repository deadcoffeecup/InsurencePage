import React from "react";
import productsList from "../productsAPI";

const ProductsTable = () => {
  return (
    <div>
      <h1 variant="h2">Oferta</h1>
      <div spacing={16} container={true} item={true} xs={12} md={6}>
        {Object.values(productsList).map((products) => (
          <div key={products.id}>
            <h3>{products.name}</h3>
            <p>{products.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsTable;
