import get from 'lodash/get';
import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.div`
  display:flex;
  position:relative;
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
      max-width: 525px;
      align-items:flex-start;
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

type ImageBox = {
  projectPhoto: string;
}

const ImageBox = styled.div<ImageBox>`
  display:flex;
  border-radius: 5px;
  min-width:300px;
  min-height:200px;
  background-size:cover;
  position:relative;
  background-image: ${({projectPhoto}) => `url(${projectPhoto})`};
  cursor:pointer;
`;

type StatusTag = {
  status: 'Done' | 'In Progress'
}

const StatusTag = styled.div<StatusTag>`
  position: absolute;
  top:8px;
  left:8px;
  background-color: ${({theme, status}) => get(theme, `colors.statusColor.${status=== 'Done'? 'done' : 'inProgress'}`)};
  z-index: 150;
  padding:2px 10px;
  border-radius:15px;
  color: ${({theme}) => theme.colors.primary.main.contrastText};
`;

const ProjectBoxStyle = {
  Container,
  ProjectContext,
  ImageBox,
  StatusTag,
}

export default ProjectBoxStyle;
