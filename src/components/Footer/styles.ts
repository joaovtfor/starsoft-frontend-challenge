import styled from 'styled-components';

export const Container = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bgMain};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.44;
  font-size: 0.875rem;
`;
