import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
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
  Select,
} from '@chakra-ui/react';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { FaAngleLeft, FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';

const ProductPage = () => {
  const [qty, setQty] = useState(1);

  const { id } = useParams();

  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, []);

  const navigate = useNavigate()
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  };

  return (
    <Container maxW={'container.xl'} p={10}>
      <Link to="/">
        <Button colorScheme="teal" variant="outline" mb={6}>
          <Icon as={FaAngleLeft}></Icon>
          Go Back
        </Button>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message status={'error'} error={error} title="Error" />
      ) : (
        <SimpleGrid columns={3} spacing={'2em'}>
          <Box>
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
              {product.count_in_stock === 0
                ? 'Out of Stock'
                : product.count_in_stock}
            </Text>

            {product.count_in_stock > 0 && (
              <Select
                placeholder="Select Quantity"
                value={qty}
                onChange={e => setQty(e.target.value)}
              >
                {[...Array(product.count_in_stock).keys()].map(x => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </Select>
            )}

            <Button
              onClick={addToCartHandler}
              disabled={product.count_in_stock == 0}
              leftIcon={<FaCartPlus />}
              variant="outline"
            >
              Add to Cart
            </Button>
          </Box>
        </SimpleGrid>
      )}
    </Container>
  );
};

export default ProductPage;
