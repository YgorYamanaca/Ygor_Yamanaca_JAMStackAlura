import 'styled-components';
import IColors from './styles/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly colors: IColors,
    readonly fontFamily: string,
  }
}
