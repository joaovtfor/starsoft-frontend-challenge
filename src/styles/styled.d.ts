import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      bgMain: string;
      bgCard: string;
      bgInput: string;
      bgSecondary: string;
      textSecondary: string;
      white: string;
    };
    borderRadius: string;
    font: string;
  }
}
