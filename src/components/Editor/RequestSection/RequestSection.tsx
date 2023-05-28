import s from './RequestSection.module.scss';
import React, { MutableRefObject, useRef } from 'react';

type Props = {
  button: JSX.Element;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  children: JSX.Element | JSX.Element[];
};

export const RequestSection = ({ button, setQuery, children }: Props) => {
  const spanRef = useRef(null);

  const getQuery = (spanElem: MutableRefObject<object | null>) => {
    if (spanElem) {
      const elem = spanElem.current as HTMLSpanElement;
      setQuery(elem.textContent || '');
    }
  };

  return (
    <div className={s.wrapper}>
      {button}
      <span
        ref={spanRef}
        className={s.request}
        contentEditable
        suppressContentEditableWarning={true}
        onKeyDown={() => getQuery(spanRef)}
      ></span>
      {children}
    </div>
  );
};
