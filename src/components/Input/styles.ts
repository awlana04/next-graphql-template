import styled from 'styled-components';

export const Container = styled.div`
  max-width: 25.6rem;
  height: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.fonts.graySemiLight};
  font-size: 0.9rem;
  font-weight: 500;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;

  border: 1px solid ${({ theme }) => theme.elements.border};
  border-radius: 0.35rem;

  ::placeholder {
    color: ${({ theme }) => theme.fonts.placeholder};
  }

  :focus,
  :hover {
    border: 1px solid ${({ theme }) => theme.elements.borderFocus};
  }
`;
