import { css, CSSProp } from 'styled-components';
import IBreakpoints, { breakpoints } from '@/theme/styles/breakpoints';

function breakpointsMedia(cssByBreakpoint: {[key in keyof IBreakpoints]?: CSSProp}): CSSProp {
  const breakpointNames: (keyof IBreakpoints)[] = Object.keys(breakpoints) as Array<keyof IBreakpoints>;
  return breakpointNames
    .filter((breakpointName): boolean => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointName): CSSProp => css`
    @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
      ${cssByBreakpoint[breakpointName]}
    }
  `);
}

export default breakpointsMedia;
