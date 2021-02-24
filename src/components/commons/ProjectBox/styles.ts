import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.div`
  display:flex;
  padding: 20px 15px;
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.5);
  margin: 19px;
  user-select: none;
  ${breakpointsMedia({ 
    mobile: css`
      flex-direction: column;
      align-items:center;
      max-width: 300px;
    `,
    desktop: css`
      flex-direction: row;
      justify-content:space-between;
      max-width: 475px;
    `,
  })}
  
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  border-radius: 20px;
  z-index: 15;
  :hover {
    transform: translate(-5px, -5px);
    box-shadow: 0 5px 25px 0px rgba(0,0,0,0.5);
  }
  transition: box-shadow, transform,  0.5s ease;
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
    ${breakpointsMedia({ 
      mobile: css`
        width: 80%;
      `,
      desktop: css`
        width: 100%;
      `,
    })}
    margin-left:0;
    margin-right:0;
    background-color: ${({ theme }) => theme.colors.primary.main.contrastText};
  }
`;

type imgBox = {
  intern:string;
}

const ImageBox = styled.div<imgBox>`
  display:flex;
  border-radius: 5px;
  min-width:300px;
  min-height:200px;
  background-size:cover;
  position:relative;
  background-image: ${({intern}) => `url(${intern})`};
  cursor:pointer;
`;

const ProjectBoxStyle = {
  Container,
  ProjectContext,
  ImageBox,
}

export default ProjectBoxStyle;
