import { useState, useEffect } from 'react';

import Header from '../../components/Header';

import { Container, Title, Text } from './styles';

const Help = (): JSX.Element => {
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const response = await fetch(
        'https://baconipsum.com/api/?type=meat-and-filler',
      );

      const result = await response.json();
      setParagraphs(result);
    }

    loadData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title>Ajuda</Title>
        {paragraphs.map(paragraph => (
          <Text>{paragraph}</Text>
        ))}
      </Container>
    </>
  );
};

export default Help;
