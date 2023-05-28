import s from './VariablesSection.module.scss';
import { Textarea } from '@mantine/core';

export const VariablesSection = () => {
  return (
    <div className={s.wrapper}>
      <Textarea
        autosize
        minRows={1}
        maxRows={6}
        size={'xl'}
        styles={{ input: { borderColor: '#dbc3de', ':focus-within': { borderColor: '#be4bdb' } } }}
      />
    </div>
  );
};
