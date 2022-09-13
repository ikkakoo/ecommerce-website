import React from 'react';
import { Icon, Text, Flex } from '@chakra-ui/react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating, text, color }) => {
  return (
    <Flex align='center' gap={2}>
      <span>
        <Icon
          as={rating >= 1 ? FaStar : rating >= 0.5 ? FaStarHalfAlt : FaRegStar}
          text={text}
          color={color}
        ></Icon>
      </span>
      <span>
        <Icon
          as={rating >= 2 ? FaStar : rating >= 1.5 ? FaStarHalfAlt : FaRegStar}
          text={text}
          color={color}
        ></Icon>
      </span>
      <span>
        <Icon
          as={rating >= 3 ? FaStar : rating >= 2.5 ? FaStarHalfAlt : FaRegStar}
          text={text}
          color={color}
        ></Icon>
      </span>
      <span>
        <Icon
          as={rating >= 4 ? FaStar : rating >= 3.5 ? FaStarHalfAlt : FaRegStar}
          text={text}
          color={color}
        ></Icon>
      </span>
      <span>
        <Icon
          as={rating >= 5 ? FaStar : rating >= 4.5 ? FaStarHalfAlt : FaRegStar}
          text={text}
          color={color}
        ></Icon>
      </span>

      <Text as='sub'>{text && text}</Text>
    </Flex>
  );
};

export default Rating;
