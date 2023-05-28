import s from './RequestSection.module.scss';
import { forwardRef } from 'react';

type Props = {
  button: JSX.Element;
  onKeyDown: () => void;
  children: JSX.Element | JSX.Element[];
};

export const RequestSection = forwardRef<HTMLSpanElement, Props>(
  ({ button, onKeyDown, children }: Props, spanRef) => (
    <div className={s.wrapper}>
      {button}
      <span
        ref={spanRef}
        className={s.request}
        onKeyDown={onKeyDown}
        contentEditable
        suppressContentEditableWarning={true}
      ></span>
      {children}
    </div>
  )
);
