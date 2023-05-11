import { Button } from '@mantine/core';
import { FC } from 'react';
import s from './Button.module.scss';

type BtnProps = {
  text: string;
};

export const Btn: FC<BtnProps> = ({ text }) => {
  return (
    <Button color="grape" size="md" uppercase className={s.btn}>
      {text}
    </Button>
  );
};
