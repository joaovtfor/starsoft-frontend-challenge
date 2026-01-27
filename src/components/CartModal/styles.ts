import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`;

export const ModalContent = styled(motion.aside)`
  width: 100%;
  max-width: 550px;
  background: ${({ theme }) => theme.colors.bgMain};
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  position: relative;
`;

export const CartItemCard = styled(motion.div)`
  background: #2b2b2b;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  overflow: hidden;
  min-height: 110px;
  align-items: stretch;
`;

export const ItemImage = styled.div`
  width: 90px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 6px;
  position: relative;
  flex-shrink: 0;
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;

  h4 {
    font-size: 0.9rem;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .description {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
  }

  .bottom-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .price-row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: ${({ theme }) => theme.colors.bgMain};
  padding: 5px 10px;
  border-radius: 4px;
  width: fit-content;

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    padding: 0 5px;
  }
`;

export const RemoveButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  border-top: 1px solid #333;
  padding-top: 20px;

  .total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h3 {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
    }

    .total-price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #627eea;
      display: flex;
      align-items: center;
      gap: 6px;

      span {
        font-size: 1rem;
        margin-left: 2px;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 40px;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  left: 0;
  background: ${({ theme }) => theme.colors.bgInput};
  color: ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;
