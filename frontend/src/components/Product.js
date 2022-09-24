import React from 'react';
import { Link } from 'react-router-dom';
// import { Flex, Heading, Image, Text, Button, useColorModeValue } from '@chakra-ui/react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import Rating from './Rating';

const Product = ({ product }) => {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

  return (
    // <Flex direction={'column'} boxShadow="2xl" bg={bgColor} rounded="md">
    //   <Link to={`/product/${product.id}`}>
    //     <Image src={product.image} rounded="md" fit="cover" cursor={'pointer'}></Image>
    //   </Link>

    //   <Flex direction={'column'}>
    //     <Flex direction={'column'} align="center" gap={2}>
    //       <Link to={`/product/${product.id}`}>
    //         <Heading as="h4" size="md">
    //           {product.brand}
    //         </Heading>
    //       </Link>

    //       <Link to={`/product/${product.id}`}>
    //         <Text textAlign="center" minHeight="50px" cursor={'pointer'} >
    //           {product.name}
    //         </Text>
    //       </Link>

    //       <Heading as="h2" size="lg">
    //         $ {product.price}
    //       </Heading>
    //       <Rating
    //         rating={product.rating}
    //         text={`Total of ${product.numReviews} reviews`}
    //         color="#f7d600"
    //       />
    //     </Flex>
    //   </Flex>

    //   <Button
    //     colorScheme="teal"
    //     variant={'ghost'}
    //     minHeight="50px"
    //     width={'100%'}
    //     border="none"
    //   >
    //     ADD TO CART
    //   </Button>
    // </Flex>
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${product.image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Link to={`/product/${product.id}`}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={product.image}
            />
          </Link>
        </Box>

        <Stack pt={10} align={'center'}>
          <Link to={`/product/${product.id}`}>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
            >
              {product.brand}
            </Text>
          </Link>
          <Link to={`/product/${product.id}`}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {product.name}
            </Heading>
          </Link>
          <Rating
            rating={product.rating}
            text={`${product.num_reviews} reviews`}
            color="#f7d600"
          />
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ${product.price}
            </Text>
            {/* <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text> */}
          </Stack>
        </Stack>
        <Button
          colorScheme="teal"
          variant={'ghost'}
          minHeight="50px"
          width={'100%'}
          border="none"
        >
          ADD TO CART
        </Button>
      </Box>
    </Center>
  );
};

export default Product;
