import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bgMain};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.font};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: ${({ theme }) => theme.font};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bgMain};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.bgInput};
    border-radius: 4px;
  }
`;
