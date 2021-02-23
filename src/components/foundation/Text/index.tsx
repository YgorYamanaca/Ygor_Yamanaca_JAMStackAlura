import React, { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import TextBase from './styles';
import IBreakpoints from 'interfaces/breakpoints';
import PropTypes from 'prop-types';
import ITypographyVariants from '@/interfaces/typographys';

type CSSPropsMap = {
  [cssKey in keyof CSSProperties]?: CSSProperties[cssKey] |
  {[key in keyof IBreakpoints]?: CSSProperties[cssKey]};
};
interface ITextProps extends CSSPropsMap {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'li' | 'a' | 'span',
  variant?: keyof ITypographyVariants,
  children: ReactNode;
  color?: string;
  href?: string;
}

const Text: React.FC<ITextProps> = ({
  tag = 'span', variant = 'link', color='#ffffff', children, ...rest
}: ITextProps) => (
  <TextBase
    variant={variant}
    color={color}
    {...rest}
  >
    {children}
  </TextBase>
);

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  href: PropTypes.string,
}

Text.defaultProps = {
  tag: 'span',
  variant: 'link'
};

export default Text;
