import s from './DocsContainer.module.scss';
import { DocsCrossButton } from 'components';

interface DocsContainerProps {
  onClick: () => void;
  docsOpened: boolean;
  children: JSX.Element;
}

export const DocsContainer = ({ docsOpened, onClick, children }: DocsContainerProps) => {
  return (
    <div className={s.container}>
      <div className={docsOpened ? s.outter : `${s.outter} ${s.hide}`}>
        <DocsCrossButton onClick={onClick} />
        {children}
      </div>
    </div>
  );
};
