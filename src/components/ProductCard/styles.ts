import styled, { css, keyframes } from 'styled-components';

interface OverlayProps {
  isVisible: boolean;
}

interface BuyButtonProps {
  isAdded?: boolean;
}

const fadeInLetter = keyframes`
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const sweepEffect = keyframes`
  0% { left: -100%; }
  50% { left: 0%; }
  100% { left: 100%; }
`;

const fadeOut = keyframes`
  from { opacity: 1; filter: blur(0); }
  to { opacity: 0; filter: blur(4px); }
`;

const fadeInButtonText = keyframes`
  from { 
    opacity: 0; 
    transform: scale(0.95);
  }
  to { 
    opacity: 1; 
    transform: scale(1);
  }
`;

export const CardContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
  height: 420px;
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
  border-radius: 8px;
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

  &:hover {
    text-decoration: underline;
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
  pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out;
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

export const BuyButton = styled.button<BuyButtonProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  border: none;
  transition: background-color 0.5s ease;
  cursor: ${({ isAdded }) => (isAdded ? 'default' : 'pointer')};
  position: relative;
  overflow: hidden;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isAdded }) =>
    !isAdded &&
    css`
      &:hover {
        filter: brightness(1.1);
      }
      &:active {
        transform: scale(0.98);
      }
    `}
`;

export const LetterContainer = styled.span<{ $isExiting: boolean }>`
  display: flex;
  justify-content: center;

  ${({ $isExiting }) =>
    $isExiting &&
    css`
      animation: ${fadeOut} 0.4s ease forwards;
      animation-delay: 0.2s;
    `}
`;

export const AnimatedLetter = styled.span<{ $delay: number }>`
  display: inline-block;
  opacity: 0;
  animation: ${fadeInLetter} 0.3s ease forwards;
  animation-delay: ${({ $delay }) => $delay}s;
  font-size: 0.75rem;
`;

export const SweepBar = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.8),
    ${({ theme }) => theme.colors.primary}
  );
  z-index: 5;
  animation: ${sweepEffect} 0.8s ease-in-out forwards;
`;

export const BuyTextContainer = styled.span`
  animation: ${fadeInButtonText} 0.3s ease-out forwards;
  font-weight: 600;
`;
