import styled from 'styled-components';

export const CardContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${({ theme }) => theme.colors.white};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 8px;
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h3`
  margin: 10px 0 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: auto;

  svg {
    color: #627eea;
  }
`;

export const BuyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.98);
  }
`;
