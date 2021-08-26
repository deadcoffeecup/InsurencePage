import { List } from "@material-ui/core";
import React from "react";

function Navbar() {
  return (
    <div>
      <Link to="/">Go home</Link>
      <Link to="/about">O mnie</Link>
      <Link to="/products">Oferta</Link>
      <Link to="/contact">Kontakt</Link>
    </div>
  );
}

export default Navbar;
