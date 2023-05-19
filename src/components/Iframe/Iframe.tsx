import { Suspense, useEffect, useRef, useState } from 'react';

type IFrameProps = React.ComponentPropsWithRef<'iframe'> & {
  fallback?: JSX.Element;
};

export const IFrame = (props: IFrameProps) => {
  const { fallback, ...rest } = props;

  return (
    <Suspense fallback={fallback || 'loading...'}>
      <IFrameImplementation {...rest} />
    </Suspense>
  );
};

export const IFrameImplementation = (props: React.ComponentPropsWithRef<'iframe'>) => {
  const awaiter = useRef<
    | null
    | {
        promise: null | Promise<void>;
        resolve: () => void;
        reject: () => void;
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | any
  >(null);

  const [, triggerLoad] = useState(false);

  if (awaiter.current?.promise) {
    throw awaiter.current.promise;
  }
  useEffect(() => {
    if (awaiter.current === null) {
      awaiter.current = {};
      awaiter.current.promise = new Promise<void>((resolve, reject) => {
        Object.assign(awaiter.current, { resolve, reject });
      });
      triggerLoad(true);
    }
  }, []);
  return (
    <iframe
      {...props}
      src="/docs/index.html"
      style={{ height: '90vh', width: '100%' }}
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
