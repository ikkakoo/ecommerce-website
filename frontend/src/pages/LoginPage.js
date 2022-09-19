import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { login } from '../actions/userActions';
import FormWrapper from '../components/FormWrapper';

import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const location = useLocation().search;
  const redirect = location ? Number(location.split('=')[1]) : '/';

  const userLogin = useSelector(state => state.userLogin);

  const { error, loading, userInfo } = userLogin;

  const navigate = useNavigate();
  console.log(navigate);

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormWrapper>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="2xl">Sign In</Heading>
          <Text>
            Don't have an account?{' '}
            <Link to={redirect ? `/register?redirect${redirect}` : '/register'}>
              Sign Up here
            </Link>
          </Text>
        </VStack>
        {error && <Message status={'error'} description={error} />}
        {loading && <Loader />}
        <Flex
          w="60%"
          as="form"
          onSubmit={submitHandler}
          direction="column"
          gap={2}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>

          <Button type="submit" size="lg" w="full">
            Log In
          </Button>
        </Flex>
      </VStack>
    </FormWrapper>
  );
};

export default LoginPage;
