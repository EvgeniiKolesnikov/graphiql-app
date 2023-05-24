import { ErrorContainer } from '../components/ErrorContainer/ErrorContainer';
import { Flex } from '@mantine/core';

export const ErrorPage = () => {
  return (
    <Flex align={'center'} justify={'center'} h={'100%'}>
      <ErrorContainer />
    </Flex>
  );
};
