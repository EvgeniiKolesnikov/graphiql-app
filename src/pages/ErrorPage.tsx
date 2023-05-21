import { useTranslation } from 'react-i18next';
import { Flex, Text } from '@mantine/core';
import error from '../assets/error.svg';

export const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <Flex justify={'center'} align={'center'} h={'100%'} direction={'column'}>
      <img src={error} alt="error image" className="notFound" />
      <Text color="red" size={'50px'}>
        {t('Error')}
      </Text>
    </Flex>
  );
};
