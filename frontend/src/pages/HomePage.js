import React from 'react';
import { useState, useEffect } from 'react';
import { Flex, Box, Heading, Text, Container } from '@chakra-ui/react';
import Product from '../components/Product';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('api/products/')
      setProducts(data)
    }

    getProducts();
  }, [])

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
