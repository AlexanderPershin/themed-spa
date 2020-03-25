import React from 'react';
import styled from 'styled-components';
import Widget from '../widgets/Widget';
import Product from './Product';

const ProdContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
`;

const productsData = [
  { id: 1, name: 'First' },
  { id: 2, name: 'Second' },
  { id: 3, name: 'Third' }
];

const Products = () => {
  const renderProducts = data => {
    return data.map(item => <Product key={item.id}>{item.name}</Product>);
  };

  return (
    <Widget
      title='Our Products'
      colStart={2}
      colEnd={-2}
      rowStart={1}
      rowEnd={8}
      leftRad
      rightRad
    >
      <ProdContainer>{renderProducts(productsData)}</ProdContainer>
    </Widget>
  );
};

export default Products;
