import CloseIcon from '@/assets/Icons/CloseIcon';
import Text from '@/components/foundation/Text';
import React, { FormEvent } from 'react';
import { IModalChildren } from '../Modal';
import FormStyles from './styles';

type IForm = {
  modalProps?: IModalChildren
  onCloseFunction: Function
};

const FormContent: React.FC = () => (
  <form onSubmit={(event: FormEvent<Element>) => console.log('teste', event)}>
    <Text
      variant="textTitle"
      color="primary"
    >
      Nome:
    </Text>
  </form>
);

const Form: React.FC<IForm> = ({ modalProps, onCloseFunction }) => (
  <FormStyles.Container {...modalProps}>
    <FormStyles.CloseBox onClick={() => onCloseFunction()}>
      <CloseIcon />
    </FormStyles.CloseBox>
    <FormContent />
  </FormStyles.Container>
);

export default Form;
