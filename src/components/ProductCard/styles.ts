import styled, { keyframes } from 'styled-components';

interface OverlayProps {
  isVisible: boolean;
}

const cardEntrance = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const CardContainer = styled.article<{ $index: number }>`
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
  height: 420px;
  opacity: 0;
  animation: ${cardEntrance} 0.5s ease-out forwards;
  animation-delay: ${({ $index }) => ($index % 8) * 0.1}s;
  transition:
    transform 0.2s,
    border 0.3s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 200px;
  width: 100%;
  position: relative;
`;

export const Title = styled.h3`
  margin: 10px 0 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const DescriptionRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 1.3rem;
`;

export const ShortDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  opacity: 0.5;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const DescriptionOverlay = styled.div<OverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.98);
  padding: 30px 20px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s;
`;

export const FullDescriptionText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 8px;
  border-radius: 4px;
  margin-top: 15px;
  cursor: pointer;
  transition:
    border-color 0.3s,
    color 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: auto;
  padding-top: 10px;
  svg {
    color: #627eea;
  }
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};

  .spinner {
    font-size: 2rem;
    animation: ${spin} 1s linear infinite;
  }
`;

export const ErrorWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2a2a2a;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 8px;
  gap: 8px;

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;
