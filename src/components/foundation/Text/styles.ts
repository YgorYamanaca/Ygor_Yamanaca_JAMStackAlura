import styled, { CSSProperties } from 'styled-components';
import get from 'lodash/get';
import ITypographyVariants from '@/theme/styles/typographys';
import { propToStyle } from 'utils/propToStyle';
import TextStyleVariantsMap from './TypographyMap';

interface ITextBaseStyle{
  readonly variant: keyof ITypographyVariants,
}

const TextBase = styled.span<ITextBaseStyle>`
  ${({ variant }) => TextStyleVariantsMap[variant]};

  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};

  ${(props) => {
    return (Object.keys(props) as Array<keyof CSSProperties>).map((keys) => {
      return propToStyle(keys)
    })
  }}
`;

export default TextBase;
