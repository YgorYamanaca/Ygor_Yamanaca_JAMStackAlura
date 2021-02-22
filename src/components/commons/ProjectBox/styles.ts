import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.div`
  display:flex;
  padding: 15px;
  box-shadow: 0px 0px 20px -15px rgba(0,0,0,0.5);
  max-width: 500px;
  justify-content:space-between;
  margin: 19px;
  ${breakpointsMedia({ 
    mobile: css`
      flex-direction: column;
    `,
    desktop: css`
      flex-direction: row;
    `,
  })}
`;

const ProjectContext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-evenly;
  text-align:center;
  ${breakpointsMedia({ 
    mobile: css`
      margin: 15px 0 0 0;
    `,
    desktop: css`
      margin: 0 0 0 15px;
    `,
  })}
  padding: 5px;
`;

const ProjectBoxStyle = {
  Container,
  ProjectContext,
}

export default ProjectBoxStyle;
