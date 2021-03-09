import Text from '@/components/foundation/Text';
import React from 'react';
import LinkButtonStyle from './styles';

type ILinkButton = {
  text: string,
  onClick: Function,
}

const LinkButton: React.FC<ILinkButton> = ({ text = '', onClick }) => (
  <LinkButtonStyle.Container
    onClick={() => onClick()}
  >
    <Text>
      {`<${text} />`}
    </Text>
  </LinkButtonStyle.Container>
);

export default LinkButton;
