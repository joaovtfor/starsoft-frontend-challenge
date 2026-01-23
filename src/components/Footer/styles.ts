import styled from 'styled-components';

export const Container = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bgCard};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  margin-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.bgInput};
`;
