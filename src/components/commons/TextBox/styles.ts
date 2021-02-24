import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding: 50px 15px;
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

const ContentBox = styled.div`
  padding:20px;
  border: 5px solid ${({ theme }) => theme.colors.primary.main.color};
  line-height:1.5;
`;

const ProjectBoxStyle = {
  Container,
  TitleBox,
  ContentBox,
}

export default ProjectBoxStyle;
