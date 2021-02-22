import Text from '@/components/foundation/Text';
import React from 'react';
import FooterStyle from './styles';

const Footer: React.FC = () => {
  return(
    <FooterStyle.Container>
      <FooterStyle.TextBox>
        <Text variant='text' tag='p'>
          Feito para o desafio do primeiro módulo
        </Text>
      </FooterStyle.TextBox>
    </FooterStyle.Container>
  );
};

export default Footer;