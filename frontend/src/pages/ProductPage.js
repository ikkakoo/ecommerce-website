import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Button,
//   Icon,
//   Image,
//   Heading,
//   Flex,
//   Text,
//   SimpleGrid,
//   Container,
//   Select,
// } from '@chakra-ui/react';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { FaAngleLeft, FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  Icon,
  List,
  ListItem,
} from '@chakra-ui/react';

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

const ProductPage = () => {
  const [qty, setQty] = useState(1);

  const { id } = useParams();

  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, []);

  const navigate = useNavigate();
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    // <Container maxW={'container.xl'} p={10}>
    //   <Link to="/">
    //     <Button colorScheme="teal" variant="outline" mb={6}>
    //       <Icon as={FaAngleLeft}></Icon>
    //       Go Back
    //     </Button>
    //   </Link>
    //   {loading ? (
    //     <Loader />
    //   ) : error ? (
    //     <Message status={'error'} description={error} />
    //   ) : (
    //     <SimpleGrid columns={3} spacing={'2em'}>
    //       <Box>
    //         <Link to={`/product/${product.id}`}>
    //           <Image
    //             src={product.image}
    //             rounded="md"
    //             fit="cover"
    //             cursor={'pointer'}
    //           ></Image>
    //         </Link>
    //       </Box>

    //       <Flex gap={10} direction="column">
    //         <Heading>{product.name}</Heading>
    //         <Rating
    //           rating={product.rating}
    //           text={`Total of ${product.numReviews} reviews`}
    //           color="#f7d600"
    //         />

    //         <Heading as="h2" size="lg">
    //           $ {product.price}
    //         </Heading>

    //         <Text textAlign="center" minHeight="50px" cursor={'pointer'}>
    //           Description: {product.description}
    //         </Text>
    //       </Flex>

    //       <Box>
    //         <Text>Price: ${product.price}</Text>
    //         <Text>
    //           Stock:{' '}
    //           {product.count_in_stock === 0
    //             ? 'Out of Stock'
    //             : product.count_in_stock}
    //         </Text>

    //         {product.count_in_stock > 0 && (
    //           <Select
    //             placeholder="Select Quantity"
    //             value={qty}
    //             onChange={e => setQty(e.target.value)}
    //           >
    //             {[...Array(product.count_in_stock).keys()].map(x => (
    //               <option key={x + 1} value={x + 1}>
    //                 {x + 1}
    //               </option>
    //             ))}
    //           </Select>
    //         )}

    //         <Button
    //           onClick={addToCartHandler}
    //           disabled={product.count_in_stock == 0}
    //           leftIcon={<FaCartPlus />}
    //           variant="outline"
    //         >
    //           Add to Cart
    //         </Button>
    //       </Box>
    //     </SimpleGrid>
    //   )}
    // </Container>

    <Container maxW={'7xl'}>
      {/* <Link to="/">
        <Button colorScheme="teal" variant="outline" mb={6}>
          <Icon as={FaAngleLeft}></Icon>
          Go Back
        </Button>
      </Link> */}
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex direction={'column'}>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={product.image}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {product.name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
            >
              ${product.price} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}
              >
                {product.overview}
              </Text>
              <Text fontSize={'lg'}>
                {product.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductPage;
