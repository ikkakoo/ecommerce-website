import React from 'react';
import { Flex, Box, Heading, Text, Container } from '@chakra-ui/react';
import Product from '../components/Product';

import products from '../products';

const HomePage = () => {
  return (
    <>
      <Heading mb={5}>Latest Products</Heading>
      <Flex gap={5}>
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </Flex>
    </>
  );
};

export default HomePage;
