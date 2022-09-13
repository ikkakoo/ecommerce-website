import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Icon,
  Image,
  Heading,
  Flex,
  Text,
  SimpleGrid,
  Container,
  Tooltip,
} from '@chakra-ui/react';
import Rating from '../components/Rating';
import { FaAngleLeft, FaCartPlus } from 'react-icons/fa';
import axios from 'axios'

const ProductPage = () => {
  const [product, setProduct] = useState([])

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data);
    }

    getProduct();
  }, [])
  

  return (
    <Container maxW={'container.xl'} p={10}>
      <SimpleGrid columns={3} spacing={'2em'}>
        <Box>
          <Link to="/">
            <Button colorScheme="teal" variant="outline" mb={6}>
              <Icon as={FaAngleLeft}></Icon>
              Go Back
            </Button>
          </Link>

          <Link to={`/product/${product.id}`}>
            <Image
              src={product.image}
              rounded="md"
              fit="cover"
              cursor={'pointer'}
            ></Image>
          </Link>
        </Box>

        <Flex gap={10} direction="column">
          <Heading>{product.name}</Heading>
          <Rating
            rating={product.rating}
            text={`Total of ${product.numReviews} reviews`}
            color="#f7d600"
          />

          <Heading as="h2" size="lg">
            $ {product.price}
          </Heading>

          <Text textAlign="center" minHeight="50px" cursor={'pointer'}>
            Description: {product.description}
          </Text>
        </Flex>

        <Box>
          <Text>Price: ${product.price}</Text>
          <Text>
            Stock:{' '}
            {product.countInStock === 0 ? 'Out of Stock' : product.countInStock}
          </Text>
          <Button
            disabled={product.countInStock == 0}
            leftIcon={<FaCartPlus />}
            variant="outline"
          >
            Add to Cart
          </Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default ProductPage;
