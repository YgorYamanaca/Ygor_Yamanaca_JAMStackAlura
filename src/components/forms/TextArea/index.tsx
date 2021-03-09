import React, { ChangeEvent } from 'react';
import TextAreaStyle from './styles';

type ITextField = {
  type?: string,
  placeholder: string,
  name: string,
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  value: string,
}

const TextArea: React.FC<ITextField> = ({
  placeholder = 'Digite o seu texto aqui!', name, onChange, value,
}) => (
  <TextAreaStyle.Container>
    <TextAreaStyle.Input
      placeholder={placeholder}
      name={name}
      onChange={(event) => onChange(event)}
      value={value}
    />
  </TextAreaStyle.Container>
);

export default TextArea;
