import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.bgMain};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgInput};
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartButton = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const CartCount = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
`;