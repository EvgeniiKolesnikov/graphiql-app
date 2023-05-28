import s from './ResponseSection.module.scss';

type Props = {
  schema: string | null;
  className?: string;
};

export const ResponseSection = ({ schema }: Props) => {
  return (
    <div className={s.wrapper}>
      <pre className={s.response}>{schema}</pre>
    </div>
  );
};
