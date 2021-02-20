import { propToStyle } from 'utils/propToStyle';
import styled, { CSSProperties } from 'styled-components';

type IBoxProps = {
  [cssKey in keyof CSSProperties]?: CSSProperties[cssKey]
}

const BoxContainer = styled.div<IBoxProps>`
  // Testando nova solução para pegar qualquer propriedade e aplicar
  ${(props) => {
    return (Object.keys(props) as Array<keyof CSSProperties>).map((keys) => {
      return propToStyle(keys)
    })
  }}
`;

export default BoxContainer;
