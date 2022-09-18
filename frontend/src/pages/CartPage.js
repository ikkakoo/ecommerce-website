import React, { useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

import {
  Heading,
  HStack,
  VStack,
  Image,
  AspectRatio,
  Text,
  Divider,
  Stack,
  Button,
  useColorModeValue,
  Select,
  Box,
  Icon,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const CartPage = () => {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

  const productId = useParams().id;
  const location = useLocation().search;
  const qty = location ? Number(location.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const redirect = useNavigate();
  const proceedToCheckoutHandler = () => {
    redirect('/login?redirect=shipping');
  };

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={2}
      align="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={0}>
        <Heading size="2xl">Your cart</Heading>
        <Text>Please double-check items before checking out.</Text>
      </VStack>
      {cartItems.length === 0 ? (
        <Box>
          <Message status={'info'} description={'Your cart is empty'}></Message>
          <Link to="/">
            <Button colorScheme="teal" variant="solid" mb={6}>
              Go Back
            </Button>
          </Link>
        </Box>
      ) : (
        <>
          {cartItems.map(item => (
            <HStack spacing={6} alignItems="center" w="full" key={item.product}>
              <AspectRatio ratio={1} w={24}>
                <Image src={item.image} />
              </AspectRatio>
              <Stack
                spacing={10}
                w="full"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <VStack w="full" spacing={0} alignItems="flex-start">
                  <Heading size="md">{item.name}</Heading>
                  <Text color={secondaryTextColor}>{item.description}</Text>
                </VStack>
                <Box>
                  <Select
                    variant="flushed"
                    placeholder="Select Quantity"
                    value={item.qty}
                    onChange={e =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map(x => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Select>
                </Box>

                <Button
                  variant={'ghost'}
                  colorScheme="teal"
                  onClick={() => removeFromCartHandler(item.product)}
                >
                  <Icon as={FaTrash}></Icon>
                </Button>

                <Heading size="sm" textAlign="end">
                  ${item.price * item.qty}
                </Heading>
              </Stack>
            </HStack>
          ))}
          <VStack spacing={4} alignItems="stretch" w="full">
            <HStack justifyContent="space-between">
              <Text color={secondaryTextColor}>Total Items</Text>
              <Heading size="sm">
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </Heading>
            </HStack>
            <HStack justifyContent="space-between">
              <Text color={secondaryTextColor}>Total Price</Text>
              <Heading size="sm">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </Heading>
            </HStack>
            <HStack justifyContent="space-between">
              <Text color={secondaryTextColor}>Shipping</Text>
              <Heading size="sm">$0</Heading>
            </HStack>
            <HStack justifyContent="space-between">
              <Text color={secondaryTextColor}>Taxes (estimated)</Text>
              <Heading size="sm">$0</Heading>
            </HStack>
          </VStack>
          <Divider />
          <HStack justifyContent="space-between" w="full">
            <Text color={secondaryTextColor}>Total</Text>
            <Heading size="lg">
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </Heading>
          </HStack>

          <Button
            size="lg"
            w="full"
            disabled={cartItems.length === 0}
            onClick={proceedToCheckoutHandler}
          >
            Place Order
          </Button>
        </>
      )}
    </VStack>
  );
};

export default CartPage;
