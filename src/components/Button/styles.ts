import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 2.6rem;
  padding: auto;

  background-color: ${({ theme }) => theme.elements.button};
  border-radius: 0.35rem;

  color: ${({ theme }) => theme.fonts.white};
  font-size: 0.9rem;

  cursor: pointer;

  :disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.elements.buttonDisabled};
  }
`;
