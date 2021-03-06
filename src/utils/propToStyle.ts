import { CSSProperties } from 'react';
import { CSSProp } from 'styled-components';
import IBreakpoints from 'interfaces/breakpoints';
import breakpointsMedia from './breakpointsMedia';

export type IPropToStyle = {
  [cssKey in keyof CSSProperties]?: CSSProperties[cssKey] |
  {[key in keyof IBreakpoints]?: CSSProperties[cssKey]};
}

export function propToStyle(propName: keyof IPropToStyle) {
  return (props: IPropToStyle): CSSProp | {[key in keyof CSSProperties]?: CSSProperties[key]} => {
    const propValue: string | number | undefined |
    {[key in keyof IBreakpoints]?: CSSProperties[keyof CSSProperties]} = props[propName];
    if (typeof propValue === 'object') {
      return breakpointsMedia({
        mobile: {
          [propName]: propValue.mobile,
        },
        desktop: {
          [propName]: propValue.desktop,
        },
      });
    }

    return {
      [propName]: props[propName],
    };
  };
}
