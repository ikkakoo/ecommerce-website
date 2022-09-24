import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

// import {
//   Flex,
//   Heading,
//   Icon,
//   Container,
//   Menu,
//   MenuList,
//   MenuItem,
//   Button,
//   MenuButton,
// } from '@chakra-ui/react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Icon,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

import React from 'react';

const Header = () => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
      <Box as='header' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} p='2em'>
          <Heading as='h2' size='lg' >
            <Link to="/">i-shop</Link>
          </Heading>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} align="center">
              <Link to="/cart">
                <Icon as={FaShoppingCart} /> CART
              </Link>
              {userInfo ? (
                <Menu>
                  <MenuButton
                    isActive={true}
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                  >
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'} zIndex='999999' >
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={
                          'https://avatars.dicebear.com/api/male/username.svg'
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>{userInfo.name}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>
                      <Link to={'/profile'}>Profile</Link>
                    </MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem onClick={logOutHandler}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Link to="/login">
                  <Icon as={FaUser} /> LOG IN
                </Link>
              )}

              <ColorModeSwitcher />
            </Stack>
          </Flex>
        </Flex>
      </Box>
  );
};

export default Header;
