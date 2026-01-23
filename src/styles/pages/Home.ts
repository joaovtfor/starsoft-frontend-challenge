import styled from 'styled-components';

export const HomeContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 20px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`;
