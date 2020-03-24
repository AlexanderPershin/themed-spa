import React from 'react';
import styled from 'styled-components';
import Widget from '../widgets/Widget';
import Product from './Product';

const ProdContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
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
      rowStart={11}
      rowEnd={18}
      leftRad
      rightRad
    >
      <ProdContainer>{renderProducts(productsData)}</ProdContainer>
    </Widget>
  );
};

export default Products;
