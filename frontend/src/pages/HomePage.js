import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Heading } from '@chakra-ui/react';
import Product from '../components/Product';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Heading mb={5}>Latest Products</Heading>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message status={'error'} error={error} title='Error' />
      ) : (
        <Flex gap={5}>
          {products.map(product => (
            <Product product={product} key={product.id} />
          ))}
        </Flex>
      )}
    </>
  );
};

export default HomePage;
