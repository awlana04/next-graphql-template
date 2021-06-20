import React from 'react';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import SIGNIN_MUTATION from '../../schemas/Mutations/Signin';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Form, Footer } from './styles';
import Link from 'next/link';

const Login: React.FC = () => {
  const [signin] = useMutation(SIGNIN_MUTATION, {
    variables: {
      email: '',
      password: '',
    }
  })

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Very short'),
  })

  const validate = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      const response = await signin({
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

        <Button type="submit" disabled={false}>
          <span>Entrar</span>
        </Button>
      </Form>
      <Footer>

        <Link href="/signup">Cadastra-se</Link>
      </Footer>
    </Container>
  );
};

export default Login;
