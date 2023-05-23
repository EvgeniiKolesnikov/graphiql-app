const fetcher = async (url: string, graphqlParams: object) => {
  const data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(graphqlParams),
  });
  const result = await data.json();
  return result;
};

export default fetcher;
