import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProp {
  type: 'submit' | 'button';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProp> = ({ children, type, disabled, onClick }) => (
  <ButtonContainer type={type} disabled={disabled} onClick={onClick}>
    {children}
  </ButtonContainer>
);


export default Button;
