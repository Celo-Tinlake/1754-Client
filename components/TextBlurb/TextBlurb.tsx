import { Container, Text, Title } from '@mantine/core';

export default function TextBlurb({ title, body }: { title: string; body: string }) {
  return (
    <>
      <Title order={3}>{title}</Title>
      <Text mt={15}>{body}</Text>
    </>
  );
}
