import { Suspense } from 'react';
import { Spinner } from '..';
import Router from '../Router/Router';

export const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router />
    </Suspense>
  );
};
