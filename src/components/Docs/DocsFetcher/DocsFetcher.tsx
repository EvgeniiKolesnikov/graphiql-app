import fetcher from '../../../utils/introspectionRequest';
import { getIntrospectionQuery } from 'graphql';
import { FC } from 'react';

const urlAPI = 'https://rickandmortyapi.com/graphql';
const res = fetcher(urlAPI, { query: getIntrospectionQuery() });

export const DocsFetcher: FC = () => {
  res.read();
  return null;
};
