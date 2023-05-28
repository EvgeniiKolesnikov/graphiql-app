import s from './Editor.module.scss';
import { Accordion } from '@mantine/core';
import { MutableRefObject, useRef, useState } from 'react';

import {
  DocsExplorer,
  HeadersSection,
  PlayButton,
  RequestSection,
  ResponseSection,
  VariablesSection,
} from 'components';

const API = 'https://rickandmortyapi.com/graphql';

export const Editor = () => {
  const [query, setQuery] = useState<string>(' ');
  const [schema, setSchema] = useState<null | string>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const fetcher = async (url: string, params: object) => {
    const data = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(params, null, 2),
    });
    const result = await data.json();
    setSchema(() => JSON.stringify(result, null, 2));
  };

  const getQuery = async (refElem: MutableRefObject<object | null>) => {
    if (refElem) {
      const elem = refElem.current as HTMLSpanElement;
      setQuery(() => elem.textContent || '');
    }
  };

  const updateSchema = async (query: string) => {
    await getQuery(spanRef);
    await fetcher(API, { query });
  };

  const onKeyDown = () => {
    setTimeout(() => {
      getQuery(spanRef);
    }, 100);
  };

  return (
    <div className={s.editor}>
      <RequestSection
        ref={spanRef}
        onKeyDown={onKeyDown}
        button={<PlayButton onClick={() => updateSchema(query)} />}
      >
        <Accordion
          variant="contained"
          radius="xs"
          styles={{
            control: {
              backgroundColor: '#f0f0f0',
              ':hover': { backgroundColor: '#f3f3f3' },
            },
            panel: { backgroundColor: '#f0f0f0' },
            item: { borderColor: '#dbc3de' },
          }}
        >
          <Accordion.Item value="variables">
            <Accordion.Control sx={{ fontSize: '14px' }}>Variables</Accordion.Control>
            <Accordion.Panel>
              <VariablesSection />
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="headers">
            <Accordion.Control sx={{ fontSize: '14px' }}>Headers</Accordion.Control>
            <Accordion.Panel>
              <HeadersSection />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </RequestSection>

      <ResponseSection schema={schema} />

      <div className={s.explorer}>
        <DocsExplorer />
      </div>
    </div>
  );
};
