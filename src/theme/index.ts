import 'styled-components';
import IColors from './styles/colors';
import ITypographyVariants from './styles/typographys';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly colors: IColors,
    readonly typography: ITypographyVariants,
    readonly fontFamily: string,
  }
}
