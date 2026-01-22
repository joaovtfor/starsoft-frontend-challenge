import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

const Square = styled.div<{ $color: string }>`
  width: 100px;
  height: 100px;
  background-color: ${({ theme, $color }) =>
    $color === 'primary' ? theme.colors.primary : theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Teste de Ambiente</title>
      </Head>

      <Container>
        <Title>Teste de Estilização</Title>

        <div style={{ display: 'flex', gap: '10px' }}>
          <Square $color="primary">Primary</Square>
          <Square $color="secondary">Secondary</Square>
        </div>
      </Container>
    </>
  );
}
