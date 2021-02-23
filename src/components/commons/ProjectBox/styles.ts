import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.div`
  display:flex;
  padding: 20px 15px;
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.5);
  max-width: 475px;
  margin: 19px;
  ${breakpointsMedia({ 
    mobile: css`
      flex-direction: column;
      align-items:center;
    `,
    desktop: css`
      flex-direction: row;
      justify-content:space-between;
    `,
  })}
  
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  border-radius: 25px;
  z-index: 15;
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
  & > hr {
    width:100%;
    margin-left:0;
    margin-right:0;
    background-color: ${({ theme }) => theme.colors.primary.main.contrastText};
  }
`;

const ImageBox = styled.img`
  display:flex;
  border-radius: 5px;
  max-width:250px;
  min-height:200px;
  background-size:cover;
  background-position:inherit;
`;

const ProjectBoxStyle = {
  Container,
  ProjectContext,
  ImageBox,
}

export default ProjectBoxStyle;
