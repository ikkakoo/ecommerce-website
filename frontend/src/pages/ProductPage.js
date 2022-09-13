import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Container, Flex, Heading, Menu } from '@chakra-ui/react';
import { Rating } from '../components/Rating';
import products from '../products';

const ProductPage = () => {
    const {params} = useParams();
  const product = products.find(p => p.id == params);
  return <div>{params}</div>
};

export default ProductPage;
