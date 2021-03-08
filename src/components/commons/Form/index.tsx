import CloseIcon from '@/assets/Icons/closeIcon';
import TextArea from '@/components/forms/TextArea';
import TextField from '@/components/forms/TextField';
import Text from '@/components/foundation/Text';
import React, {
  FormEvent, useCallback, useState,
} from 'react';
import { IModalChildren } from '../Modal';
import FormStyles from './styles';

type IForm = {
  modalProps?: IModalChildren
  onCloseFunction: Function
};

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

const FormContent: React.FC = () => {
  const [sendInfo, setSendInfo] = useState(initialFormState);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const fieldName = event.target.getAttribute('name')?.toString();
    setSendInfo({
      ...sendInfo,
      [fieldName || 'inputKey']: event.target.value,
    });
  }, [sendInfo]);

  return (
    <form onSubmit={(event: FormEvent<Element>) => console.log('teste', event)}>
      <Text
        variant="textTitle"
        color="primary"
        textAlign="center"
        fontSize={{
          mobile: '26px',
          desktop: '34px',
        }}
      >
        Envie sua mensagem
      </Text>
      <div style={{ marginTop: '25px' }}>
        <Text
          tag="p"
          variant="textTitle"
          color="primary"
          marginBottom="5px"
        >
          Nome
        </Text>
        <TextField
          name="name"
          placeholder="Digite o seu nome aqui..."
          value={sendInfo.name}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginTop: '5px' }}>
        <Text
          tag="p"
          variant="textTitle"
          color="primary"
          marginBottom="5px"
        >
          E-mail
        </Text>
        <TextField
          name="email"
          type="email"
          placeholder="Digite o seu e-mail aqui..."
          value={sendInfo.email}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginTop: '5px' }}>
        <Text
          tag="p"
          variant="textTitle"
          color="primary"
          marginBottom="5px"
        >
          Menssagem
        </Text>
        <TextArea
          name="message"
          placeholder="Digite a sua mensagem aqui..."
          value={sendInfo.message}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

const Form: React.FC<IForm> = ({ modalProps, onCloseFunction }) => (
  <FormStyles.Container {...modalProps}>
    <FormStyles.CloseBox onClick={() => onCloseFunction()}>
      <CloseIcon />
    </FormStyles.CloseBox>
    <FormContent />
  </FormStyles.Container>
);

export default Form;
