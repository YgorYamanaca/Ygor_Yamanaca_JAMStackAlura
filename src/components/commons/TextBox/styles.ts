import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.div`
  display:flex;
  position:relative;
  flex-direction: column;
  justify-content:center;
  align-items:center;
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
  position: absolute;
  top: -35px;
  margin-bottom: 20px;
  padding: 2.5px 25px;
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
  background-color: ${({ theme }) => theme.colors.background.main.color};
`;

const ContentBox = styled.div`
  padding:20px;
  line-height:1.5;
  border-radius:20px;
  ${breakpointsMedia({ 
    mobile: css`
      margin-top: 10px;
    `,
    desktop: css`
      margin-top: 30px;
    `,
  })}
`;

const ProjectBoxStyle = {
  Container,
  TitleBox,
  ContentBox,
}

export default ProjectBoxStyle;
