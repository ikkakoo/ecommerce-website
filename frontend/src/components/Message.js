import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const Message = ({ error, status, title }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle>{title}!</AlertTitle>
      <AlertDescription>
        {error}
      </AlertDescription>
    </Alert>
  );
};

export default Message;
