import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

export const SkeletonContainer = styled.div<{ $index: number }>`
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 420px;

  animation:
    ${fadeIn} 0.6s ease-out forwards,
    ${pulse} 1.5s ease-in-out infinite;

  animation-delay: ${({ $index }) => ($index % 8) * 0.05}s, 0s;
`;

export const SkeletonImage = styled.div`
  background-color: ${({ theme }) => theme.colors.bgInput};
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 200px;
  width: 100%;
`;

export const SkeletonTitle = styled.div`
  background-color: ${({ theme }) => theme.colors.bgInput};
  height: 20px;
  width: 70%;
  border-radius: 4px;
  margin-top: 10px;
`;

export const SkeletonText = styled.div`
  background-color: ${({ theme }) => theme.colors.bgInput};
  height: 14px;
  width: 100%;
  border-radius: 4px;
`;

export const SkeletonPrice = styled.div`
  background-color: ${({ theme }) => theme.colors.bgInput};
  height: 24px;
  width: 40%;
  border-radius: 4px;
  margin-top: auto;
`;

export const SkeletonButton = styled.div`
  background-color: ${({ theme }) => theme.colors.bgInput};
  height: 45px;
  width: 100%;
  border-radius: 4px;
`;
