import React from 'react';
import { Alert, AlertIcon, Text } from '@chakra-ui/react';

const Message = ({ status, description }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <Text>
        {description}
      </Text>
      
    </Alert>
  );
};

export default Message;
