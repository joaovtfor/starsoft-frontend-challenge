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
  position: relative;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -8px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  padding: 0.125rem 0.375rem;
  font-size: 0.625rem;
  font-weight: bold;
`;
