import IColors from '@/interfaces/colors';
import ITypographyVariants from '@/interfaces/typographys';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly colors: IColors,
    readonly typography: ITypographyVariants,
    readonly fontFamily: string,
  }
}
