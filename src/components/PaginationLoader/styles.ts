import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 400px;
  margin: 40px auto;
  padding: 0 20px;
`;

export const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.bgInput};
  border-radius: 10px;
  overflow: hidden;
`;

interface ProgressProps {
  $percentage: number;
}

export const ProgressFill = styled.div<ProgressProps>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: width 0.5s ease-out;
`;

export const LoadButton = styled.button`
  background-color: ${({ theme }) => theme.colors.bgInput};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 32px;
  border-radius: 4px;
  font-weight: 600;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    filter: brightness(1.2);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    &:hover {
      filter: none;
    }
  }
`;
