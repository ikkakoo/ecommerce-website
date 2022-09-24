import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Container, Flex, Heading } from '@chakra-ui/react';
import Product from '../components/Product';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';

import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    // <Container maxW='7xl'>
    //   <Heading mb={5}>Latest Products</Heading>
    //   {loading ? (
    //     <Loader/>
    //   ) : error ? (
    //     <Message status={'error'} error={error} title='Error' />
    //   ) : (
    //     <Flex gap={5}>
    //       {products.map(product => (
    //         <Product product={product} key={product.id} />
    //       ))}
    //     </Flex>
    //   )}
    // </Container>
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={3}>
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;
