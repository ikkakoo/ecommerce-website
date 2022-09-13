import { Flex, Heading, Icon, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FaUser, FaShoppingCart } from 'react-icons/fa';


import React from 'react';

const Header = () => {
  return (
    <header>
      <Container maxW={'container.xl'} p={4} borderBottom={'2px solid'}>
        <Flex align="center" fontSize="md" justify={'space-between'}>
          <Heading>
            <Link to="/">i-Shop</Link>
          </Heading>

          <Flex gap={10} align="center">
            <Link to="/cart">
              <Icon as={FaShoppingCart} /> CART
            </Link>

            <Link to="/login">
              <Icon as={FaUser} /> LOG IN
            </Link>

            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
