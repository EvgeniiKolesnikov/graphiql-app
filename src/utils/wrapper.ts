enum handlerStatus {
  pending = 'pending',
  error = 'error',
}

function wrapPromise(promise: Promise<string | void>) {
  let status = 'pending';
  let response: string | void;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      response = res;
    },
    (err) => {
      status = 'error';
      response = err;
    }
  );

  const handler = {
    pending: () => {
      throw suspender;
    },
    error: () => {
      throw response;
    },
    default: () => response,
  };
  const read = () => {
    const result = handler[status as handlerStatus]
      ? handler[status as handlerStatus]()
      : handler.default();
    return result;
  };

  return { read };
}

export default wrapPromise;
