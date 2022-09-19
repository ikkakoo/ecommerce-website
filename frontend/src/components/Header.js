import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

import {
  Flex,
  Heading,
  Icon,
  Container,
  Menu,
  MenuList,
  MenuItem,
  Button,
  MenuButton,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

import React from 'react';

const Header = () => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(logout());
  }

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

            {userInfo ? (
              <Menu>
                <MenuButton
                  isActive={true}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  {userInfo.name}
                </MenuButton>
                <MenuList>
                  <MenuItem><Link to={'/profile'}>Profile</Link></MenuItem>
                  <MenuItem onClick={logOutHandler}>Log Out</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link to="/login">
                <Icon as={FaUser} /> LOG IN
              </Link>
            )}

            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
