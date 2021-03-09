import CloseIcon from '@/assets/Icons/closeIcon';
import TextArea from '@/components/forms/TextArea';
import TextField from '@/components/forms/TextField';
import Text from '@/components/foundation/Text';
import formStatus from '@/enum/formStatus';
import { Lottie } from '@crello/react-lottie';
import IStatus from '@/interfaces/status';
import React, {
  FormEvent, useCallback, useState, useEffect,
} from 'react';
import sendMessage from 'services/sendMessage';
import CustomButton from '../CustomButton';
import { IModalChildren } from '../Modal';
import FormStyles from './styles';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import loadingAnimation from './animations/loading.json';

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

type IFormContent = {
  name: string,
  email: string,
  message: string,
}

type IForm = {
  modalProps?: IModalChildren
  onCloseFunction: Function
};

const FormContent: React.FC = () => {
  const [sendInfo, setSendInfo] = useState<IFormContent>(initialFormState);
  const [submitStatus, setSubmitStatus] = useState<IStatus>(formStatus.DEFAULT);
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const fieldName = event.target.getAttribute('name')?.toString();
    setSendInfo({
      ...sendInfo,
      [fieldName || 'inputKey']: event.target.value,
    });
  }, [sendInfo]);

  function verifyFormInfo(verifyContent: IFormContent): boolean {
    return verifyContent.name === '' || verifyContent.email === '' || verifyContent.message === '';
  }

  function onSubmited(event: FormEvent<Element>): void {
    setSubmitStatus(formStatus.LOADING);
    event.preventDefault();
    const userDTO = {
      name: sendInfo.name,
      email: sendInfo.email,
      message: sendInfo.message,
    };

    sendMessage(userDTO)
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          return respostaDoServidor.json();
        }
        throw new Error('Não foi possível cadastrar o usuário agora');
      })
      .then(() => {
        setSubmitStatus(formStatus.SUCCESS);
        setSendInfo(initialFormState);
      })
      .catch(() => {
        setSubmitStatus(formStatus.ERROR);
      });
  }

  useEffect(() => {
    if (submitStatus === formStatus.SUCCESS
        || submitStatus === formStatus.ERROR) {
      setTimeout(() => {
        setSubmitStatus(formStatus.DEFAULT);
        setSendInfo(initialFormState);
      }, 2500);
    }
  }, [submitStatus]);

  return (
    <form onSubmit={(event: FormEvent<Element>) => onSubmited(event)}>
      <Text
        variant="textTitle"
        color="primary"
        textAlign="center"
        fontSize={{
          mobile: '26px',
          desktop: '34px',
        }}
      >
        {
        // eslint-disable-next-line no-nested-ternary
        submitStatus === formStatus.DEFAULT || submitStatus === formStatus.LOADING
          ? 'Envie sua mensagem.'
          : submitStatus === formStatus.SUCCESS
            ? 'Obrigado pela mensagem!'
            : 'Aconteceu algum erro ao tentar enviar a sua mensagem.'
            }
      </Text>
      {submitStatus === formStatus.DEFAULT
        ? (
          <>
            <div style={{ marginTop: '25px' }}>
              <Text
                tag="p"
                variant="textTitle"
                color="primary"
                margin="0 0 5px 0"
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
            <div style={{ marginTop: '25px', alignItems: 'flex-end' }}>
              <CustomButton
                type="submit"
                text="Enviar mensagem"
                onClick={() => {}}
                disabled={verifyFormInfo(sendInfo)}
              />
            </div>
          </>
        )
        : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Lottie
              width="250px"
              height="250px"
              config={{
                // eslint-disable-next-line no-nested-ternary
                animationData: submitStatus === formStatus.LOADING
                  ? loadingAnimation : submitStatus === formStatus.SUCCESS
                    ? JSON.parse(successAnimation) : errorAnimation,
                loop: false,
                autoplay: true,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
            />
          </div>
        )}
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
