import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Flex direction={'column'} boxShadow="2xl" bg="white" rounded="md">
      <Link to={`/product/${product.id}`}>
        <Image src={product.image} rounded="md" fit="cover" cursor={'pointer'}></Image>
      </Link>

      <Flex direction={'column'}>
        <Flex direction={'column'} align="center" gap={2}>
          <Link to={`/product/${product.id}`}>
            <Heading as="h4" size="md">
              {product.brand}
            </Heading>
          </Link>

          <Link to={`/product/${product.id}`}>
            <Text textAlign="center" minHeight="50px" cursor={'pointer'} >
              {product.name}
            </Text>
          </Link>
          
          <Heading as="h2" size="lg">
            $ {product.price}
          </Heading>
          <Rating
            rating={product.rating}
            text={`Total of ${product.numReviews} reviews`}
            color="#f7d600"
          />
        </Flex>
      </Flex>

      <Button
        colorScheme="teal"
        variant={'ghost'}
        minHeight="50px"
        width={'100%'}
        border="none"
      >
        ADD TO CART
      </Button>
    </Flex>
  );
};

export default Product;
