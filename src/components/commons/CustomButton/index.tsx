import React from 'react';
import IColors from '@/interfaces/colors';
import Text from '@/components/foundation/Text';
import SendIcon from '@/assets/Icons/sendIcon';
import CustomButtonStyle from './styles';

type ICustomButton = {
  type: 'button' | 'submit' | 'reset' | undefined,
  text: string,
  onClick: Function,
  color?: keyof IColors,
  disabled: boolean,
}

const CustomButton: React.FC<ICustomButton> = ({
  text, onClick, color = 'primary', type, disabled,
}) => (
  <CustomButtonStyle.Container type={type} color={color} onClick={() => onClick()} disabled={disabled}>
    <Text>
      {text}
    </Text>
    <CustomButtonStyle.IconWrapper>
      <SendIcon />
    </CustomButtonStyle.IconWrapper>
  </CustomButtonStyle.Container>
);

export default CustomButton;
