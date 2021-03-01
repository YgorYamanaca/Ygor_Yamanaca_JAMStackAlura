import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  position:relative;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.background.main.color};
  border: 5px solid ${({ theme }) => theme.colors.primary.main.color};
  border-radius: 15px;
  
  ${breakpointsMedia({
    mobile: css`
      margin: 25px 5px;
    `,
    desktop: css`
      margin: 50px 35px;
    `,  
  })}
`;

const TitleBox = styled.div`
  display:flex;
  justify-content: center;
  margin-bottom: 20px;
  position: absolute;
  top: -35px;
  padding: 2.5px 25px;
  background-color: ${({ theme }) => theme.colors.background.main.color};
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
  ${breakpointsMedia({ 
    mobile: css`
      margin-top: 10px;
    `,
    desktop: css`
      margin-top: 30px;
    `,
  })}
`;

const ProjectsWrapperStyle = {
  Container,
  TitleBox,
  ProjectsBox,
}

export default ProjectsWrapperStyle;
