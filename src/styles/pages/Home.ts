import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 80vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 20px;
`;

export const FeedbackMessage = styled.div`
  text-align: center;
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
`;
