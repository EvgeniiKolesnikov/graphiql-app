import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export const DocExplorer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { t } = useTranslation();

  return (
    <>
      <Drawer
        size={'xl'}
        position="right"
        opened={opened}
        onClose={close}
        styles={{ close: { width: '3rem' }, title: { fontSize: '2rem', fontWeight: 'bold' } }}
        closeButtonProps={{ iconSize: '3rem' }}
        title={t('docs')}
        withOverlay={false}
      >
        {
          <iframe
            src="./docs/index.html"
            loading="lazy"
            style={{ height: '90vh', width: '100%' }}
            title="Documentation for graphQL API"
          />
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
