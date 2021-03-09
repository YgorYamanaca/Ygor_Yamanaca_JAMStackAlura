import React, { ChangeEvent } from 'react';
import TextFieldStyle from './styles';

type ITextField = {
  type?: string,
  placeholder: string,
  name: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

const TextField: React.FC<ITextField> = ({
  type = 'text', placeholder = 'Digite o seu texto aqui!', name, onChange, value,
}) => (
  <TextFieldStyle.Container>
    <TextFieldStyle.Input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(event) => onChange(event)}
      value={value}
    />
  </TextFieldStyle.Container>
);

export default TextField;
