import { Card, Image, Text, Group, SimpleGrid } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import s from './Card.module.scss';

export const Cards = () => {
  const { t } = useTranslation();
  const breakpoint = useMediaQuery('(max-width: 660px)');
  return (
    <SimpleGrid
      spacing={'lg'}
      cols={3}
      breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      style={{ justifyContent: 'center', padding: '0 1rem 0' }}
    >
      <Card shadow="sm" padding="md" radius="md" withBorder style={{ border: '1px solid #000000' }}>
        <Card.Section style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/src/assets/Evgeniy.jpeg"
            radius="50%"
            width={breakpoint ? '65%' : '75%'}
            styles={{
              imageWrapper: {
                display: 'flex',
                justifyContent: 'center',
              },
            }}
            alt="Team Lead"
          />
        </Card.Section>
        <Group position="center" mt="md" mb="xs">
          <Text size="1.6rem" weight={700} className={s.title}>
            {t('Evgenii Kolesnikov')}
          </Text>
        </Group>
        <Text size="1.6rem" className={s.text}>
          Team Lead of our team! Responsible for the implementation of the editor and other.
        </Text>
      </Card>
      <Card shadow="sm" padding="md" radius="md" withBorder>
        <Card.Section style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            className={s.image}
            src="/src/assets/Alexey.jpeg"
            radius="50%"
            width={breakpoint ? '65%' : '75%'}
            styles={{ imageWrapper: { display: 'flex', justifyContent: 'center' } }}
            alt="Developer"
          />
        </Card.Section>
        <Group position="center" mt="md" mb="xs">
          <Text size="1.6rem" weight={700} className={s.title}>
            {t('Aliaksey Kashirsky')}
          </Text>
        </Group>
        <Text size="1.6rem" className={s.text}>
          Developer. Responsible for user authorization, notifications and other.
        </Text>
      </Card>
      <Card shadow="sm" padding="md" radius="md" withBorder>
        <Card.Section style={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            className={s.image}
            src="/src/assets/Yana.jpeg"
            width={breakpoint ? '65%' : '75%'}
            styles={{ imageWrapper: { display: 'flex', justifyContent: 'center' } }}
            radius="50%"
            alt="Developer"
          />
        </Card.Section>
        <Group position="center" mt="md" mb="xs">
          <Text size="1.6rem" weight={700} className={s.title}>
            {t('Yana Pranko')}
          </Text>
        </Group>
        <Text size="1.6rem" className={s.text}>
          Developer. Responsible for UI, adaptive, docs section and other.
        </Text>
      </Card>
    </SimpleGrid>
  );
};
