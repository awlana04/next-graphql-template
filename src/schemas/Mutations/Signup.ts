import { gql } from '@apollo/client';

const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
    }
  }
`;

export default SIGNUP_MUTATION;
