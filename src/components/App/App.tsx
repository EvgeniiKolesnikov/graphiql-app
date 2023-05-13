import { Suspense } from 'react';
import { Spinner } from '..';
import Router from '../Router/Router';
import { Provider } from 'react-redux';
import store from '../../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Router />
      </Suspense>
    </Provider>
  );
};
