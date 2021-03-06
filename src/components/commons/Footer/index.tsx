import Text from '@/components/foundation/Text';
import React from 'react';
import FooterStyle from './styles';

const Footer: React.FC = () => (
  <FooterStyle.Container>
    <FooterStyle.TextBox>
      <Text variant="text" tag="p">
        Feito por Ygor Yamanaca
      </Text>
    </FooterStyle.TextBox>
  </FooterStyle.Container>
);

export default Footer;
