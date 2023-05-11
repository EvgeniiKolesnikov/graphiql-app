import { Loader } from '@mantine/core';
import s from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={s.wrapper}>
      <Loader color="grape" size="xl" variant="bars" />;
    </div>
  );
};
