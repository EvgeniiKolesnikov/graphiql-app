import wrapPromise from './wrapper';
import { notifications } from '@mantine/notifications';

const fetcher = (url: string, graphqlParams: object) => {
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(graphqlParams),
  })
    .then((res) => res.json())
    .then((res) => JSON.stringify(res.data, null, 2))
    .catch((e) => {
      notifications.show({
        title: 'Fetching schema error',
        message: e.toString(),
        styles: () => ({
          title: { fontSize: '14px' },
        }),
      });
      console.log(e);
    });
  return wrapPromise(promise);
};

export default fetcher;
