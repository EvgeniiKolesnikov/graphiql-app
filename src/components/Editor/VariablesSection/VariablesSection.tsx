import { ChangeEvent, forwardRef } from 'react';
import s from './VariablesSection.module.scss';
import { Textarea } from '@mantine/core';

type Props = {
  onChangeVars: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const VariablesSection = forwardRef<HTMLTextAreaElement, Props>(
  ({ onChangeVars }: Props, varsRef) => (
    <div className={s.wrapper}>
      <Textarea
        ref={varsRef}
        onChange={(e) => onChangeVars(e)}
        minRows={1}
        maxRows={6}
        size={'xl'}
        styles={{ input: { borderColor: '#dbc3de', ':focus-within': { borderColor: '#be4bdb' } } }}
      />
    </div>
  )
);
