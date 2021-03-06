import React from "react";
import {
  Container,
  Grid,
} from "@material-ui/core";
import Product from "../Product";

const ProductList = props => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {props.products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Product {...product}></Product>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default ProductList;
