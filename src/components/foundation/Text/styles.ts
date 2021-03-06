import styled, { CSSProperties } from 'styled-components';
import get from 'lodash/get';
import { propToStyle } from 'utils/propToStyle';
import ITypographyVariants from '@/interfaces/typographys';
import TextStyleVariantsMap from './TypographyMap';

interface ITextBaseStyle{
  readonly variant: keyof ITypographyVariants,
}

const TextBase = styled.span<ITextBaseStyle>`
  ${({ variant }) => TextStyleVariantsMap[variant]};

  color: ${({ theme, color }) => get(theme, `colors.${color}.main.color`)};

  ${(props) => (Object.keys(props) as Array<keyof CSSProperties>).map((keys) => propToStyle(keys))}
`;

export default TextBase;
