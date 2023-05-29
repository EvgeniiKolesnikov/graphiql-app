import s from './DocsCrossButton.module.scss';

interface DocsCrossButtonProps {
  onClick?: () => void;
}

export const DocsCrossButton = ({ onClick }: DocsCrossButtonProps) => {
  return <button className={s.closeButton} onClick={onClick}></button>;
};
