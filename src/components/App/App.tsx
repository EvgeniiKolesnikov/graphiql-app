import Router from '../Router/Router';
import { Provider } from 'react-redux';
import store from '../../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
