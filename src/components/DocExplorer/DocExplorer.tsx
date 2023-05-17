import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';
import { Suspense } from 'react';
import { Spinner } from '..';

export const DocExplorer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        size={'xl'}
        position="right"
        opened={opened}
        onClose={close}
        styles={{ close: { width: '3rem' }, title: { fontSize: '2rem', fontWeight: 'bold' } }}
        closeButtonProps={{ iconSize: '3rem' }}
        title="DOCS"
        withOverlay={false}
      >
        {
          <Suspense fallback={<Spinner />}>
            <iframe
              src="./docs/index.html"
              loading="lazy"
              style={{ height: '90vh', width: '100%' }}
              title="Documentation for graphQL API"
            />
          </Suspense>
        }
      </Drawer>

      <Group position="left">
        <Button color="dark" size="lg" uppercase onClick={open}>
          Open Docs
        </Button>
      </Group>
    </>
  );
};
