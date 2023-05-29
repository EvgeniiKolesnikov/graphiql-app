import { DocsButton, DocsContainer, IFrame } from 'components';
import { Suspense, useState } from 'react';
import { DocsFetcher } from '../DocsFetcher/DocsFetcher';

export const DocsExplorer = () => {
  const [docsOpened, setDocsOpened] = useState(false);

  return (
    <Suspense fallback={<DocsButton suspense={true} />}>
      <DocsButton onClick={() => setDocsOpened(!docsOpened)} suspense={false} />
      <DocsFetcher />
      <DocsContainer docsOpened={docsOpened} onClick={() => setDocsOpened(!docsOpened)}>
        <IFrame />
      </DocsContainer>
    </Suspense>
  );
};
