import ITextBox from 'interface/TextBox';
import React from 'react';
import TextBoxStyle from './styles';

const TextBox: React.FC<ITextBox> = ({ title, context }) => {

  return(
    <TextBoxStyle.Container>
      {title}
      {context}
    </TextBoxStyle.Container>
  );
};

export default TextBox;
