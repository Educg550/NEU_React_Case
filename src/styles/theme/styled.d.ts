import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      orange: string;

      neutralGray: string;
      neutralBlack: string;

      white: string;
      black: string;
    };
  }
}
