import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { successMessage } from './SuccessMessage';
import {
  ButtonSubmit,
  ButtonTextContact,
  ContainerForm,
  ContainerIcon,
  InputDiscord,
  InputFox,
} from './ContactUs.styled';
// import * as Yup from 'yup';
// import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

interface FormValues {
  email: string;
  name: string;
}

export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm('mjvnpjav');
  if (state.succeeded) {
    successMessage();
  }

  return (
    <>
      <ContainerForm onSubmit={handleSubmit} id="mint">
        <label htmlFor="email"></label>
        <ContainerIcon>
          <InputDiscord
            id="name"
            type="name"
            name="name"
            placeholder="@username"
          />
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </ContainerIcon>
        <ContainerIcon>
          <InputFox
            id="adress"
            name="adress"
            type="name"
            placeholder="Wallet address"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </ContainerIcon>
        <ButtonSubmit type="submit" disabled={state.submitting}>
          <ButtonTextContact>Mint</ButtonTextContact>
        </ButtonSubmit>
      </ContainerForm>
    </>
  );
};
