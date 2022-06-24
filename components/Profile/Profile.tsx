import { Image, Stack, Text, Title } from '@mantine/core';

export default function Profile({
  first,
  last,
  role,
}: {
  first: string;
  last: string;
  role: string;
}) {
  return (
    <Stack align="center" spacing={5}>
      <Image src={`/assets/${first.toLowerCase()}.png`} height={250} width={250} radius="lg" />
      <Title order={3}>{`${first} ${last}`}</Title>
      <Text color="blue" weight={600} size="lg">
        {role}
      </Text>
    </Stack>
  );
}
