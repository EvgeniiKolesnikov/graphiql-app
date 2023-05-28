import { Card, Image, Text, Group, SimpleGrid } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import s from './WelcomeContainer.module.scss';

import imageEvgenii from '../../assets/Evgenii.jpeg';
import imageAlexey from '../../assets/Alexey.jpeg';
import imageYana from '../../assets/Yana.jpeg';

export const WelcomeContainer = () => {
  const { t } = useTranslation();
  const breakpoint = useMediaQuery('(max-width: 660px)');
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{t('About project and course')}</h2>
      <div className={s.description}>{t('Main goal.')}</div>
      <h1 className={s.title}>{t('Our team')}</h1>
      <SimpleGrid
        spacing={'lg'}
        cols={3}
        breakpoints={[{ maxWidth: 'xs', cols: 1 }]}
        style={{ justifyContent: 'center', padding: '0 1rem 0' }}
      >
        <Card padding="md" radius="md">
          <Card.Section style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              src={imageEvgenii}
              radius="50%"
              width={breakpoint ? '200px' : '250px'}
              styles={{
                imageWrapper: { display: 'flex', justifyContent: 'center' },
              }}
              alt="Team Lead"
            />
          </Card.Section>
          <Group position="center" mt="md" mb="xs">
            <Text size="1.6rem" weight={700} className={s.name}>
              {t('Evgenii Kolesnikov')}
            </Text>
          </Group>
          <Text size="1.6rem" className={s.text}>
            {t('Team Lead of our team!')}
          </Text>
        </Card>
        <Card padding="md" radius="md">
          <Card.Section style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              className={s.image}
              src={imageYana}
              width={breakpoint ? '200px' : '250px'}
              styles={{
                imageWrapper: { display: 'flex', justifyContent: 'center' },
              }}
              radius="50%"
              alt="Developer"
            />
          </Card.Section>
          <Group position="center" mt="md" mb="xs">
            <Text size="1.6rem" weight={700} className={s.name}>
              {t('Yana Pranko')}
            </Text>
          </Group>
          <Text size="1.6rem" className={s.text}>
            {t('Developer. Yana')}
          </Text>
        </Card>
        <Card padding="md" radius="md">
          <Card.Section style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              className={s.image}
              src={imageAlexey}
              radius="50%"
              width={breakpoint ? '200px' : '250px'}
              styles={{
                imageWrapper: { display: 'flex', justifyContent: 'center' },
              }}
              alt="Developer"
            />
          </Card.Section>
          <Group position="center" mt="md" mb="xs">
            <Text size="1.6rem" weight={700} className={s.name}>
              {t('Aliaksey Kashirsky')}
            </Text>
          </Group>
          <Text size="1.6rem" className={s.text}>
            {t('Developer. Alexey')}
          </Text>
        </Card>
      </SimpleGrid>
    </div>
  );
};
