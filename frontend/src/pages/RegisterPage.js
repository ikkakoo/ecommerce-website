import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { register } from '../actions/userActions';
import FormWrapper from '../components/FormWrapper';

import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const location = useLocation().search;
  const redirect = location ? Number(location.split('=')[1]) : '/';

  const userRegister = useSelector(state => state.userRegister);

  const { error, loading, userInfo } = userRegister;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = e => {
    e.preventDefault();

    if (password != confirmPassword) {
      setMessage('Passwords Do Not Match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormWrapper>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="2xl">Sign In</Heading>
          <Text>
            Already have an account?
            <Link to={redirect ? `/login?redirect${redirect}` : '/login'}>
              Sign in here
            </Link>
          </Text>
        </VStack>
        {message && <Message status={'error'} description={message} />}
        {error && <Message status={'error'} description={error} />}
        {loading && <Loader />}
        <Flex
          w="60%"
          as="form"
          onSubmit={submitHandler}
          direction="column"
          gap={2}
        >
          <FormLabel>Name</FormLabel>
          <Input
            required
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              required
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              required
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              required
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          <Button type="submit" size="lg" w="full">
            Sign Up
          </Button>
        </Flex>
      </VStack>
    </FormWrapper>
  );
};

export default RegisterPage;
