import React, { Children } from 'react';
import { Container } from '@chakra-ui/react';

const Form = ({ children }) => {
  return <Container maxW={'container.lg'}>{children}</Container>;
};

export default Form;
