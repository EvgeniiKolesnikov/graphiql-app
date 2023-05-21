import { Suspense } from 'react';
import { Spinner } from '..';
import Router from '../Router/Router';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from '../../pages/ErrorPage';

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={<Spinner />}>
        <Router />
      </Suspense>
    </ErrorBoundary>
  );
};
