import { useEffect, useRef, useState } from 'react';
import { unknown } from 'zod';

type IFrameProps = React.ComponentPropsWithRef<'iframe'>;
type MutableObject = {
  promise: null | Promise<void>;
  resolve: () => void;
  reject: () => void;
};

export const IFrame = (props: IFrameProps) => {
  const [, setIframeLoading] = useState(false);
  const awaiter = useRef<MutableObject>({
    promise: null,
    resolve: () => unknown,
    reject: () => unknown,
  });

  if (awaiter.current?.promise) {
    throw awaiter.current.promise;
  }

  useEffect(() => {
    if (awaiter.current.promise === null) {
      awaiter.current.promise = new Promise<void>((resolve, reject) => {
        Object.assign(awaiter.current, { resolve, reject });
      });
      setIframeLoading(true);
    }
  }, []);

  return (
    <iframe
      {...props}
      src="/docs/index.html"
      style={{ height: '100%', width: '100%' }}
      title="Documentation for graphQL API"
      onLoad={(e) => {
        awaiter.current.promise = null;
        awaiter.current?.resolve();
        props.onLoad?.(e);
      }}
      onError={(err) => {
        awaiter.current.promise = null;
        awaiter.current?.reject();
        props.onError?.(err);
      }}
    />
  );
};
