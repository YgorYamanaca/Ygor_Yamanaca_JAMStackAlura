import { css, CSSProp } from 'styled-components';
import IBreakpoints from 'interfaces/breakpoints';

const breakpoints: IBreakpoints = {
  mobile: 0,
  desktop: 768,
};

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
