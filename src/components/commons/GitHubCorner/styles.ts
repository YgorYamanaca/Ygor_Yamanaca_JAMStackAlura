import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  border: 0;
  right: 0;
  z-index: 20;
`;

const SVGWrapper = styled.svg`
  border-top-right-radius: 5px;
  fill: ${({ theme }) => theme.colors.secondary.main.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  cursor: pointer;
  &:hover .octo-arm{
    animation:octocat-wave 560ms ease-in-out
  }
  @keyframes octocat-wave{
    0%,100%{transform:rotate(0)}
    20%,60%{transform:rotate(-25deg)}
    40%,80%{transform:rotate(10deg)}
  }
  @media (max-width:500px){
    &:hover .octo-arm{
      animation:none
    }
    & .octo-arm{
      animation:octocat-wave 560ms ease-in-out
    }
  }
`;

export const GitHubCornerStyle = {
  Wrapper,
  SVGWrapper
}
