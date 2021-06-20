import React from 'react';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import SIGNUP_MUTATION from '../../schemas/Mutations/Signup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Form, Footer } from './styles';
import Link from 'next/link';

const Signup: React.FC = () => {
  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      email: '',
      password: '',
    }
  });

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email(),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Confirm your password').oneOf([Yup.ref('password'), null], 'Password must match')
  });

  const validate = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      const response = await signup({
        variables: values as any,
      });

      localStorage.setItem('token', response.data.signup.token);

      setSubmitting(false);
    }
  });

  return (
    <Container>
      <Form onSubmit={validate.handleSubmit}>
        <Input
          id={'email'}
          type="text"
          label={'Email:'}
          placeholder={'Digite seu melhor email'}
          value={validate.values.email}
          onBlur={validate.handleBlur}
          onChange={validate.handleChange}
        />

        <Input
          id={'password'}
          type="password"
          label={'Senha:'}
          placeholder={'Digite sua senha'}
          value={validate.values.password}
          onBlur={validate.handleBlur}
          onChange={validate.handleChange}
        />

        <Input
          id={'confirmPassword'}
          type="password"
          label={'Confirmar senha:'}
          placeholder={'Confirmar a senha'}
          value={validate.values.confirmPassword}
          onBlur={validate.handleBlur}
          onChange={validate.handleChange}
        />

        <Button type="submit" disabled={false}>
          <span>Cadastra-se</span>
        </Button>
      </Form>
      <Footer>

        <Link href="/">Faça o login</Link>
      </Footer>
    </Container >
  );
};

export default Signup;
