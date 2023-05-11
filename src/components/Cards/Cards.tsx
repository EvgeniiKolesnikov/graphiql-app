import { Grid, Card, Image, Text, Group } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import s from './Card.module.scss';

export const Cards = () => {
  const { t } = useTranslation();
  return (
    <>
      <Grid justify="space-around">
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={160}
                alt="Norway"
              />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
              <Text size="2rem" weight={700}>
                {t('Evgenii Kolesnikov')}
              </Text>
            </Group>
            <Text size="1.6rem" className={s.text}>
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={160}
                alt="Norway"
              />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
              <Text size="2rem" weight={700}>
                {t('Aliaksey Kashirsky')}
              </Text>
            </Group>
            <Text size="1.6rem" className={s.text}>
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={160}
                alt="Norway"
              />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
              <Text size="2rem" weight={700}>
                {t('Yana Pranko')}
              </Text>
            </Group>
            <Text size="1.6rem" className={s.text}>
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
};
