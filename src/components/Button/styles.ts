import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  border: none;
  position: relative;
  overflow: hidden;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
`;

export const ButtonTextContainer = styled(motion.span)`
  display: block;
  font-weight: 600;
`;

export const LetterContainer = styled(motion.span)`
  display: flex;
  justify-content: center;
`;

export const AnimatedLetter = styled(motion.span)`
  display: inline-block;
  font-size: 0.75rem;
`;

export const SweepBar = styled(motion.div)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 40%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.2) 60%,
    transparent 100%
  );
  z-index: 5;
`;
