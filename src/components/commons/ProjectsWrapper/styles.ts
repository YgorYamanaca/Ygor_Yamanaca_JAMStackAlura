import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 65px 0;
  background-color: ${({ theme }) => theme.colors.background.main.color};
`;

const TitleBox = styled.div`
  display:flex;
  justify-content: center;
  margin-bottom: 20px;
  ${breakpointsMedia({ 
    mobile: css`
      font-size: 36px;
    `,
    desktop: css`
      font-size: 46px;
    `,
  })}
  font-weight:700;
  color: ${({ theme }) => theme.colors.primary.main.color};
`;

const ProjectsBox = styled.div`
  display:flex;
  flex-direction:row;
  flex-flow: row wrap;
  justify-content:space-evenly;
  align-items:center;
`;

const ProjectsWrapperStyle = {
  Container,
  TitleBox,
  ProjectsBox,
}

export default ProjectsWrapperStyle;
