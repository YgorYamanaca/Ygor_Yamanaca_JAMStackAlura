import IBreakpoints from '@/theme/styles/breakpoints';
import styled, { css, CSSProperties } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';
import { propToStyle } from 'utils/propToStyle';

type CSSPropsMap = {
  [cssKey in keyof CSSProperties]?: CSSProperties[cssKey] |
  {[key in keyof IBreakpoints]?: CSSProperties[cssKey]};
}

interface IGridProps extends CSSPropsMap {
  value?: number | {[key in keyof IBreakpoints]?: number},
  offset?: number | {[key in keyof IBreakpoints]?: number}
}

const Container = styled.div<IGridProps>`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;
  ${breakpointsMedia({
    mobile: css`
      max-width: 768px;
      padding-right: 25px;
      padding-left: 25px; 
    `,
    desktop: css`
    max-width: initial;
    padding-right: 55px;
    padding-left: 55px;
  `,
  })}
  
  ${(props) => {
    return (Object.keys(props) as Array<keyof CSSProperties>).map((keys) => {
      return propToStyle(keys)
    })
  }}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`;

const Col = styled.div<IGridProps>`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
      flex: 0 0 ${(100 * value) / 12}%;
      max-width: ${(100 * value) / 12}%;
    `;
    }
    return breakpointsMedia({
      mobile: value?.mobile
        ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.mobile) / 12}%;
        max-width: ${(100 * value.mobile) / 12}%;
      `
        : '',
      desktop: value?.desktop
        ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.desktop) / 12}%;
        max-width: ${(100 * value.desktop) / 12}%;
      `
        : '',
    });
  }}

  ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
      margin-left: ${(100 * offset) / 12}%;
    `;
    }
    return breakpointsMedia({
      mobile: offset?.mobile
        ? css`
          margin-left: ${(100 * offset.mobile) / 12}%;
        `
        : '',
      desktop: offset?.desktop
        ? css`
          margin-left: ${(100 * offset.desktop) / 12}%;
        `
        : '',
    });
  }}

  ${(props) => {
    return (Object.keys(props) as Array<keyof CSSProperties>).map((keys) => {
      console.log(keys);
      return propToStyle(keys)
    })
  }}
`;

const Grid = {
  Container,
  Row,
  Col,
};

export default Grid;
