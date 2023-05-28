import s from './PlayButton.module.scss';

interface PlayButtonProps {
  onClick?: () => void;
}

export const PlayButton = ({ onClick }: PlayButtonProps) => {
  return <button className={s.button} onClick={onClick}></button>;
};
