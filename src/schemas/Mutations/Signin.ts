import { gql } from '@apollo/client';

const SIGNIN_MUTATION = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
    }
  }
`;

export default SIGNIN_MUTATION;
