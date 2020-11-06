import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import Grid from '@material-ui/core/Grid';

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch('https://fakestoreapi.com/products');
    const res = await data.json();
    setProduct(res);
  }

  const list = <Grid container spacing={3} > {product.map(item => <Tile key={item.id} {...item}> </Tile>)} </Grid>;

  return (
    <>
      <p>This is listing page for the product </p>
      {product.length ? list : 'Loading.....' }
    </>
  );
};

export default Product;
